'use client';

import Image from 'next/image';
import type { Item } from '@/types/types';
import { addItem } from '@/lib/features/cart/cartSlice';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks'

const ItemCard = ({image, name, price} : Item) => {
  const dispatch = useAppDispatch();
  
  const addToCartHandler = () => {
    const item = {image: 'hi', name: 'test cart item', price: 21};
    dispatch(addItem(item));
  };
  
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="relative w-full h-90 rounded p-4">
        <Image
          src={image}
          alt={name}
          fill={true}
          className="object-cover"
        />
      </div>
      <h1 className="mt-2">{name}</h1>
      <h1>${price}</h1>
      
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={addToCartHandler}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;