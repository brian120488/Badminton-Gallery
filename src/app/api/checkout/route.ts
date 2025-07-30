import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'
import { Item, Selection } from '@/types/types'

function describeSelection(selection: Selection) {
  const lines: string[] = [];

  if (selection.color) lines.push(`Color: ${selection.color}`);
  if (selection.weight_grip) lines.push(`Weight/Grip: ${selection.weight_grip}`);
  if (selection.string) lines.push(`String: ${selection.string}`);
  if (selection.tension && !selection.string?.startsWith('No')) lines.push(`Tension: ${selection.tension} lbs`);

  return lines.length > 0 ? lines.join(', ') : undefined; // doesn't work for Stripe Checkout yet
}

function convertToStripeLineItems(cartItems: Item[]) {
  return cartItems.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        description: describeSelection(item.selection),
        images: item.images,
      },
      unit_amount: Math.round(item.price * 100), // convert dollars to cents
    },
    quantity: item.quantity ?? 1,
  }));
}

// Expects subtotal in Stripe units
function getShippingRateData(subtotal: number) {
  if (subtotal >= 15000) { 
    // Free shipping
    return {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: { amount: 0, currency: 'usd' },
        display_name: 'Free Shipping',
        delivery_estimate: {
          minimum: { unit: 'business_day', value: 3 },
          maximum: { unit: 'business_day', value: 5 },
        },
      },
    } as const;
  } else {
    // Standard $15 shipping
    return {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: { amount: 1500, currency: 'usd' },
        display_name: 'Standard Shipping',
        delivery_estimate: {
          minimum: { unit: 'business_day', value: 3 },
          maximum: { unit: 'business_day', value: 5 },
        },
      },
    } as const;
  }
}

export async function POST(req: Request) {
  const { cart } = await req.json();
  const items = cart.items;
  const line_items = convertToStripeLineItems(items);

  const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_BASE_URL;
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items,
    mode: 'payment',
    return_url: `${origin}/return/{CHECKOUT_SESSION_ID}`,
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'], // Customize this to your region
    },
    shipping_options: [getShippingRateData(cart.subtotal * 100)],
    allow_promotion_codes: true,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}