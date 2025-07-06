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

export async function POST(req: Request) {
  const { items } = await req.json();
  console.log('Items: ', items);
  const line_items = convertToStripeLineItems(items);
  console.log('Line Items: ', line_items);

  const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_BASE_URL;

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items,
    mode: 'payment',
    return_url: `${origin}/return/{CHECKOUT_SESSION_ID}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}