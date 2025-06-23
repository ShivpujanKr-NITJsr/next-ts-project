import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'This service has transformed our SEO strategy!',
  },
  {
    name: 'John Smith',
    feedback: 'Affordable and effective tools. Highly recommend!',
  },
  {
    name: 'Alice Johnson',
    feedback: 'Excellent support and great features.',
  },
  {
    name: 'Michael Brown',
    feedback: 'Our traffic doubled in a month!',
  },
  // Add more if needed
];

const Testimonials = () => {
  return (
    <section id='testimonials' className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          What Our Customers Say
        </h2>
        <div className='slider group relative h-[360px] grid place-items-center overflow-hidden'>
          <div className='slide-track flex justify-between gap-4 animate-scroll group-hover:animation-paused'>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className='relative overflow-visible' // allow scale to overflow here
              >
                <div className='slide w-[300px] min-w-[600px] h-[320px] bg-[#161032] text-gray-100 p-6 rounded shadow-lg shadow-[#1f163f]/50 flex flex-col justify-between transition-transform duration-300 hover:scale-105'>
                  <p className='italic'>&quot;{testimonial.feedback}&quot;</p>
                  <p className='text-right font-semibold mt-4'>
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
