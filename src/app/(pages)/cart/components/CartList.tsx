'use client'; // needed for localStorage

import { clearCart, removeItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import Link from 'next/link';

const ItemList = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemCount = useAppSelector((state) => state.cart.itemCount);
  const subtotal = useAppSelector((state) => state.cart.subtotal);
  const dispatch = useAppDispatch();

  return (
    <>
    {itemCount == 0 && 
      <h1>There are no items in your cart.</h1>
    }
    
    {itemCount > 0 &&
    <>
      <div className='overflow-x-auto rounded-md shadow-sm'>
        <table className='min-w-full table-auto text-sm text-gray-700'>
          <thead className='bg-gray-100 uppercase text-xs tracking-wide text-gray-600'>
            <tr>
              <th className='px-4 py-3 text-left'>#</th>
              <th className='px-4 py-3 text-left'>Item</th>
              <th className='px-4 py-3 text-left'>Price</th>
              <th className='px-4 py-3 text-left'>Qty</th>
              <th className='px-4 py-3 text-left'>Total</th>
              <th className='px-4 py-3 text-center'>Remove</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {cartItems.map((item, i) => (
              <tr key={i} className='hover:bg-gray-50 transition'>
                <td className='px-4 py-3'>{i + 1}</td>
                <td className='px-4 py-3'>
                  <div className='font-medium'>{item.name}</div>
                  {item.selection && (
                    <ul className='text-xs text-gray-500 mt-1 space-y-1'>
                      {Object.entries(item.selection).map(([key, val]) => (
                        <li key={key}>
                          {key.replace(/_/g, ' ')}: {val}
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
                <td className='px-4 py-3'>${item.price.toFixed(2)}</td>
                <td className='px-4 py-3'>{item.quantity}</td>
                <td className='px-4 py-3'>
                  ${(item.price * item.quantity!).toFixed(2)}
                </td>
                <td className='px-4 py-3 text-center'>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className='text-red-500 hover:text-red-700 font-semibold text-lg'
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {itemCount > 0 && (
        <div className='mt-6 text-right space-y-4'>
          <h3 className='text-lg font-semibold'>Subtotal: ${subtotal.toFixed(2)}</h3>
          <div className='space-x-3'>
            <Link href='/checkout'>
              <button className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium'>
                Proceed to Checkout
              </button>
            </Link>
            <button
              className='bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition font-medium'
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
    
    }
    </>
  );
};

export default ItemList;
