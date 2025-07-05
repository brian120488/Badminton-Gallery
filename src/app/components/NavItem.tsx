import Link from 'next/link'
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string,
}

export default function NavItem({ children, href }: Props) {
  return (
    <Link href={href} className="group inline-block text-lg font-bold text-gray-800 group-hover:shadow">
      {children}
      <span className="block h-[2px] -mt-1 bg-black w-0 group-hover:animate-test"></span>
    </Link>
  )
}