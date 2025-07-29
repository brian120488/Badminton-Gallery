import LocationCard from './components/LocationCard';
import FadeIn from './components/FadeIn';

export default function Home() {
  const bknyHours =  {
    Monday: '10am - 8pm',
    Tuesday: '10am - 8pm',
    Wednesday: '10am - 8pm',
    Thursday: '10am - 8pm',
    Friday: '10am - 8pm',
    Saturday: '1 - 8pm',
    Sunday: '1 - 8pm',
  };

  const flushingHours =  {
    Monday: '12 - 9pm',
    Tuesday: '12 - 9pm',
    Wednesday: '12 - 9pm',
    Thursday: '12 - 9pm',
    Friday: '12 - 9pm',
    Saturday: '11am - 10pm',
    Sunday: '11am - 9pm',
  };

  const philyHours = {
    Monday: '11am - 7pm',
    Tuesday: '11am - 7pm',
    Wednesday: '11am - 7pm',
    Thursday: '11am - 7pm',
    Friday: '11am - 8pm',
    Saturday: '10:30am - 7pm',
    Sunday: '11am - 7pm',
  }

  return (
    <div className='relative mx-32 flex flex-col items-center'>
      <h1 className='mt-16 text-2xl font-semibold'>We are currently adding more items. Stay tuned!</h1>
      <h1 className='mt-8 text-4xl font-bold'>Badminton Gallery</h1>
      <h1 className='text-2xl'>&quot;Bringing the Best of Badminton to Every Player&quot;</h1>
      <div className="flex flex-col gap-y-6 mt-6">
        <FadeIn>
          <LocationCard 
            location='Flushing' 
            address='133-33 39th Ave, Queens, NY 11354' 
            image="flushing.jpg" 
            hours={flushingHours}
          />
        </FadeIn>
        <FadeIn>
          <LocationCard 
            location='Brooklyn' 
            address='974 58th St, Brooklyn, NY 11219' 
            image="bkny.jpg" 
            hours={bknyHours}
          />
        </FadeIn>
        <FadeIn>
          <LocationCard location='Philadelphia' address='3300 Aldine St, Philadelphia, PA 19136' image="philadelphia.jpg" 
          hours={philyHours}/>
        </FadeIn>
      </div>
    </div>
  );
}
