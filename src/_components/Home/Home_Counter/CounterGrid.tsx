'use client';

import { motion } from 'framer-motion';           
import Image from 'next/image';                  
import CountUp from 'react-countup';             
import { CounterItem } from '@/assets/type/CounterInterface'; 

// Array of counters for display (static data, can be moved to constants later)
const counters: CounterItem[] = [
  {
    img: '/assets/Homepage/our-core-strength/vector1.webp',
    number: 21,
    text: 'Global Offices',
  },
  {
    img: '/assets/Homepage/our-core-strength/vector2.webp',
    number: 100,
    text: 'UK Education Fair',
  },
  {
    img: '/assets/Homepage/our-core-strength/vector3.webp',
    number: 100000,
    text: 'Courses Offered',
  },
  {
    img: '/assets/Homepage/our-core-strength/vector4.webp',
    number: 370,
    text: 'Colleagues',
  },
  {
    img: '/assets/Homepage/our-core-strength/vector5.webp',
    number: 250,
    text: 'University Partners',
  },
  {
    img: '/assets/Homepage/our-core-strength/vector6.webp',
    number: 153000,
    text: 'Student Served',
  },
];

// Functional Component: CounterGrid
export default function CounterGrid() {
  return (
    <>
      {counters.map((item, index) => (
        <motion.div
          key={index}
          className="text-center flex flex-col items-center justify-between gap-1"
          // Animate on scroll into view
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Counter Icon */}
          <Image
            src={item.img}
            alt={item.text}
            width={100}
            height={100}
            className="w-12 h-12"
            loading="lazy"
          />

          {/* Animated Counter */}
          <div className="text-4xl md:text-5xl text-center">
            <CountUp end={item.number} duration={2.5} />
            {index !== 0 && '+'}
          </div>

          {/* Label Text */}
          <h2 className="text-xs lg:text-base font-light">
            {item.text}
          </h2>
        </motion.div>
      ))}
    </>
  );
}
