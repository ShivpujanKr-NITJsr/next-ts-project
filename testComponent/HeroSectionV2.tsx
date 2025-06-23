'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOOL_COUNT = 90;

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(num: number, min: number, max: number) {
  return num < min ? min : num > max ? max : num;
}

const HeroToolsTailwind: React.FC = () => {
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
      className='relative w-screen min-h-[600px] max-h-[600px] overflow-hidden bg-gradient-to-tr from-blue-500 to-purple-700 select-none flex flex-col items-center justify-center text-white font-sans'
      aria-label='Hero section with animated tool icons zoom'
    >
      <h1 className='relative z-10 mb-8 text-4xl font-extrabold drop-shadow-lg text-center sm:text-3xl'>
        Explore Our 90 Powerful Tools
      </h1>

      <div
        aria-hidden='true'
        className='absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-visible z-0'
      >
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
    </section>
  );
};

export default HeroToolsTailwind;
