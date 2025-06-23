'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '#tools' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Refund', href: '/refund' },
  // { label: 'Contact', href: '/contact-us' },
  { label: 'Blogs', href: '/blogs' },
];

const NavbarV2: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = async (href: string) => {
    if (href.startsWith('#')) {
      const hash = href;
      const rootPath = '/';

      console.log(href, 'href--=', window.location.pathname);

      if (window.location.pathname !== '/') {
        // 👇 Navigate to root first
        router.push(rootPath + href);

        // Wait a tiny bit for navigation to settle, then set the hash
        // setTimeout(() => {
        //   window.location.hash = `#${hash}`; // will scroll too
        // }, 50);
      } else {
        // Already on root, just update hash
        window.location.hash = hash;
      }
    } else {
      // Full route — navigate normally
      router.push(href);
    }
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-4'>
        {/* Logo */}
        <button
          onClick={() => handleNavigation('/')}
          className='text-2xl font-bold text-white hover:opacity-90'
        >
          Group Buy Seo Tools
        </button>

        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-8'>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.href)}
              className='text-white font-medium hover:text-yellow-400 transition cursor-pointer'
            >
              {link.label}
            </button>
          ))}
          <Link
            href='/contact-us'
            className='text-white font-medium hover:text-yellow-400'
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle Menu'
        >
          {menuOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className='md:hidden px-4 pb-4 space-y-3 bg-[#1e1e30] border-t border-gray-700'>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.href)}
              className='block text-white font-medium hover:text-yellow-400 cursor-pointer'
            >
              {link.label}
            </button>
          ))}
          <Link
            href='/contact-us'
            className='text-white font-medium hover:text-yellow-400'
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavbarV2;
