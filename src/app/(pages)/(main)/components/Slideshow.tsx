'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/gallery/goku.jpg',
  '/gallery/iron-man.jpeg',
  '/gallery/tom-and-jerry.jpeg',
  '/gallery/capsule.jpeg',
  '/gallery/spider-man.jpg',
  '/gallery/powerpuff-girls.jpeg',
];

const IMAGE_WIDTH = 280;
const GAP = 8;
// const VISIBLE_COUNT = 5;
const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const shift = -(IMAGE_WIDTH + GAP) * index;

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % total);
    }, AUTO_SCROLL_INTERVAL);
  };

  const handleNext = () => {
    setIndex(prev => (prev + 1) % total);
    startAutoScroll(); // reset interval
  };

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + total) % total);
    startAutoScroll(); // reset interval
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const visibleImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden py-6">
      {/* Arrows */}
      <div className="flex justify-end mb-4 px-4">
        <div className="flex gap-2 mr-4">
          <button
            onClick={handlePrev}
            className="flex justify-center items-center cursor-pointer bg-gray-100 rounded-full"
          >
            <ChevronLeft className='size-6'/>
          </button>

          <button
            onClick={handleNext}
            className="flex justify-center items-center cursor-pointer bg-gray-100 rounded-full"
          >
            <ChevronRight className='size-6'/>
          </button>

        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-2"
          animate={{ x: shift }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          style={{ width: (IMAGE_WIDTH + GAP) * visibleImages.length }}
        >
          {visibleImages.map((src, i) => (
            <div
              key={i}
              className="min-w-[280px] h-[400px] relative rounded-lg overflow-hidden flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Image ${i}`}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="w-fit mx-auto mt-4 bg-gray-100 px-2 py-2 rounded-2xl flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`size-1.5 rounded-full ${
              i === index ? 'bg-gray-800' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>


    </div>
  );
}
