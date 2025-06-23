'use client';

import { motion } from 'framer-motion';

export default function RefundPolicy() {
  return (
    <section className='max-w-3xl mx-auto px-6 py-12  text-gray-300 rounded-2xl shadow-2xl'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold mb-8 text-white text-center'
      >
        Refund Policy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='mb-8 text-lg leading-relaxed'
      >
        <span className='font-semibold text-white'>Group Buy SEO Tools</span>{' '}
        will initiate a refund only if any primary service is non-functional for
        three or more consecutive days.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='mb-10'
      >
        <h2 className='text-2xl font-semibold text-white mb-4'>
          Refund Process
        </h2>
        <ul className='list-disc list-inside space-y-3 text-base leading-relaxed'>
          <li>
            <span className='font-medium text-white'>Initiation:</span> To start
            the refund process, please submit a request through the ticket
            section. The administration will respond within 24-48 hours.
          </li>
          <li>
            <span className='font-medium text-white'>Processing Time:</span>{' '}
            Once approved, allow 7-10 business days for the refund to reflect in
            your account. Note that the payment gateway may take an additional
            4-5 days to process the refund.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='mb-10'
      >
        <h2 className='text-2xl font-semibold text-white mb-4'>
          Non-Refundable Scenarios
        </h2>
        <ul className='list-disc list-inside space-y-3 text-base leading-relaxed'>
          <li>
            <span className='font-medium text-white'>Account Ban/Block:</span>{' '}
            No refunds will be issued if your account is banned or blocked due
            to invalid activities. No exceptions will be made.
          </li>
          <li>
            <span className='font-medium text-white'>
              Service Limit Reached:
            </span>{' '}
            No refunds will be issued if the service limits are reached. Users
            must wait until the limits are refreshed.
          </li>
          <li>
            <span className='font-medium text-white'>
              Unjustified Requests:
            </span>{' '}
            Refund requests made without valid reasons (e.g., changed mind,
            accidental purchase) will not be accepted and may result in account
            suspension.
          </li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='text-sm text-gray-400 leading-relaxed'
      >
        For any refund requests, please ensure they comply with the conditions
        outlined above. If you have any questions or need assistance, contact
        our support team through the ticket section.
      </motion.p>
    </section>
  );
}
