'use client';

import { useItemContext } from '../contexts/ItemContext';
import { addItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch } from '@/lib/redux/store'
import toast from 'react-hot-toast';

export default function AddToCartButton() {
  const { item, isSelectionComplete } = useItemContext();
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addItem(item));
    toast.success('Item added to cart.');
  };

  return (
    <>
      {isSelectionComplete(item) && 
        <button 
          className='mt-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white cursor-pointer'
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      }
    </>
    
  );
}
