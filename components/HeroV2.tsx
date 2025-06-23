'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const TOOL_COUNT = 90;

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(num: number, min: number, max: number) {
  return num < min ? min : num > max ? max : num;
}

const HeroV2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const toolsRef = useRef<
    {
      id: number;
      x: number;
      y: number;
      z: number;
      speedZ: number;
      delayFrames: number;
      opacity: number;
    }[]
  >([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const tools = [];
    for (let i = 0; i < TOOL_COUNT; i++) {
      tools.push({
        id: i,
        x: randomRange(containerRect.width * 0.1, containerRect.width * 0.9),
        y: randomRange(containerRect.height * 0.1, containerRect.height * 0.9),
        z: 0.3 + randomRange(0, 0.7),
        speedZ: 0.003 + Math.random() * 0.007,
        delayFrames: Math.floor(Math.random() * 120),
        opacity: 1,
      });
    }
    toolsRef.current = tools;

    let frameId: number;

    const animate = () => {
      const tools = toolsRef.current;
      for (const tool of tools) {
        if (tool.delayFrames > 0) {
          tool.delayFrames--;
          continue;
        }

        tool.z += tool.speedZ;

        if (tool.z > 1.3) {
          tool.opacity -= 0.04;
          if (tool.opacity <= 0) {
            tool.x = randomRange(
              containerRect.width * 0.1,
              containerRect.width * 0.9
            );
            tool.y = randomRange(
              containerRect.height * 0.1,
              containerRect.height * 0.9
            );
            tool.z = 0.3 + randomRange(0, 0.7);
            tool.speedZ = 0.003 + Math.random() * 0.007;
            tool.delayFrames = Math.floor(Math.random() * 120);
            tool.opacity = 1;
          }
        } else {
          if (tool.opacity < 1) {
            tool.opacity = clamp(tool.opacity + 0.05, 0, 1);
          }
        }
      }

      setTick((t) => t + 1);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`${styles.heroSection} relative w-full min-h-[600px] max-h-[600px] overflow-hidden select-none font-sans`}
      style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}
      aria-label='HeroV2 section with animated tool icons zoom'
    >
      {/* Animated background icons */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-0'>
        {toolsRef.current.map((tool) => {
          const scale = tool.z;
          const size = clamp(30 * scale, 20, 60);
          return (
            <div
              key={tool.id}
              title={`Tool ${tool.id + 1}`}
              aria-label={`Tool ${tool.id + 1}`}
              className='absolute rounded-lg bg-white text-purple-700 font-bold text-center shadow-lg cursor-default whitespace-nowrap select-none filter drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.3] hover:shadow-2xl hover:bg-purple-700 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              style={{
                top: `${tool.y - size / 2}px`,
                left: `${tool.x - size / 2}px`,
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
                fontSize: `${size / 2.5}px`,
                opacity: tool.opacity,
                transform: `scale(${scale})`,
                zIndex: Math.floor(scale * 100),
                position: 'absolute',
              }}
            >
              {tool.id + 1}
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 py-12 max-w-7xl mx-auto w-full`}
      >
        {/* Left section (top section) */}
        <div
          className={`${styles.left} w-full max-w-4xl text-center md:text-left`}
        >
          <h1 className={styles.heroHeading}>
            Unlock 90+ SEO & Marketing Tools for the Price of One.
          </h1>
          <p className={styles.heroText}>
            Save thousands on tools like Ahrefs, Semrush, Canva, and more — all
            in one membership.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.buttonPrimary}>Buy Plans</button>
            <button className={styles.buttonSecondary}>Our Work</button>
          </div>
        </div>

        {/* Right section (below left) */}
        <div
          className={`${styles.right} w-full mt-16 flex flex-col md:flex-row justify-center items-end gap-6 flex-wrap md:flex-nowrap px-4 py-8`}
        >
          {/* Standard Plan */}
          <div
            className='w-full md:w-1/3 max-w-sm p-6 rounded-2xl shadow-md border border-[var(--button-border)]'
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
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
            <button
              className='w-full px-5 py-3 rounded-lg font-semibold'
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--text-light)',
              }}
            >
              Choose Plan
            </button>
          </div>

          {/* Business Plan */}
          <div
            className='w-full md:w-1/3 max-w-sm p-8 rounded-2xl shadow-xl border border-[var(--button-border)] scale-105 -mt-10 z-10'
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
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
            <button
              className='w-full px-5 py-3 rounded-lg font-semibold'
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--text-light)',
              }}
            >
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div
            className='w-full md:w-1/3 max-w-sm p-6 rounded-2xl shadow-md border border-[var(--button-border)]'
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
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
            <button
              className='w-full px-5 py-3 rounded-lg font-semibold'
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--text-light)',
              }}
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
