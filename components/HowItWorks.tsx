// components/HowItWorks.tsx
import React from 'react';
import { HWICard } from './HowItWorksCards';

const steps = [
  {
    title: 'Pool Resources',
    description:
      'By sharing the costs, you get access to expensive tools at a much lower rate. This means you can focus on achieving results without worrying about budget constraints.',
  },
  {
    title: 'Affordable Access',
    description:
      'Group buys SEO tools focuses highly on User Experience that is why we provide best Uptime.',
  },
  {
    title: 'Seamless Experience',
    description:
      'Our platform ensures that accessing tools is as simple as clicking a button. Forget complex installations or software downloads. Just log in and start optimizing!',
  },
];

const HowItWorks = () => {
  return (
    <section className='py-12 '>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-extrabold  mb-8'>
          How Does Group Buy SEO Tools Work?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {steps.map((step, index) => (
            // <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
            //   <div className='text-indigo-600 text-2xl font-bold mb-2'>
            //     {`0${index + 1}`}
            //   </div>
            //   <h3 className='text-xl font-semibold text-gray-800 mb-2'>
            //     {step.title}
            //   </h3>
            //   <p className='text-gray-600'>{step.description}</p>
            // </div>
            <HWICard
              key={index + '789'}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
