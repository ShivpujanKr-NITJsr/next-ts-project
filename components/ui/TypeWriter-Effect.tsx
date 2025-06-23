'use client';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const TypewriterEffect = ({
  words,
  className = '',
  cursorClassName = '',
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { opacity: 1 },
        {
          duration: 0.2,
          delay: stagger(0.05),
          ease: 'easeInOut',
        }
      );
    }
  }, [isInView]);

  return (
    <div className={className}>
      <motion.div ref={scope} className='inline'>
        {wordsArray.map((word, wordIdx) => (
          <div key={wordIdx} className='inline-block'>
            {word.text.map((char, charIdx) => (
              <motion.span
                key={charIdx}
                className={`opacity-0 ${word.className || ''}`}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={`inline-block w-[2px] h-[1em] bg-blue-500 align-middle ml-1 ${cursorClassName}`}
      />
    </div>
  );
};
