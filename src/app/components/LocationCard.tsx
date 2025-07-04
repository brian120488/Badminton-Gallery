import Image from 'next/image'

interface Props {
  location: string;
  address: string;
  image: string;
}

export default function LocationCard({ location, address, image }: Props) {
  return (
    <div className='flex p-6 mx-12 border rounded-xl overflow-hidden'>
      {/* Image Section */}
      <div className='relative w-[40vw] aspect-[4/3]'>
        <Image
          fill
          src={`/locations/${image}`}
          alt={`${location} Badminton Shop`}
          className='object-contain'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      {/* Text Section */}
      <div className='p-6 flex flex-col justify-center w-full'>
        <h2 className='text-xl font-semibold mb-2'>{location}</h2>
        <p className='text-gray-700'>
          Address: {address}
        </p>
      </div>
    </div>
);
}