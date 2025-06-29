{/* 
  TODO: Image is not centered properly 
  TODO: SVG stroke widths are inconsistent
  */}

import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
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
        
        <Link href='/' replace={true}>
          <Image
            src='/logo.png'
            alt='Logo'
            width={logoSize}
            height={logoSize}
          />
        </Link>
        <div className='flex gap-6'>
          <Image
            src='/person.svg'
            alt='Account Icon'
            width={iconSize}
            height={iconSize}
            unoptimized
          />
          <Image
            src='/bag.svg'
            alt='Cart Icon'
            width={iconSize}
            height={iconSize}
            unoptimized
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex justify-evenly px-50'>
        {navList.map((item) => (
          <Link
            key={item.name}
            href={`/collections/${item.href}`}
            className='text-lg font-bold'
            replace={true}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>



  );
}