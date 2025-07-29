import Image from 'next/image'

interface Props {
  location: string;
  address: string;
  image: string;
  hours: Record<string, string>;
}


export default function LocationCard({ location, address, image, hours }: Props) {
  return (
    <div className='flex p-6 border rounded-xl overflow-hidden'>
      {/* Image Section */}
      <div className='relative w-[40vw] aspect-[4/3]'>
        <Image
          fill
          src={`/locations/${image}`}
          alt={`${location} Badminton Shop`}
          className='object-contain'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>

      {/* Text Section */}
      <div className='p-6 flex flex-col justify-center w-full'>
        <h2 className='text-xl font-semibold mb-2'>{location}</h2>
        <p className='text-gray-700'>
          Address: {address}
        </p>
        <div className='text-gray-600 text-sm'>
          <p className='font-medium mb-1'>Hours:</p>
          <ul>
            {Object.entries(hours).map(([day, time]) => (
              <li key={day}>
                <span className='font-medium'>{day}:</span> {time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}