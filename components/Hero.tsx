'use client';
import { motion } from 'framer-motion';
import PricingCarousel from './HeroV3';
import styles from './Hero.module.css';
import { TypewriterEffect } from './ui/TypeWriter-Effect';

export default function Hero() {
  //Unlock 90+ SEO & Marketing Tools for the Price of One.
  const words = [
    { text: 'Unlock' },
    { text: '90+' },
    { text: 'SEO' },
    { text: '&' },
    { text: 'Marketing' },
    { text: 'Tools' },
    { text: 'for' },
    { text: 'the' },
    { text: 'Price' },
    { text: 'of' },
    {
      text: 'One.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  return (
    <section
      className={`${styles.heroSection} ${styles.animatedGlow}`}
      style={{
        backgroundColor: '#0b061f',
        backgroundImage: `
      radial-gradient(ellipse 40% 70% at 50% 0%, rgba(147, 112, 219, 0.35) 0%, #0b061f 80%),
      radial-gradient(ellipse at top right, rgba(255, 192, 203, 0.05), transparent 70%),
      radial-gradient(ellipse at bottom left, rgba(255, 165, 0, 0.04), transparent 70%)
    `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Left Content */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className={styles.heroHeading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <TypewriterEffect words={words} />
          {/* Unlock 90+ SEO & Marketing Tools for the Price of One. */}
        </motion.h1>
        <motion.p
          className={styles.heroText}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Save thousands on tools like Ahrefs, Semrush, Canva, and more — all in
          one membership.
        </motion.p>
        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            className={styles.buttonPrimary}
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Pricing
          </button>
          <button
            className={styles.buttonSecondary}
            onClick={() => {
              const el = document.getElementById('tools');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Individual Tools
          </button>
        </motion.div>
      </motion.div>

      {/* Right Content with Carousel */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <PricingCarousel />
      </motion.div>
    </section>
  );
}
