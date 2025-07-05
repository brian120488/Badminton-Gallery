import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center text-center m-32'>
      <h1 className='text-6xl font-bold text-gray-900 mb-4'>404</h1>
      <p className='text-xl text-gray-600 mb-8'>Oops! The page you are looking for does not exist.</p>
      <Link
        href='/'
        className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
      >
        Go Home
      </Link>
    </div>
  );
}
