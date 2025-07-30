import Image from 'next/image'

interface Props {
  location: string;
  address: string;
  image: string;
  hours: Record<string, string>;
}

export default function LocationCard({ location, address, image, hours }: Props) {
  return (
    <div className='flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 p-6 transition-all hover:shadow-lg'>
      {/* Image Section */}
      <div className='relative w-full md:w-[40%] aspect-[4/3] rounded-xl overflow-hidden'>
        <Image
          fill
          src={`/locations/${image}`}
          alt={`${location} Badminton Shop`}
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>

      {/* Text Section */}
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>{location}</h2>
          <p className='text-gray-600 mb-4'>
            <span className='font-medium'>Address:</span> {address}
          </p>

          <div>
            <p className='font-semibold text-gray-700 mb-1'>Hours:</p>
            <ul className='grid grid-cols-2 gap-y-1 text-sm text-gray-500'>
              {Object.entries(hours).map(([day, time]) => (
                <li key={day} className='flex justify-between w-full pr-4'>
                  <span className='text-gray-600'>{day}</span>
                  <span className='text-gray-800 font-medium'>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
