'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { useAppSelector } from '@/lib/redux/store'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Checkout() {
  const cart = useAppSelector(state => state.cart);

  const fetchClientSecret = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: cart }),
    });
  
    const { clientSecret } = await res.json();
    return clientSecret;
  };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}