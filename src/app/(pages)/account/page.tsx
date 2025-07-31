'use client';

import { signOut } from 'next-auth/react';
import { Construction } from 'lucide-react';

export default function AccountPage() {
  const handleLogout = () => signOut({ callbackUrl: '/' });

  return (
    <main className='max-w-xl mx-auto px-6 py-10'>
      <h1 className='text-3xl font-semibold mb-6'>Account</h1>

      <div className='flex items-center gap-3 p-4 mb-8 border border-amber-400 rounded-md bg-amber-50'>
        <Construction className='text-amber-500' size={24} />
        <p className='text-sm text-amber-900 m-0'>
          We are currently adding functionality for users to view their order history. Stay tuned!
        </p>
      </div>

      <button
        onClick={handleLogout}
        className='w-full max-w-xs bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors duration-200'
        type='button'
      >
        Sign Out
      </button>
    </main>
  );
}
