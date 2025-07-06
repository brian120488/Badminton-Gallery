'use client'; // needed for localStorage and dispatch

import Image from 'next/image';
import type { Item } from '@/types/types';
import { addItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch } from '@/lib/redux/store'

const ItemCard = ({image, name, price} : Item) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    const item = {image: image, name: name, price: price, quantity: 1};
    dispatch(addItem(item));
  };
  
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="relative w-full h-90 rounded p-4">
        <Image
          fill
          src={image}
          alt={name}
          className="object-cover"
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>
      <h1 className="mt-2 text-xl font-bold">{name}</h1>
      <h2 className="text-lg">${price}</h2>
      
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