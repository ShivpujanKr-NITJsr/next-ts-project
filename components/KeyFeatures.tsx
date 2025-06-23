'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Full Privacy and Security',
    description:
      'All data is encrypted under our E2E policy, so even Groupbuyseotool can’t see your data from the backend.',
    icon: (
      <svg
        className='w-5 h-5 text-white'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        viewBox='0 0 24 24'
      >
        <path d='M12 2l8 4v5c0 5.25-3.25 10-8 11-4.75-1-8-5.75-8-11V6l8-4z' />
      </svg>
    ),
  },
  {
    title: 'Worldwide Payments',
    description:
      'Groupbuyseotools accepts Worldwide payments through Net Banking and PayPal gateways. Every payment is secured.',
    icon: (
      <svg
        className='w-5 h-5 text-white'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        viewBox='0 0 24 24'
      >
        <path d='M2 12h20M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12' />
      </svg>
    ),
  },
  {
    title: 'Single Click Access',
    description:
      'Group Buy SEO tools Enable users to Access their Tools in one click without using extensions. For any accidents, Extensions are also provided.',
    icon: (
      <svg
        className='w-5 h-5 text-white'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        viewBox='0 0 24 24'
      >
        <path d='M12 6v6l4 2M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z' />
      </svg>
    ),
  },
  {
    title: 'Unmatched Support',
    description:
      'Our dedicated customer support team is available 24/7. Whether you have a question about a tool or need technical assistance, we’re here to help you every step of the way.',
    icon: (
      <svg
        className='w-5 h-5 text-white'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        viewBox='0 0 24 24'
      >
        <path d='M18 10a6 6 0 00-12 0v4a6 6 0 0012 0v-4z' />
        <path d='M5 15h.01M19 15h.01' />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function KeyFeatures() {
  return (
    <section className='py-24  text-white'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          Key Features of Our SEO Group Buy Tools
        </motion.h2>

        <div className='relative'>
          {/* Vertical Line */}
          <div className='hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 z-0' />

          <div className='flex flex-col gap-24'>
            {features.map((feature, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  className={`relative z-10 flex flex-col md:flex-row items-center ${
                    isRight ? 'md:justify-end' : 'md:justify-start'
                  }`}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  variants={fadeUp}
                >
                  {/* Icon and Line */}
                  <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20'>
                    <div className='w-12 h-12 rounded-full bg-blue-600 border-4 border-gray-950 flex items-center justify-center shadow-lg'>
                      {feature.icon}
                    </div>
                    <div className='w-1 h-full bg-blue-600' />
                  </div>

                  {/* Feature Card */}
                  <div
                    className={`md:w-[46%] p-6 sm:p-8 rounded-xl bg-[#141439] shadow-xl ${
                      isRight ? 'md:ml-16' : 'md:mr-16'
                    }`}
                  >
                    <h3 className='text-xl sm:text-2xl font-semibold mb-3 text-white'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
