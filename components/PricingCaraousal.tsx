// components/PricingCarousel.js
'use client';
import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    title: 'Basic Plan',
    price: '9.99',
    features: ['10 GB Storage', '1 User', 'Basic Support'],
    backgroundColor: '#1E1E30',
    buttonLabel: 'Sign Up',
  },
  {
    title: 'Standard Plan',
    price: '19.99',
    features: ['50 GB Storage', '100 Users', '24/7 Support'],
    backgroundColor: '#1E1E30',
    buttonLabel: 'Sign Up',
  },
  {
    title: 'Premium Plan',
    price: '29.99',
    features: [
      '100 GB Storage',
      '100 Users',
      '24/7 Support',
      'Custom Branding',
    ],
    backgroundColor: '#1E1E30',
    buttonLabel: 'Sign Up',
  },
  {
    title: 'Ultra Plan',
    price: '39.99',
    features: ['250 GB Storage', 'Unlimited Users', '24/7 Support'],
    backgroundColor: '#1E1E30',
    buttonLabel: 'Sign Up',
  },
];

const PricingCarousel = () => {
  return (
    <div className='flex space-x-4 overflow-x-auto'>
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PricingCarousel;
