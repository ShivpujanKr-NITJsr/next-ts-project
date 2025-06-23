'use client';
import React from 'react';

const SliderPause = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='slider w-full bg-zinc-100 overflow-hidden'>
        <div className='slider-track slider-animation flex gap-16 p-16'>
          <div className='slide'>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              className='h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200'
              alt='Google Logo'
            />
          </div>
          <div className='slide'>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              className='h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200'
              alt='Google Logo'
            />
          </div>
          <div className='slide'>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              className='h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200'
              alt='Google Logo'
            />
          </div>
          <div className='slide'>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              className='h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200'
              alt='Google Logo'
            />
          </div>
          <div className='slide'>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              className='h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200'
              alt='Google Logo'
            />
          </div>
          <div className='slide'>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              className='h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200'
              alt='Google Logo'
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .slider-animation {
          width: 3600px;
          animation: scroll 20s linear infinite;
        }
        .slider-animation:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1000px);
          }
        }
      `}</style>
    </div>
  );
};

export default SliderPause;
