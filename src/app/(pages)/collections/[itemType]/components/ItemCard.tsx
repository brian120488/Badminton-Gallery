import Image from 'next/image';
import type { Item } from '@/types/types';
import Link from 'next/link';

export default function ItemCard({ item }: { item: Item }) {
  return (
      <div className='p-3 border-none rounded-lg hover:shadow-2xl'>
        <Link href={`/products/${item.id}`}>
          <div className='relative w-100% aspect-5/6 max-h-sm overflow-hidden rounded-lg bg-[#f8f8f8]'>
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
        </div>
      </div>
  );
}