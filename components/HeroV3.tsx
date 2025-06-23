'use client';
import { useState } from 'react';

const pricingPlans = [
  //   {
  //     title: 'Standard',
  //     price: 99,
  //     original: 149,
  //     per: '/month',
  //     features: ['1 AWS Account', 'Audit once a day', 'Standard security'],
  //     excluded: ['Dedicated support'],
  //     label: '',
  //     color: 'border-gray-400',
  //     buttonColor: 'bg-gray-400',
  //     textColor: 'text-white',
  //     highlight: false,
  //   },
  //   {
  //     title: 'Professional',
  //     price: 499,
  //     original: 699,
  //     per: '/month',
  //     features: ['Standard customer support', 'Standard cloudtrails reports'],
  //     excluded: ['Priority Customer Support'],
  //     label: '',
  //     color: 'border-blue-500',
  //     buttonColor: 'bg-blue-500',
  //     textColor: 'text-white',
  //     highlight: false,
  //   },
  //   {
  //     title: 'Premium',
  //     price: 4999,
  //     original: 5999,
  //     per: '/month',
  //     features: [
  //       'More support and advice',
  //       'Standard cloudtrails reports',
  //       'Standard customer support',
  //     ],
  //     excluded: ['Custom integrations'],
  //     label: '',
  //     color: 'border-purple-500',
  //     buttonColor: 'bg-purple-500',
  //     textColor: 'text-white',
  //     highlight: false,
  //   },
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MOD = (n: number, m: number) => ((n % m) + m) % m;

export default function PricingCarousel() {
  const [current, setCurrent] = useState(2);
  const total = pricingPlans.length;

  const getOffset = (realIndex: number) => {
    let offset = realIndex - current;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const handleCardClick = (clickedIndex: number) => {
    if (clickedIndex === current) return;
    setCurrent(clickedIndex);
  };

  return (
    <div className=' flex items-center justify-center px-4'>
      <div className='relative w-full max-w-6xl flex justify-center items-center h-[450px] '>
        <div className='relative w-full h-full flex justify-center items-center'>
          {pricingPlans.map((plan, realIndex) => {
            const offset = getOffset(realIndex);
            if (Math.abs(offset) > 2) return null;

            const isCenter = offset === 0;
            const baseOffset = 150;
            const translateX = offset * baseOffset;
            const translateY = isCenter ? -30 : 30;
            const scale = isCenter ? 1.3 : Math.abs(offset) === 1 ? 0.9 : 0.7;
            const zIndex = 10 - Math.abs(offset);
            const rotate =
              offset === 0
                ? 'rotateY(0deg)'
                : offset > 0
                ? 'rotateY(-8deg)'
                : 'rotateY(8deg)';

            return (
              <div
                key={realIndex}
                onClick={() => handleCardClick(realIndex)}
                className='absolute transition-all duration-500 ease-in-out cursor-pointer'
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) ${rotate}`,
                  zIndex,
                  opacity: 1,
                }}
              >
                {/* <div
                  className='w-full md:w-80 max-w-sm p-8 rounded-2xl shadow-xl border border-[var(--button-border)]'
                  style={{ backgroundColor: '#1e1e30' }}
                >
                  <h5 className='mb-4 text-xl font-medium text-[var(--text-muted)]'>
                    {plan.title}
                  </h5>
                  <div className='flex items-baseline text-[var(--text-light)]'>
                    <span className='text-3xl font-semibold'>$</span>
                    <span className='text-5xl font-extrabold tracking-tight'>
                      {plan.price.replace('$', '')}
                    </span>
                    <span className='ms-1 text-xl font-normal text-[var(--text-muted)]'>
                      {plan.per}
                    </span>
                  </div>
                  <ul className='space-y-4 my-6 text-sm text-[var(--text-muted)]'>
                    {plan.features.map((feature, i) => (
                      <li key={i}>✅ {feature}</li>
                    ))}
                  </ul>
                  <button
                    className='w-full px-5 py-3 rounded-lg font-semibold'
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--text-light)',
                    }}
                  >
                    Choose Plan
                  </button>
                </div> */}
                {/* new design */}
                <div
                  key={realIndex + '0'}
                  className={`w-[280px] relative rounded-2xl border ${
                    plan.color
                  } p-6 shadow-xl flex flex-col justify-between ${
                    plan.highlight
                      ? 'bg-white dark:bg-[#1e1e30]'
                      : 'bg-white/5 dark:bg-[#1e1e30]'
                  } h-[400px] `}
                >
                  {plan.label && (
                    <span className='absolute -top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow'>
                      {plan.label}
                    </span>
                  )}
                  <div>
                    <h3 className='text-xl font-semibold mb-1 text-gray-800 dark:text-white'>
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
                        /month
                      </span>
                    </div>
                    <ul className='mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300'>
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
                    className={`mt-6 w-full text-center font-semibold py-3 rounded-lg ${plan.buttonColor} ${plan.textColor}`}
                  >
                    Buy Now
                  </button>
                  <p className='text-xs mt-3 text-blue-600 underline'>
                    See List of all tools Included
                  </p>
                  <p className='text-xs text-green-600 mt-1 font-semibold'>
                    ✅ 100% Money-Back Guarantee
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
