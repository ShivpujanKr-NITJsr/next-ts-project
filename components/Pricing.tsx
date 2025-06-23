'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './pricing.module.css';

const plans = [
  {
    title: 'Advanced',
    price: 9,
    original: 11999,
    per: '/month',
    features: [
      'Dedicated account manager',
      'Enterprise-level security',
      'Custom integrations',
    ],
    excluded: ['Unlimited resources'],
    label: '',
    color: 'border-[#8e8eff]',
    buttonColor: 'bg-[#8e8eff]',
    textColor: 'text-white',
    highlight: false,
  },
  {
    title: 'Trial',
    price: 11,
    original: 16999,
    per: '/month',
    features: [
      '24/7 Dedicated support',
      'Unlimited cloud resources',
      'Custom SLA options',
    ],
    excluded: [],
    label: '',
    color: 'border-[#8e8eff]',
    buttonColor: 'bg-[#8e8eff]',
    textColor: 'text-white',
    highlight: false,
  },
  {
    title: 'MASTER ACCESS',
    price: 34.99,
    original: 69.0,
    per: '/month',
    features: [
      'SEO Pack',
      "Creative's Pack",
      "Writer's Pack",
      'Bonus: Entertainment Pack',
      'Priority Customer Support',
    ],
    excluded: ['Ahrefs'],
    label: 'Limited Time Offer - Save 50%',
    color: 'border-[#ff6a00]',
    buttonColor: 'bg-[#ff6a00]',
    textColor: 'text-white',
    highlight: true,
  },
  {
    title: 'SEO PACKAGE',
    price: 24.99,
    original: 1000,
    per: '/month',
    features: [
      'Majestic',
      'Semrush (All features)',
      'Neuron Writer (like Surfer)',
      'AI Tools',
    ],
    excluded: ['Priority Customer Support', 'Ahrefs'],
    label: '',
    color: 'border-[#8e8eff]',
    buttonColor: 'bg-[#8e8eff]',
    textColor: 'text-white',
    highlight: false,
  },
  {
    title: 'CREATIVE PACKAGE',
    price: 14.99,
    original: 1200,
    per: '/month',
    features: ['Storyblocks', 'Envato Elements', 'Epidemic Sounds'],
    excluded: ['Priority Customer Support', 'Ahrefs'],
    label: '',
    color: 'border-[#8e8eff]',
    buttonColor: 'bg-[#8e8eff]',
    textColor: 'text-white',
    highlight: false,
  },
];

export default function PricingPlans() {
  return (
    <div className='py-10 px-4 text-white'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        One Membership. Unlimited Power.
      </h2>

      <div className='w-full px-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:gap-6 xs:gap-4 justify-items-start'>
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: plan.highlight
                  ? '0 0 20px rgba(255, 106, 0, 0.6)'
                  : '0 0 10px rgba(142, 142, 255, 0.3)',
              }}
              className={`relative ${
                styles.responsivecard
              } sm:w-[300px] max-w-[360px] w-full rounded-2xl border ${
                plan.color
              } p-6 shadow-xl flex flex-col justify-between ${
                plan.highlight
                  ? 'bg-white dark:bg-[#1e1e30]'
                  : 'bg-white/5 dark:bg-[#1e1e30]'
              } transition-transform duration-300`}
            >
              {plan.label && (
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className='absolute -top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow animate-pulse'
                >
                  {plan.label}
                </motion.span>
              )}
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>
                  {plan.title}
                </h3>
                <div className='text-3xl font-bold flex items-end gap-2'>
                  <span className='text-gray-800 dark:text-white'>
                    ${plan.price}
                  </span>
                  <span className='text-sm text-gray-400 line-through'>
                    ${plan.original}
                  </span>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    {plan.per}
                  </span>
                </div>
                <ul className='mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300'>
                  {plan.features.map((f, i) => (
                    <li key={i}>✅ {f}</li>
                  ))}
                  {plan.excluded.map((f, i) => (
                    <li key={i} className='opacity-50 line-through'>
                      ❌ {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 w-full text-center font-semibold py-3 rounded-lg ${plan.buttonColor} ${plan.textColor} hover:opacity-90 transition cursor-pointer`}
              >
                Buy Now
              </button>
              <p className='text-xs mt-3 text-blue-600 underline cursor-pointer'>
                See List of all tools Included
              </p>
              <p className='text-xs text-green-600 mt-1 font-semibold'>
                ✅ 100% Money-Back Guarantee
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
