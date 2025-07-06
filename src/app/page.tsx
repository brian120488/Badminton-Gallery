import LocationCard from './components/LocationCard';
import FadeIn from './components/FadeIn';

export default function Home() {
  return (
    <div className='relative mx-32 flex flex-col items-center'>
      <h1 className='mt-16 text-4xl font-bold'>Badminton Gallery</h1>
      <h1 className='text-2xl'>&quot;Bringing the Best of Badminton to Every Player&quot;</h1>
      <div className="flex flex-col gap-y-6 mt-6">
        <FadeIn>
          <LocationCard location='Flushing' address='133-33 39th Ave, Queens, NY 11354' image="flushing.jpg" />
        </FadeIn>
        <FadeIn>
        <LocationCard location='Brooklyn' address='974 58th St, Brooklyn, NY 11219' image="bkny.jpg" />
        </FadeIn>
        <FadeIn>
        <LocationCard location='Philadelphia' address='3300 Aldine St, Philadelphia, PA 19136' image="philadelphia.jpg" />
        </FadeIn>
      </div>

      
      {/* <Image
        src='/locations/bkny.jpg'
        alt='Brooklyn Badminton Shop'
        width={800}
        height={600}
        className='rounded-lg shadow-lg'
      />
      <Image
        src='/locations/philadelphia.jpg'
        alt='Philadelphia Badminton Shop'
        width={800}
        height={600}
        className='rounded-lg shadow-lg'
      /> */}
    </div>
  );
}
