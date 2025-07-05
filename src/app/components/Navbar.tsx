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
      <div className='flex justify-between items-center px-32 py-8'>
        <div className='flex-1'>
          <Image src='/search.svg' alt='Search Icon' width={iconSize} height={iconSize} unoptimized 
          className='flex-1'/>
        </div>

        <div className='flex justify-center flex-1'>
          <Link href='/'>
            <Image src='/logo.png' alt='Logo' width={logoSize} height={logoSize} />
          </Link>
        </div>

        <div className='flex justify-end items-center gap-6 flex-1'>
          <Link href='/account'>
            <Image src='/person.svg' alt='Account Icon' width={iconSize} height={iconSize} unoptimized />
          </Link>
          <Link href="/cart" className="relative">
            {/* Cart Icon */}
            <Image
              src="/bag.svg"
              alt="Cart Icon"
              width={iconSize}
              height={iconSize}
              unoptimized
            />

            {/* Counter Badge */}
            {itemsCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-black text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">
                {itemsCount}
              </span>
            )}
          </Link>
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