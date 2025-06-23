import React, { useEffect, useState } from 'react';

interface Stat {
  icon: string;
  label: string;
  value: number | string;
  isNumeric?: boolean;
}

const stats: Stat[] = [
  {
    icon: '🌍',
    label: 'Users around the world',
    value: 2000,
    isNumeric: true,
  },
  {
    icon: '⭐',
    label: 'Trustpilot Rating',
    value: 4.8,
    isNumeric: true, // Marked as numeric to animate it
  },
  {
    icon: '👥',
    label: 'Daily Users',
    value: 500,
    isNumeric: true,
  },
];

const StatsSection: React.FC = () => {
  const [animatedCounts, setAnimatedCounts] = useState<number[]>(
    stats.map(() => 0)
  );

  useEffect(() => {
    const startTimes = stats.map(() => Date.now());
    const durations = stats.map(() => 2000); // 2 seconds per animation

    const animate = () => {
      const now = Date.now();
      const updated = stats.map((stat, i) => {
        if (!stat.isNumeric) return animatedCounts[i];

        const progress = Math.min((now - startTimes[i]) / durations[i], 1);
        // For the Trustpilot rating, we animate up to the decimal number
        if (typeof stat.value === 'number') {
          return (stat.value as number) * progress;
        }
        return animatedCounts[i];
      });

      setAnimatedCounts(updated);

      if (
        updated.some(
          (count, i) =>
            stats[i].isNumeric && (count as number) < (stats[i].value as number)
        )
      ) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <section className='py-16 px-6 text-center bg-base-100'>
      <h2 className='text-3xl font-extrabold mb-6'>Loved by</h2>
      <p className='text-lg mb-10'>2,000+ users around the world</p>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className='bg-base-200 p-6 rounded-xl shadow-md'
          >
            <div className='text-4xl'>{stat.icon}</div>
            <p className='text-3xl font-bold text-primary mt-2'>
              {stat.isNumeric ? (
                stat.label === 'Trustpilot Rating' ? (
                  <>
                    {/* Display rating number first */}
                    <span className='text-white'>
                      {animatedCounts[i].toFixed(1)}
                    </span>{' '}
                    {/* Stars in white color */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        {animatedCounts[i] >= index + 1 ? (
                          <span className='text-white'>★</span>
                        ) : animatedCounts[i] >= index + 0.5 ? (
                          <span className='text-white'>☆</span>
                        ) : (
                          <span className='text-gray-400'>☆</span>
                        )}
                      </span>
                    ))}
                  </>
                ) : (
                  Math.floor(animatedCounts[i] as number).toLocaleString()
                )
              ) : (
                stat.value
              )}{' '}
              {stat.label !== 'Trustpilot Rating' ? '+' : ''}
            </p>
            <p className='mt-1 text-base-content'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
