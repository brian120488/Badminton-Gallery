import Link from 'next/link'
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string,
}

export default function NavItem({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="inline-block text-lg font-bold text-gray-800 underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-current transition-all duration-300"
    >
      {children}
    </Link>
  )
}