'use client'; // needed for localStorage and dispatch

import Image from 'next/image';
import type { Item } from '@/types/types';
import { addItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch } from '@/lib/redux/store'
import Link from 'next/link';

export default function ItemCard({ item }: { item: Item }) {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addItem(item));
  };
  
  return (
      <div className='p-3 border-none rounded-lg hover:shadow-2xl'>
        <Link href={`/products/${item.id}`}>
          <div className='relative w-100% aspect-5/6 max-h-sm overflow-hidden rounded-lg shadow-xs'>
            <Image
              fill
              src={item.images[0]}
              alt={item.name}
              className='object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />
          </div>
        </Link>
        <div className='p-4'>
          <h1 className='text-xl font-normal'>{item.name}</h1>
          <h2 className='text-base font-normal'>${item.price}</h2>
          
          <button 
            className='mt-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white cursor-pointer'
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
  );
}