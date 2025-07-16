'use client';

import { useItemContext } from '../contexts/ItemContext';
import { addItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch } from '@/lib/redux/store'

export default function AddToCartButton() {
  const { item } = useItemContext();
  const dispatch = useAppDispatch();
  
  const addToCartHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <button 
      className='mt-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white cursor-pointer'
      onClick={addToCartHandler}
    >
      Add to Cart
    </button>
  );
}
