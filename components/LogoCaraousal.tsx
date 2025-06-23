'use client';

import Image from 'next/image';
import logos from '@/constants/logoCaraousal/logoCaraousal';
import React from 'react';

const repeated = Array(10).fill(logos).flat(); // Repeat logos

const Slider = () => {
  return (
    <div className='overflow-hidden slider-logo w-full py-6 md:px-20 my-8 group'>
      <div className='flex w-max slide-logo-track animate-marquee group-hover:[animation-play-state:paused]'>
        {repeated.map((logo, i) => (
          <div
            key={i}
            className='flex flex-col items-center justify-center min-w-[150px] mx-8 shrink-0 cursor-pointer'
          >
            <Image
              // priority={true}
              src={logo.src}
              alt={logo.name}
              width={140}
              height={64}
              className='grayscale-0 hover:opacity-100'
            />
            <span className='mt-2 text-sm text-gray-600'>{logo.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 360s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Slider;
