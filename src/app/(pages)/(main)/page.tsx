import LocationCard from './components/LocationCard';
import FadeIn from './components/FadeIn';
import { Construction } from 'lucide-react';

export default function Home() {
  const flushingHours = {
    Monday: '12 - 9pm',
    Tuesday: '12 - 9pm',
    Wednesday: '12 - 9pm',
    Thursday: '12 - 9pm',
    Friday: '12 - 9pm',
    Saturday: '11am - 10pm',
    Sunday: '11am - 9pm',
  };

  const bknyHours = {
    Monday: '10am - 8pm',
    Tuesday: '10am - 8pm',
    Wednesday: '10am - 8pm',
    Thursday: '10am - 8pm',
    Friday: '10am - 8pm',
    Saturday: '1 - 8pm',
    Sunday: '1 - 8pm',
  };

  const philyHours = {
    Monday: '11am - 7pm',
    Tuesday: '11am - 7pm',
    Wednesday: '11am - 7pm',
    Thursday: '11am - 7pm',
    Friday: '11am - 8pm',
    Saturday: '10:30am - 7pm',
    Sunday: '11am - 7pm',
  };

  const flushingPhone = '(646) 251-6684';
  const bknyPhone = '(347) 291-6866';
  const philyPhone = '(267) 270-9543';

  return (
    <div className='relative px-6 md:px-16 xl:px-32 py-12 flex flex-col items-center bg-gray-50 min-h-screen'>
      <div className='text-center max-w-3xl'>
        <div className='flex items-center gap-3 p-4 mb-8 border border-amber-400 rounded-md bg-amber-50'>
          <Construction className='text-amber-500' size={24} />
          <p className='text-sm text-amber-900 m-0'>
            We are currently adding more items and features to the site. Stay tuned!
          </p>
        </div>
        <h1 className='text-indigo-600 font-medium text-lg'>Welcome to</h1>
        <h2 className='text-5xl font-extrabold tracking-tight text-gray-900 mb-3'>
          Badminton Gallery
        </h2>
        <p className='text-lg text-gray-600 mb-6'>
          Bringing the Best of Badminton to Every Player
        </p>
      </div>

      <section id='locations' className='flex flex-col gap-10 pt-8 w-full max-w-5xl'>
        <FadeIn>
          <LocationCard
            location='Flushing'
            address='133-33 39th Ave, Queens, NY 11354'
            image='flushing.jpg'
            hours={flushingHours}
            phone={flushingPhone}
          />
        </FadeIn>
        <FadeIn>
          <LocationCard
            location='Brooklyn'
            address='974 58th St, Brooklyn, NY 11219'
            image='bkny.jpg'
            hours={bknyHours}
            phone={bknyPhone}
          />
        </FadeIn>
        <FadeIn>
          <LocationCard
            location='Philadelphia'
            address='3300 Aldine St, Philadelphia, PA 19136'
            image='philadelphia.jpg'
            hours={philyHours}
            phone={philyPhone}
          />
        </FadeIn>
      </section>
    </div>
  );
}
