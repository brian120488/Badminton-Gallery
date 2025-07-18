'use client';

{/* 
  TODO: SVG stroke widths are inconsistent
  */}

import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem'
import { useAppSelector } from '@/lib/redux/store'
import { useState } from 'react';

const Navbar = () => {
  const iconSize = 28;
  const logoSize = 140;
  const iconHoverScale = 'hover:scale-105';
  const navList = [
    { name: 'Rackets', href: '/racket' },
    { name: 'Shoes', href: '/shoe' },
    { name: 'Bags', href: '/bag' },
    { name: 'Apparel', href: '/apparel' },
    { name: 'Shuttles', href: '/shuttle' },
    { name: 'String', href: '/string' },
    { name: 'Paddles', href: '/paddle'}
  ];

  const itemCount = useAppSelector(state => state.cart.itemCount);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className='border-b border-gray-200 pb-2'>
      {showSearch && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 rounded-md focus:outline-none"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="mt-4 text-sm text-blue-600 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}


      {/* Top Section */}
      <div className='flex justify-between items-center px-32 py-8'>
        <div className='flex-1 cursor-pointer' onClick={() => setShowSearch(true)}>
          <Image 
            src='/search.svg' 
            alt='Search Icon' 
            width={iconSize} 
            height={iconSize}  
            className={iconHoverScale}
          />
        </div>

        <div className='flex justify-center flex-1'>
          <Link href='/'>
            <Image src='/logo.png' alt='Logo' width={logoSize} height={logoSize} priority />
          </Link>
        </div>

        <div className='flex justify-end items-center gap-6 flex-1'>
          <Link href='/account'>
            <Image 
              src='/person.svg' 
              alt='Account Icon' 
              width={iconSize} 
              height={iconSize} 
              className={iconHoverScale}
            />
          </Link>
          <Link href='/cart' className='relative'>
            {/* Cart Icon */}
            <Image
              src='/bag.svg'
              alt='Cart Icon'
              width={iconSize}
              height={iconSize}
              className={iconHoverScale}
            />

            {/* Counter Badge */}
            {itemCount > 0 && (
              <span className='absolute top-0 right-0 -mt-1 -mr-1 bg-black text-white text-xs font-bold rounded-full size-5 flex items-center justify-center'>
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>


      {/* Bottom Section */}
      <div className='flex justify-center mx-50 gap-16'>
        {navList.map((item, i) => (
          <NavItem 
            key={i}
            href={`/collections${item.href}`}
          >{item.name}</NavItem>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;