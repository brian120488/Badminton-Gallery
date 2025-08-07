'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem'
import { useAppSelector } from '@/lib/redux/store'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Navbar = () => {
  const iconSize = 28;
  const logoSize = 140;
  const navList = [
    { name: 'Rackets', href: '/racket' },
    { name: 'Shoes', href: '/shoe' },
    { name: 'Bags', href: '/bag' },
    { name: 'Apparel', href: '/apparel' },
    { name: 'Shuttles', href: '/shuttle' },
    { name: 'String', href: '/string' },
    // { name: 'Paddles', href: '/paddle'}
  ];

  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = useAppSelector(state => state.cart.itemCount);

  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      const formattedSearch = searchTerm.trim().replace(/\s+/g, '-'); // replaces spaces with hyphens
      router.push(`/collections?s=${encodeURIComponent(formattedSearch)}`);

      // Close the keyboard
      inputRef.current?.blur();
    }
  };

  return (
    <nav className='border-b border-gray-200 pb-2'>
      {/* Top Section */}
      <div className='flex justify-between items-center px-4 md:px-32 py-8'>
        <div className='flex items-center gap-4 flex-1'>
          <Image 
            src='/search.svg' 
            alt='Search Icon' 
            width={iconSize} 
            height={iconSize} 
            onClick={() => setShowSearch(true)} 
            className='cursor-pointer hover:scale-105'
          />

          {/* Inline Search Input */}
          {showSearch && (
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => setShowSearch(false)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm placeholder-gray-400 border-b border-gray-300 focus:border-black pb-1 transition-all duration-200"
              autoFocus
            />
          )}


          {/* Hamburger Icon (Mobile Only) */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            {isMenuOpen && <X />}
            {!isMenuOpen && <Menu />}
          </button>
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
              className='hover:scale-105'
            />
          </Link>
          <Link href='/cart' className='relative'>
            {/* Cart Icon */}
            <Image
              src='/bag.svg'
              alt='Cart Icon'
              width={iconSize}
              height={iconSize}
              className='hover:scale-105'
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
      {/* Desktop Nav (hidden on small screens) */}
      <div className='hidden md:flex justify-center gap-12 mx-auto'>
        {navList.map((item, i) => (
          <NavItem key={i} href={`/collections${item.href}`}>
            {item.name}
          </NavItem>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-6 py-4 bg-white border-t border-gray-200 flex flex-col gap-4'>
          {navList.map((item, i) => (
            <Link
              key={i}
              href={`/collections${item.href}`}
              onClick={() => setIsMenuOpen(false)}
              className='text-gray-800 text-base hover:text-indigo-600 transition'
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;