import Image from "next/image"

export default async function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-sm rounded-2xl">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Logo" width={100} height={100} priority={true}/>
        </div>
        <h1 className="text-xl text-center font-semibold text-gray-900 mb-4">Check your email</h1>
        <p className="text-md text-gray-900 mb-4">A sign-in link has been sent to your email.</p>
        <a href='/' className="text-xl text-center font-semibold text-gray-900 mb-4">{process.env.NEXT_PUBLIC_BASE_URL}</a>
      </div>
    </div>
  )
}
