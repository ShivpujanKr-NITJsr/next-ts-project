'use client';

import Link from 'next/link';

export default function RightPage() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-[var(--bg-dark)] text-[var(--text-light)] px-6 select-none font-sans'>
      <section className='max-w-4xl w-full text-center'>
        <h1 className='text-4xl font-extrabold mb-6'>Choose Your Plan</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
          {/* Standard Plan */}
          <div className='w-full md:w-1/3 max-w-sm p-6 rounded-2xl shadow-md border border-[var(--button-border)] bg-[var(--card-bg)]'>
            <h5 className='mb-4 text-xl font-medium text-[var(--text-muted)]'>
              Standard Plan
            </h5>
            <div className='flex items-baseline text-[var(--text-light)]'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>49</span>
              <span className='ms-1 text-xl font-normal text-[var(--text-muted)]'>
                /month
              </span>
            </div>
            <ul className='space-y-4 my-6 text-sm text-[var(--text-muted)]'>
              <li className='flex items-center'>✅ 2 team members</li>
              <li className='flex items-center'>✅ Basic analytics</li>
              <li className='flex items-center'>✅ Email support</li>
            </ul>
            <button className='w-full px-5 py-3 rounded-lg font-semibold bg-[var(--primary)] text-[var(--text-light)]'>
              Choose Plan
            </button>
          </div>

          {/* Business Plan */}
          <div className='w-full md:w-1/3 max-w-sm p-8 rounded-2xl shadow-xl border border-[var(--button-border)] bg-[var(--card-bg)] scale-105 -mt-10 z-10'>
            <h5 className='mb-4 text-xl font-medium text-[var(--text-muted)]'>
              Business Plan
            </h5>
            <div className='flex items-baseline text-[var(--text-light)]'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>99</span>
              <span className='ms-1 text-xl font-normal text-[var(--text-muted)]'>
                /month
              </span>
            </div>
            <ul className='space-y-4 my-6 text-sm text-[var(--text-muted)]'>
              <li className='flex items-center'>✅ 10 team members</li>
              <li className='flex items-center'>✅ Advanced analytics</li>
              <li className='flex items-center'>✅ Priority email support</li>
            </ul>
            <button className='w-full px-5 py-3 rounded-lg font-semibold bg-[var(--primary)] text-[var(--text-light)]'>
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className='w-full md:w-1/3 max-w-sm p-6 rounded-2xl shadow-md border border-[var(--button-border)] bg-[var(--card-bg)]'>
            <h5 className='mb-4 text-xl font-medium text-[var(--text-muted)]'>
              Premium Plan
            </h5>
            <div className='flex items-baseline text-[var(--text-light)]'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>
                199
              </span>
              <span className='ms-1 text-xl font-normal text-[var(--text-muted)]'>
                /month
              </span>
            </div>
            <ul className='space-y-4 my-6 text-sm text-[var(--text-muted)]'>
              <li className='flex items-center'>✅ Unlimited team members</li>
              <li className='flex items-center'>✅ Full analytics suite</li>
              <li className='flex items-center'>✅ Dedicated support</li>
            </ul>
            <button className='w-full px-5 py-3 rounded-lg font-semibold bg-[var(--primary)] text-[var(--text-light)]'>
              Choose Plan
            </button>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <Link href='/' className='text-[var(--primary)] hover:underline'>
            &larr; Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
