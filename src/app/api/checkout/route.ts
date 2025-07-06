import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'
import { Item } from '@/types/types'

function convertToStripeLineItems(cartItems: Item[]) {
  return cartItems.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        description: item.description,
        images: [item.image],
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
    };
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
    };
  }
}

export async function POST(req: Request) {
  const { cart } = await req.json();
  const items = cart.items;

  const line_items = convertToStripeLineItems(items);
  console.log('Line Items: ', line_items);

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
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}