'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const TOOL_COUNT = 90;

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(num: number, min: number, max: number) {
  return num < min ? min : num > max ? max : num;
}

export default function LeftPage() {
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
  const [tick, setTick] = useState(0); // Just to trigger rerenders

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
    <main
      ref={containerRef}
      className='relative min-h-screen flex flex-col items-center justify-center bg-[var(--bg-dark)] text-[var(--text-light)] px-6 select-none font-sans overflow-hidden'
      aria-label='Hero section with animated tool icons background'
    >
      {/* Animated background icons */}
      <div className='absolute inset-0 pointer-events-none z-0 overflow-visible'>
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

      {/* Content */}
      <section className='relative z-10 max-w-4xl w-full text-center md:text-left'>
        <h1 className='text-4xl font-extrabold mb-6'>
          Unlock 90+ SEO & Marketing Tools for the Price of One.
        </h1>
        <p className='mb-8 text-lg'>
          Save thousands on tools like Ahrefs, Semrush, Canva, and more — all in
          one membership.
        </p>
        <div className='flex justify-center md:justify-start gap-4'>
          <button className='bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--button-text)] px-5 py-3 rounded-lg font-semibold'>
            Buy Plans
          </button>
          <button className='bg-transparent border border-[var(--button-border)] hover:border-[var(--primary)] text-[var(--text-light)] px-5 py-3 rounded-lg font-semibold'>
            Our Work
          </button>
        </div>
        <div className='mt-12 text-center md:text-left'>
          <Link href='/right' className='text-[var(--primary)] hover:underline'>
            Go to Plans &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
