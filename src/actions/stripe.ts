'use server'

import { headers } from 'next/headers'

import { stripe } from '@/lib/stripe'

export async function fetchClientSecret() {
  const origin = (await headers()).get('origin')

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      // {
      //   // Provide the exact Price ID (for example, price_1234) of
      //   // the product you want to sell
      //   price: 'price_1RhGgOBwXGcasIXufgSSSrx0',
      //   quantity: 1
      // },
      // {
      //   price: 'price_1RhGmMBwXGcasIXu05vmtE4K',
      //   quantity: 2
      // }
      // {
      //   price_data: {
      //     currency: 'usd',
      //     product_data: {
      //       name: 'Badminton Racket',
      //       description: 'High-quality badminton racket for professional players.',
      //     },
      //     unit_amount: 2000, // $20.00
      //   },
      //   quantity: 1,
      // },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Test Item',
            description: 'Strung at 50 lbs with BG80',
            images: ['https://media.istockphoto.com/id/955268206/photo/cat-with-a-badminton-racket.jpg?s=612x612&w=0&k=20&c=CbhxFMhhdDb5GKI8MOChD-Rkd1fzkyg6FuofhT8Rhz0='],
          },
          unit_amount: 50, // $0.50
        },
        quantity: 1,
      }
    ],
    mode: 'payment',
    return_url: `${origin}/return/{CHECKOUT_SESSION_ID}`,
  })

  return session.client_secret!
}