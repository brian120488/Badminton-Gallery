'use client'; // needed for localStorage

import { clearCart, removeItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store'
import Link from 'next/link';

const ItemList = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemCount = useAppSelector((state) => state.cart.itemCount);
  const subtotal = useAppSelector((state) => state.cart.subtotal);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Cart Items</h2>

      <table className="min-w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left border-b">#</th>
            <th className="px-4 py-2 text-left border-b">Item</th>
            <th className="px-4 py-2 text-left border-b">Price</th>
            <th className="px-4 py-2 text-left border-b">Quantity</th>
            <th className="px-4 py-2 text-left border-b">Total</th>
          </tr>
        </thead>
        <tbody>
        {cartItems.map((item, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{i + 1}</td>
            <td className="px-4 py-2 border-b">
              <div className="font-semibold">{item.name}</div>
              {item.selection && (
                <ul className="text-sm text-gray-500">
                  {Object.entries(item.selection).map(([key, val]) => (
                    <li key={key}>
                      {key.replace(/_/g, ' ')}: {val}
                    </li>
                  ))}
                </ul>
              )}
            </td>
            <td className="px-4 py-2 border-b">${item.price.toFixed(2)}</td>
            <td className="px-4 py-2 border-b">{item.quantity}</td>
            <td className="px-4 py-2 border-b">
              ${(item.price * item.quantity!).toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b text-center">
              <button
                onClick={() => dispatch(removeItem(item))}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ×
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>


      {itemCount > 0 && (
        <>
          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          <Link href="/checkout">
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Checkout
            </button>
          </Link>
          <button 
            className="ml-2 mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => dispatch(clearCart())}
            >
            Clear Cart
          </button>
        </>
      )}
    </>
  )
}

export default ItemList;