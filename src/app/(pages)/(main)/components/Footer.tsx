// components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:underline">Shipping Info</Link></li>
            {/* <li><Link href="/returns" className="hover:underline">Returns & Exchanges</Link></li> */}
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="https://us.yonex.com/pages/spotting-counterfeits" className="hover:underline">Spotting Counterfeits</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/#locations" className="hover:underline">Our Locations</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center">
        <h4 className="text-sm font-semibold mb-2 text-gray-400">We Accept</h4>
        <div className="flex justify-center items-center gap-6">
          <Image src="/payments/visa.svg" alt="Visa" width={50} height={30} />
          <Image src="/payments/mastercard.svg" alt="Mastercard" width={50} height={30} />
          <Image src="/payments/amex.svg" alt="Amex" width={50} height={30} />
          <Image src="/payments/discover.svg" alt="Discover" width={50} height={30} />
          <Image src="/payments/applepay.svg" alt="Apple Pay" width={50} height={30} />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Badminton Gallery. All rights reserved.
      </div>
    </footer>
  )
}
