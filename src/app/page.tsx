import LocationCard from './components/LocationCard';
import FadeIn from './components/FadeIn';

export default function Home() {
  const bknyHours = {
    Monday: '10am - 8pm',
    Tuesday: '10am - 8pm',
    Wednesday: '10am - 8pm',
    Thursday: '10am - 8pm',
    Friday: '10am - 8pm',
    Saturday: '1 - 8pm',
    Sunday: '1 - 8pm',
  };

  const flushingHours = {
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
  };

  return (
    <div className="relative px-6 md:px-16 xl:px-32 py-12 flex flex-col items-center bg-gray-50 min-h-screen">
      <div className="text-center max-w-3xl">
        <h1 className="text-indigo-600 font-medium text-lg mb-2">Welcome to</h1>
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
          Badminton Gallery
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          “Bringing the Best of Badminton to Every Player”
        </p>
        <p className="text-md text-gray-500">
          We are currently adding more items. Stay tuned!
        </p>
      </div>

      <section id='locations' className="flex flex-col gap-10 pt-12 w-full max-w-5xl">
        <FadeIn>
          <LocationCard
            location="Flushing"
            address="133-33 39th Ave, Queens, NY 11354"
            image="flushing.jpg"
            hours={flushingHours}
          />
        </FadeIn>
        <FadeIn>
          <LocationCard
            location="Brooklyn"
            address="974 58th St, Brooklyn, NY 11219"
            image="bkny.jpg"
            hours={bknyHours}
          />
        </FadeIn>
        <FadeIn>
          <LocationCard
            location="Philadelphia"
            address="3300 Aldine St, Philadelphia, PA 19136"
            image="philadelphia.jpg"
            hours={philyHours}
          />
        </FadeIn>
      </section>
    </div>
  );
}
