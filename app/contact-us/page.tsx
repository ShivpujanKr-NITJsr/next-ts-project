'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <section className='min-h-screen bg-gradient-to-br from-[#1e1e30] to-[#12121c] text-white px-4 py-16'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl font-bold text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* Left Side */}
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold'>
              We&apos;d love to hear from you!
            </h3>
            <p className='text-gray-300'>
              Whether you have a question about features, pricing, need a demo,
              or anything else — our team is ready to answer all your questions.
            </p>

            <div className='space-y-3 text-sm'>
              <div>
                <span className='font-semibold text-[#8e8eff]'>Email:</span>{' '}
                support@yourdomain.com
              </div>
              <div>
                <span className='font-semibold text-[#8e8eff]'>Phone:</span> +1
                (555) 123-4567
              </div>
              <div>
                <span className='font-semibold text-[#8e8eff]'>Address:</span>{' '}
                123 Creative St, Remote City, World
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl space-y-6'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='flex flex-col'>
              <label className='mb-1 text-sm'>Name</label>
              <input
                type='text'
                placeholder='Your name'
                className='rounded-lg p-3 bg-white/10 text-white border border-[#8e8eff] focus:outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1 text-sm'>Email</label>
              <input
                type='email'
                placeholder='you@example.com'
                className='rounded-lg p-3 bg-white/10 text-white border border-[#8e8eff] focus:outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1 text-sm'>Message</label>
              <textarea
                rows={5}
                placeholder='Your message...'
                className='rounded-lg p-3 bg-white/10 text-white border border-[#8e8eff] focus:outline-none'
              />
            </div>
            <button
              type='submit'
              className='w-full py-3 rounded-lg bg-[#8e8eff] hover:opacity-90 transition font-semibold'
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
