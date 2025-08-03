'use client'

import { useState } from "react"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('email', {
      email,
      callbackUrl,
    });

    if (res?.error) {
      setError('Sign in failed. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className="w-full max-w-md p-8 bg-white shadow-sm rounded-2xl">
      <div className="flex justify-center mb-6">
        <Image src="/logo.png" alt="Logo" width={100} height={100} priority={true}/>
      </div>

      <h1 className="text-xl font-semibold text-gray-900 mb-4">Sign In</h1>

      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Email"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200 cursor-pointer"
        >
          {loading ? 'Sending link...' : 'Continue'}
        </button>

        <div className='text-sm'>By continuing, I agree to Badminton Gallery&apos;s{' '}
          <a
            href='/privacy' 
            target='_blank'
            rel='noopener noreferrer'
            className='text-black underline hover:text-gray-800'
          >
            Privacy Policy
          </a>{' '}
          and{' '} 
          <a 
            href='/terms' 
            target='_blank'
            rel='noopener noreferrer'
            className='text-black underline hover:text-gray-800'
          >
            Terms of Use
          </a>.
        </div>
      </form>
    </div>
  )
}
