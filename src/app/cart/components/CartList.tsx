'use client'; // needed for localStorage

import { useAppSelector } from '@/lib/hooks'
import Link from 'next/link';

const ItemList = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <h2>Cart Items</h2>
      {cartItems.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <Link href="/checkout">
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Checkout
        </button>
      </Link>
    </>
  )
}

export default ItemList;