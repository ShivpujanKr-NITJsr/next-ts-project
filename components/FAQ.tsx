'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How many IP/devices are allowed on Groupbuyseotools?',
      answer:
        'Groupbuyseotools limits one account per user that a user cannot share their access between others. Multiple logins from different IP/Devices lead to permanent account suspension (Also, Use of Proxies, VPN, RDP are strictly prohibited).',
    },
    {
      question: 'Do you provide shared or dedicated accounts?',
      answer:
        'As a Group Buy Services, Groupbuyseotools provides shared accounts, but user data will be secure on our servers (Even Groupbuyseotools cannot see or track your information). Here at Groupbuyseotools, Client privacy is the primary concern, and we are making it more secure day by day.',
    },
    {
      question: 'Can a user use single account for both Office/Home?',
      answer:
        'Groupbuyseotools does not allow to share access between 2 or more devices, that a user cannot use one account at two different IP or Devices. The user has to purchase two separate accounts to access from home and office.',
    },
    {
      question: 'Will a user get refund?',
      answer:
        'Groupbuyseotools will initiate the refund only when any primary service/tool does not work for three or more days. Read Refund Policy',
    },
    {
      question: 'How do i get tools after I buy them?',
      answer: 'In order to get your tools, login to your dashboard',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='py-16 bg-[#0B051F] text-white'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-10'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className='bg-[#161032] border border-[#2e2b4a] rounded-xl p-4 transition-all duration-300 shadow-md shadow-[#1f163f]/40'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='flex justify-between items-center w-full text-left text-lg font-semibold focus:outline-none cursor-pointer text-white'
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='text-gray-300 text-sm leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
