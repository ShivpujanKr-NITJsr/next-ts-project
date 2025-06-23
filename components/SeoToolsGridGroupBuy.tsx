// components/SeoToolsGrid.tsx
import Image from 'next/image';
import React from 'react';

interface Tool {
  name: string;
  imageUrl: string;
  link: string;
}

const tools: Tool[] = [
  {
    name: 'Ubersuggest',
    imageUrl: '/img/ubersuggest.png',
    link: 'https://groupbuyseotools.store/tools/ubersuggest',
  },
  {
    name: 'Wordtune',
    imageUrl: '/img/wordtune.png',
    link: 'https://groupbuyseotools.store/tools/wordtune',
  },
  {
    name: 'Jasper',
    imageUrl: '/img/jasper.png',
    link: 'https://groupbuyseotools.store/tools/jasper',
  },
  {
    name: 'Envato Elements',
    imageUrl: '/img/envato elements.png',
    link: 'https://groupbuyseotools.store/tools/envato-elements',
  },
  {
    name: 'Moz Pro',
    imageUrl: '/img/moz pro.png',
    link: 'https://groupbuyseotools.store/tools/moz-pro',
  },
  {
    name: 'Grammarly',
    imageUrl: '/img/grammarly.png',
    link: 'https://groupbuyseotools.store/tools/grammarly',
  },
  {
    name: 'Canva',
    imageUrl: '/img/canva pro.png',
    link: 'https://groupbuyseotools.store/tools/canva',
  },
  {
    name: 'QuillBot',
    imageUrl: '/img/quillbot premium.png',
    link: 'https://groupbuyseotools.store/tools/quillbot',
  },
  {
    name: 'SEMRush',
    imageUrl: '/img/semrush guru.png',
    link: 'https://groupbuyseotools.store/tools/semrush',
  },
];

const SeoToolsGrid: React.FC = () => {
  return (
    <section className='py-16 px-6 sm:px-8 lg:px-10'>
      <div className='max-w-7xl mx-auto text-center mb-14'>
        <h2 className='text-3xl font-extrabold'>Explore Our SEO Tools</h2>
        <p className='mt-4 text-lg'>
          Access premium SEO tools at an affordable price.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:max-w-[1200px] md:mx-auto'>
        {tools.map((tool) => (
          <div
            key={tool.name}
            className='border-[#8e8eff] rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl border-b-4 border-2'
          >
            <a href={tool.link} target='_blank' rel='noopener noreferrer'>
              <div className='relative bg-white'>
                <Image
                  src={tool.imageUrl}
                  alt={tool.name}
                  width={400}
                  height={192}
                  className='w-full h-48 object-contain rounded-t-lg'
                />
                <div className='absolute inset-0 bg-white opacity-20 rounded-t-lg'></div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-white-800'>
                  {tool.name}
                </h3>
                <p className='mt-3 text-white-600'>
                  Learn more about {tool.name} and how it can benefit your SEO
                  strategy.
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoToolsGrid;
