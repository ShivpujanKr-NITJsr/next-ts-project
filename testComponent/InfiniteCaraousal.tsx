import React from 'react';
// import './InfiniteCarousel.css'; // Add custom CSS for keyframes & pseudo-elements

const slides1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const InfiniteCarousel = () => {
  return (
    <div className='container mx-auto px-4 sm:px-12 py-8'>
      <h1 className='text-center font-bold text-4xl tracking-wider'>
        Infinite Scroll Carousel
      </h1>
      <p className='text-center mb-8'>
        Best suited for marquee of logos and small pictures
      </p>

      {/* Carousel 1 */}
      <h2 className='font-semibold mb-4 text-xl'>
        1. Carousel with scroll and slide-track
      </h2>
      <div className='slider relative h-[60px] grid place-items-center overflow-hidden'>
        <div className='slide-track flex justify-between animate-scroll'>
          {[...slides1, ...slides1].map((val, i) => (
            <div
              key={`slide1-${i}`}
              className='slide w-[150px] h-[60px] grid place-items-center cursor-pointer transition-transform hover:scale-90'
            >
              <div
                className={`bg-${getColor(
                  val
                )} w-full h-full flex items-center justify-center`}
              >
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getColor = (val: string) => {
  const map: Record<string, string> = {
    '1': 'red-500',
    '2': 'purple-500',
    '3': 'blue-500',
    '4': 'indigo-500',
    '5': 'pink-500',
    '6': 'green-500',
    '7': 'yellow-500',
    '8': 'red-500',
    '9': 'gray-500 text-white',
    '0': 'blue-800',
  };
  return map[val] || 'gray-200';
};

export default InfiniteCarousel;
