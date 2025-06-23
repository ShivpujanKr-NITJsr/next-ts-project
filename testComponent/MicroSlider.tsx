import { useEffect, useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current && groupRef.current) {
      const carouselElement = carouselRef.current;
      const groupElement = groupRef.current;

      // Add event listener for hover to pause animation
      const handleHover = () => {
        groupElement.style.animationPlayState = 'paused';
      };

      const handleMouseLeave = () => {
        groupElement.style.animationPlayState = 'running';
      };

      carouselElement.addEventListener('mouseenter', handleHover);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners
      return () => {
        carouselElement.removeEventListener('mouseenter', handleHover);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      className='relative flex overflow-hidden max-w-3xl mx-auto p-8'
    >
      <div
        ref={groupRef}
        className='flex gap-5 animate-[scrolling_10s_linear_infinite]'
        style={{
          animationPlayState: 'running',
        }}
      >
        <div className='carousel flex overflow-hidden mx-auto py-5 max-w-screen-lg'>
          <div className='group flex gap-5 pr-5'>
            <div className='card flex justify-center items-center min-h-[200px] px-5 py-4 bg-purple-700 text-white rounded-xl shadow-lg text-3xl w-full'>
              A
            </div>
            <div className='card flex justify-center items-center min-h-[200px] px-5 py-4 bg-purple-600 text-white rounded-xl shadow-lg text-3xl w-full'>
              B
            </div>
            <div className='card flex justify-center items-center min-h-[200px] px-5 py-4 bg-purple-800 text-white rounded-xl shadow-lg text-3xl w-full'>
              C
            </div>
          </div>
          {/* <!-- Duplicated cards for smooth scrolling, hidden from screen readers --> */}
          <div aria-hidden className='group flex gap-5 pr-5'>
            <div className='card flex justify-center items-center min-h-[200px] px-5 py-4 bg-purple-700 text-white rounded-xl shadow-lg text-3xl w-full'>
              A
            </div>
            <div className='card flex justify-center items-center min-h-[200px] px-5 py-4 bg-purple-600 text-white rounded-xl shadow-lg text-3xl w-full'>
              B
            </div>
            <div className='card flex justify-center items-center min-h-[200px] px-5 py-4 bg-purple-800 text-white rounded-xl shadow-lg text-3xl w-full'>
              C
            </div>
          </div>
        </div>
      </div>

      {/* Duplicated Group for Infinite Scroll */}
      <div aria-hidden className='flex gap-5'>
        <div className='flex-none w-full p-5 text-xl text-white bg-indigo-600 rounded-3xl shadow-xl min-h-[200px]'>
          A
        </div>
        <div className='flex-none w-full p-5 text-xl text-white bg-purple-700 rounded-3xl shadow-xl min-h-[200px]'>
          B
        </div>
        <div className='flex-none w-full p-5 text-xl text-white bg-indigo-800 rounded-3xl shadow-xl min-h-[200px]'>
          C
        </div>
      </div>
    </div>
  );
};

export default Carousel;
