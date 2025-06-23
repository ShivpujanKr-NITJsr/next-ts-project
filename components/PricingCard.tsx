// components/PricingCard.js
'use client';

import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  backgroundColor: string;
  buttonLabel: string;
}

const PricingCard = ({
  title,
  price,
  features,
  backgroundColor,
  buttonLabel,
}: PricingCardProps) => {
  return (
    <div
      className='w-full md:w-1/3 max-w-sm p-8 rounded-2xl shadow-xl border border-blue-500 scale-105 -mt-10'
      style={{ backgroundColor }}
    >
      <h5 className='mb-4 text-xl font-medium text-gray-300'>{title}</h5>
      <div className='flex items-baseline text-gray-200'>
        <span className='text-3xl font-semibold'>$</span>
        <span className='text-5xl font-extrabold tracking-tight'>{price}</span>
        <span className='ms-1 text-xl font-normal text-gray-400'>/month</span>
      </div>
      <ul className='space-y-4 my-6 text-sm text-gray-400'>
        {features.map((feature: string, index: number) => (
          <li key={index} className='flex items-center'>
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button
        className='w-full px-5 py-3 rounded-lg font-semibold'
        style={{
          backgroundColor: '#3C81F4',
          color: '#FFFFFF',
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PricingCard;
