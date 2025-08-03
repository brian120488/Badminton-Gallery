'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery1.jpg', alt: 'Smash in action' },
  { src: '/images/gallery2.jpg', alt: 'Badminton rackets' },
  { src: '/images/gallery3.jpg', alt: 'Indoor badminton court' },
  { src: '/images/gallery4.jpg', alt: 'Yonex shuttlecocks' },
  { src: '/images/gallery5.jpg', alt: 'Doubles match' },
  { src: '/images/gallery6.jpg', alt: 'Grip variety' },
];

export default function HomeGallery() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="object-cover w-full h-60 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300" />
            <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
              {img.alt}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
