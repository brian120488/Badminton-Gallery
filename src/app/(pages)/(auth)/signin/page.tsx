// app/signin/page.tsx or app/auth/signin/page.tsx

'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('email', {
      email,
      redirect: false,
      callbackUrl: '/',
    })

    if (res?.error) {
      setError('Sign in failed. Please try again.')
    } else {
      router.push('/account') // or wherever you want to redirect
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-sm rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Sign In</h1>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200"
          >
            {loading ? 'Sending link...' : 'Sign In with Email'}
          </button>
        </form>
      </div>
    </div>
  )
}
