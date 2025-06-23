import React from 'react';

const features = [
  {
    title: 'Affordable Pricing',
    description:
      'Buy SEO tools at a fraction of the cost with our unique group buying model.',
    icon: (
      <svg
        className='w-16 h-16 text-indigo-400'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 8c-1.657 0-3 1.343-3 3m6 0a3 3 0 00-3-3m0 0V5m0 6v6m9 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Access to 90+ Tools',
    description:
      'Access over 90+ high-quality SEO tools for keyword research, backlinks, and more.',
    icon: (
      <svg
        className='w-16 h-16 text-indigo-400'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16.5 3.75L17.25 6l1.5 1.5m-9 9L6 17.25 3.75 16.5m9-9L12 6m0 12l-.75-2.25-2.25-.75M12 12l3-3m-3 3l-3 3'
        />
      </svg>
    ),
  },
  {
    title: 'Community of Support',
    description:
      'Join over 1,000 marketers in a community that shares insights and strategies.',
    icon: (
      <svg
        className='w-16 h-16 text-indigo-400'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17 20h5v-2a4 4 0 00-5-3.87M7 20H2v-2a4 4 0 015-3.87M15 11a4 4 0 10-6 0m6 0a4 4 0 01-6 0'
        />
      </svg>
    ),
  },
];

const WhyChoose = () => {
  return (
    <section className='text-gray-100 body-font bg-[#0B051F]'>
      <div className='flex justify-center mt-10 text-4xl font-semibold'>
        Why Choose Us?
      </div>
      <div className='container px-5 py-12 mx-auto'>
        <div className='flex flex-wrap text-center justify-center'>
          {features.map((feature, index) => (
            <div key={index} className='p-4 md:w-1/4 sm:w-1/2'>
              <div className='px-4 py-6 transform transition duration-500 hover:scale-110 bg-[#161032] rounded-lg shadow-lg shadow-[#1f163f]/50'>
                <div className='flex justify-center mb-3'>{feature.icon}</div>
                <h2 className='title-font font-medium text-2xl text-white mb-2'>
                  {feature.title}
                </h2>
                <p className='text-gray-300 text-sm'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
