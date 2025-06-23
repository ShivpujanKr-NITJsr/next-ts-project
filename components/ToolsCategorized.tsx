'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';

const products = [
  // SEO Tools
  { id: 1, name: 'Ahrefs', category: 'SEO Tools', image: '/img/ahrefs.png' },
  {
    id: 2,
    name: 'Semrush',
    category: 'SEO Tools',
    image: '/img/semrush guru.png',
  },
  { id: 3, name: 'Moz Pro', category: 'SEO Tools', image: '/img/moz pro.png' },
  {
    id: 4,
    name: 'Surfer SEO',
    category: 'SEO Tools',
    image: '/img/serpstat.png',
  },
  {
    id: 5,
    name: 'Semrush Guru',
    category: 'SEO Tools',
    image: '/img/semrush guru.png',
  },
  {
    id: 7,
    name: 'Ubersuggest',
    category: 'SEO Tools',
    image: '/img/ubersuggest.png',
  },
  { id: 8, name: 'Spyfu', category: 'SEO Tools', image: '/img/spyfu.png' },
  {
    id: 9,
    name: 'Serpstat',
    category: 'SEO Tools',
    image: '/img/serpstat.png',
  },
  {
    id: 10,
    name: 'Buzzsumo',
    category: 'SEO Tools',
    image: '/img/buzzsumo.png',
  },

  // AI Tools
  { id: 15, name: 'Jasper AI', category: 'AI Tools', image: '/img/jasper.png' },
  {
    id: 16,
    name: 'ChatGPT',
    category: 'AI Tools',
    image: '/img/chatgpt 1.png',
  },
  { id: 17, name: 'Copy.ai', category: 'AI Tools', image: '/img/copy.ai.png' },
  {
    id: 18,
    name: 'Writesonic',
    category: 'AI Tools',
    image: '/img/writesonic.png',
  },
  {
    id: 20,
    name: 'QuillBot',
    category: 'AI Tools',
    image: '/img/quillbot.png',
  },
  {
    id: 24,
    name: 'BypassGpt',
    category: 'AI Tools',
    image: '/img/bypassgpt.png',
  },
  {
    id: 31,
    name: 'CopyMatic',
    category: 'AI Tools',
    image: '/img/copymatic.png',
  },
  {
    id: 32,
    name: 'WordHero',
    category: 'AI Tools',
    image: '/img/wordhero.png',
  },

  // Design Tools
  {
    id: 36,
    name: 'Canva Pro',
    category: 'Design Tools',
    image: '/img/canva pro.png',
  },
  {
    id: 37,
    name: 'Adobe Photoshop',
    category: 'Design Tools',
    image: '/img/adobe photoshop.png',
  },
  { id: 38, name: 'Figma', category: 'Design Tools', image: '/img/figma.png' },
  {
    id: 39,
    name: 'PicMonkey',
    category: 'Design Tools',
    image: '/img/picmonkey.png',
  },
  {
    id: 40,
    name: 'Crello (Vista Create)',
    category: 'Design Tools',
    image: '/img/crello.png',
  },

  // Writing Tools
  {
    id: 45,
    name: 'Grammarly',
    category: 'Writing Tools',
    image: '/img/grammarly.png',
  },
  {
    id: 47,
    name: 'Wordtune',
    category: 'Writing Tools',
    image: '/img/wordtune.png',
  },
  {
    id: 48,
    name: 'Writehuman',
    category: 'Writing Tools',
    image: '/img/writehuman.png',
  },

  // Video Tools
  {
    id: 55,
    name: 'InVideo',
    category: 'Video Tools',
    image: '/img/invideo.png',
  },

  // E-learning Platforms
  { id: 60, name: 'Udemy', category: 'E-learning', image: '/img/udemy.png' },
  {
    id: 61,
    name: 'Coursera',
    category: 'E-learning',
    image: '/img/coursera.png',
  },

  // Miscellaneous Tools
  {
    id: 64,
    name: 'Storyblocks',
    category: 'Miscellaneous',
    image: '/img/storyblocks.png',
  },
  {
    id: 69,
    name: 'Gorails',
    category: 'Miscellaneous',
    image: '/img/gorails.png',
  },
  {
    id: 70,
    name: 'Dichvusocks',
    category: 'Miscellaneous',
    image: '/img/dichvusocks.png',
  },
  {
    id: 72,
    name: 'Blinkist',
    category: 'Miscellaneous',
    image: '/img/blinkist.png',
  },
  {
    id: 73,
    name: 'Photoroom',
    category: 'Miscellaneous',
    image: '/img/photoroom.png',
  },
];

// update path as needed

const categories = [
  'All Tools',
  ...Array.from(new Set(products.map((p) => p.category))),
];

export default function ToolsCategorized() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== 'All Tools') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div className='w-full min-h-screen text-gray-100 px-6 md:px-16 py-12 flex flex-col items-center'>
      {/* Header */}
      <header className='w-full max-w-[1200px] mb-12'>
        <h1 className='text-primary font-extrabold text-4xl md:text-5xl tracking-tight select-none mb-6'>
          Tools
        </h1>

        {/* Select + Search Row */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <select
            id='category-select'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='w-full sm:w-1/3 px-4 py-3 text-lg border-2 border-primary rounded-lg border-[#8e8eff] text-white focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer'
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
                className='text-black cursor-pointer'
              >
                {category}
              </option>
            ))}
          </select>

          <input
            type='search'
            placeholder='Search tools...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label='Search tools'
            className='w-full sm:w-1/3 px-4 py-3 border-2 border-primary rounded-lg placeholder-gray-400 border-[#8e8eff] text-white focus:ring-primary focus:border-primary transition focus:outline-none focus:ring-2 focus:ring-white focus:border-primary caret-white'
          />
        </div>
      </header>

      {/* Products */}
      <main className='w-full max-w-[1200px] flex-grow'>
        {filteredProducts.length > 0 ? (
          <ul
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
            role='list'
          >
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                tabIndex={0}
                className='border-[#8e8eff] card flex flex-col items-center shadow-sm hover:shadow-xl transition transform hover:-translate-y-1'
              >
                <div
                  className='flex items-center bg-white justify-center mb-4 w-full'
                  style={{ aspectRatio: '260/180' }} // This ensures aspect ratio is preserved
                >
                  <Image
                    src={product.image}
                    alt='image'
                    layout='responsive'
                    width={260}
                    height={180}
                    className='object-cover' // Ensures the image covers the container without stretching
                  />
                </div>
                <h3 className='text-gray-100 font-semibold text-lg text-center mb-2 truncate w-full'>
                  {product.name}
                </h3>
                <p className='text-sm text-muted uppercase tracking-wide mb-4'>
                  {product.category}
                </p>
                <button
                  type='button'
                  className='button-primary mt-auto cursor-pointer'
                  aria-label={`Get access to ${product.name}`}
                  tabIndex={-1}
                >
                  <a
                    href={'https://groupbuyseotools.store/tools/'}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Get Access
                  </a>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-muted text-lg mt-12'>
            No tools found matching your criteria.
          </p>
        )}
      </main>
    </div>
  );
}
