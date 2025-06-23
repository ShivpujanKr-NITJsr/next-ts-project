import { useEffect, useState } from 'react';

const icons = ['🛠️', '⚙️', '🔧', '🔨', '🧰'];

export default function FallingIcons() {
  const [drops, setDrops] = useState<
    { id: number; side: 'left' | 'right'; icon: string }[]
  >([]);
  const [side, setSide] = useState<'left' | 'right'>('left');

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSide = side === 'left' ? 'right' : 'left';
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      setDrops((prev) => [
        ...prev,
        { id: Date.now(), side: nextSide, icon: randomIcon },
      ]);
      setSide(nextSide);
    }, 1000); // every 1s

    return () => clearInterval(interval);
  }, [side]);

  return (
    <div className='fixed inset-0 pointer-events-none z-50 overflow-hidden'>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={`absolute top-0 text-3xl ${
            drop.side === 'left' ? 'left-6' : 'right-6'
          } animate-fall`}
          style={{ animationDuration: '4s' }}
        >
          {drop.icon}
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
