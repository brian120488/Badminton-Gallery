'use client'; // needed for localStorage

// import { useAppSelector } from '@/lib/hooks'
import Checkout from './components/Checkout'

export default function CheckoutPage() {
  // const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <>
      <h1 className="text-4xl font-bold">Checkout Page</h1>
      <Checkout />
    </>
  )
}