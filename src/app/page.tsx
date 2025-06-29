import Image from 'next/image';
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Badminton Store</h1>
      <Image
        src="/badminton-court.jpg"
        alt="Badminton Court"
        width={800}
        height={600}
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg">
        Explore our wide range of badminton equipment and apparel!
      </p>
    </main>
  );
}
