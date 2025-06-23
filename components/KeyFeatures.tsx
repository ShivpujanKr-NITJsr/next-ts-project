'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Full Privacy and Security',
    description:
      'All data is encrypted under our E2E policy, so even Groupbuyseotool can’t see your data from the backend.',
    icon: (
      <svg
        className='w-6 h-6 text-white'
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
        className='w-6 h-6 text-white'
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
      'Group Buy SEO tools enable users to access tools in one click without extensions. Extensions are also provided if needed.',
    icon: (
      <svg
        className='w-6 h-6 text-white'
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
      'Our customer support team is available 24/7 for questions or technical help, every step of the way.',
    icon: (
      <svg
        className='w-6 h-6 text-white'
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
    <section className='py-24 bg-[#0a0a23] text-white'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          className='text-4xl font-bold text-center mb-24'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          Key Features of Our SEO Group Buy Tools
        </motion.h2>

        <div className='relative'>
          {/* Mid Vertical Rod with Your Color */}
          <div className='hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[6px] h-full z-0 bg-blue-600 rounded-full shadow-[0_0_20px_2px_rgba(59,130,246,0.3)] animate-pulse' />

          <div className='flex flex-col gap-28'>
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
                  transition={{ duration: 0.6, delay: index * 0.25 }}
                  variants={fadeUp}
                >
                  {/* Dot and Icon Circle */}
                  <div className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20'>
                    <div className='w-14 h-14 rounded-full bg-blue-600 border-4 border-gray-950 flex items-center justify-center shadow-lg'>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`md:w-[46%] mt-16 md:mt-0 p-6 sm:p-8 rounded-xl bg-[#141439] shadow-xl ${
                      isRight
                        ? 'md:ml-20 text-left'
                        : 'md:mr-20 text-left md:text-right'
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
