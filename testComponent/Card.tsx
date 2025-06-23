'use client';
import { useState } from 'react';

interface PricingPlan {
  title: string;
  price: string;
  per: string;
  billed: string;
  features: string[];
  excludedFeatures: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'SEO Package',
    price: '$24.99',
    per: '/month',
    billed: 'Billed $1000 $24.99 every month',
    features: [
      'Majestic',
      'Semrush (All features)',
      'Neuron Writer (like Surfer)',
      'AI Tools',
    ],
    excludedFeatures: ['Priority Customer Support', 'Ahrefs'],
  },
  {
    title: 'Creative Package',
    price: '$14.99',
    per: '/month',
    billed: 'Billed $1200 $14.99 every month',
    features: ['Storyblocks', 'Envato Elements', 'Epidemic Sounds'],
    excludedFeatures: ['Priority Customer Support', 'Ahrefs'],
  },
  {
    title: 'Master Access',
    price: '$34.99',
    per: '/month',
    billed: 'Billed $40 $34.99 for tools worth $3000',
    features: [
      'SEO Pack',
      'Creative Pack',
      "Writer's Pack",
      'Bonus: Entertainment Pack',
      'Priority Customer Support',
    ],
    excludedFeatures: ['Ahrefs'],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MOD = (n: number, m: number) => ((n % m) + m) % m;

export default function PricingCarousel() {
  const [current, setCurrent] = useState(0);
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
    <div className='min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4'>
      <div className='relative w-full max-w-6xl flex justify-center items-center h-[650px]'>
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
                <div
                  className='w-full md:w-80 max-w-sm p-8 rounded-2xl shadow-xl border border-gray-300'
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <h5 className='mb-4 text-xl font-medium text-gray-700'>
                    {plan.title}
                  </h5>
                  <div className='flex items-baseline text-gray-900'>
                    <span className='text-3xl font-semibold'>
                      ${plan.price.replace('$', '')}
                    </span>
                    <span className='ms-1 text-xl font-normal text-gray-600'>
                      {plan.per}
                    </span>
                  </div>
                  <p className='text-sm text-gray-600'>{plan.billed}</p>
                  <ul className='space-y-2 my-6 text-sm text-gray-600'>
                    {plan.features.map((feature, i) => (
                      <li key={i}>✅ {feature}</li>
                    ))}
                    {plan.excludedFeatures.map((feature, i) => (
                      <li key={i} className='line-through'>
                        ❌ {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.title === 'Master Access' && (
                    <div className='absolute top-4 right-4 bg-yellow-200 p-2 rounded text-sm font-semibold'>
                      Special Offer
                    </div>
                  )}
                  <button className='w-full px-5 py-3 rounded-lg font-semibold bg-blue-600 text-white'>
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
