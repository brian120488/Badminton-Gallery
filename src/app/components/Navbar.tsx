'use client';

{/* 
  TODO: Image is not centered properly 
  TODO: SVG stroke widths are inconsistent
  */}

import Image from 'next/image';
import Link from 'next/link';

import { useAppSelector } from '@/lib/hooks'

const Navbar = () => {
  const iconSize = 28;
  const logoSize = 150;
  const navList = [
    { name: 'Rackets', href: '/rackets' },
    { name: 'Shoes', href: '/shoes' },
    { name: 'Bags', href: '/bags' },
    { name: 'Apparel', href: '/apparel' },
    { name: 'Shuttles', href: '/shuttles' },
    { name: 'String', href: '/string' },
  ];

  const items = useAppSelector(state => state.cart.items);
  const itemsCount = items.length;

  return (
    <nav>
      {/* Top Section */}
      <div className='flex px-32 py-8 justify-between items-center'>
        <Image
          src='/search.svg'
          alt='Search Icon'
          width={iconSize}
          height={iconSize}
          unoptimized
        />
        
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={logoSize}
            height={logoSize}
          />
        </Link>
        <div className='flex gap-6'>
          <Link href='/account'>
            <Image
              src='/person.svg'
              alt='Account Icon'
              width={iconSize}
              height={iconSize}
              unoptimized
            />
          </Link>
          <Link href='/cart'>
            <Image
              src='/bag.svg'
              alt='Cart Icon'
              width={iconSize}
              height={iconSize}
              unoptimized
            />
          </Link>
          <p>{itemsCount}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex justify-evenly px-50'>
        {navList.map((item) => (
          <Link
            key={item.name}
            href={`/collections${item.href}`}
            className='text-lg font-bold'
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;