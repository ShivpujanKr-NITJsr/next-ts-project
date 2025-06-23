'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogPost from '@/components/BlogPost';

const blogPosts = [
  {
    id: 1,
    title:
      '7 Budget-friendly Group Buy SEO Tools to Boost Your Productivity in 2025',
    date: 'January 1, 2025',
    content:
      'Are SEO premium tools a burden on your bank account? Discover affordable group buy SEO tools to enhance your productivity without breaking the bank...',
  },
  {
    id: 2,
    title: 'Is Group Buy the Best Way to Afford Grammarly Premium in 2025?',
    date: 'January 1, 2025',
    content:
      'If you write emails, blogs, or any kind of content, Grammarly Premium can be a game-changer...',
  },
  {
    id: 3,
    title: 'Group Buy SEO Tools Bangladesh: Boost Your Website’s Performance',
    date: 'November 20, 2024',
    content:
      'In today’s highly competitive digital landscape, leveraging group buy SEO tools in Bangladesh can significantly enhance your website’s performance...',
  },
];

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState<
    null | (typeof blogPosts)[0]
  >(null);

  return (
    <div className='py-10 px-4 text-white'>
      <motion.h2
        className='text-3xl font-bold text-center mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Blog Posts
      </motion.h2>

      <div className='max-w-4xl mx-auto'>
        <AnimatePresence mode='wait'>
          {selectedPost ? (
            <motion.div
              key='blog-post'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <BlogPost
                post={selectedPost}
                onBack={() => setSelectedPost(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key='blog-list'
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className='bg-white dark:bg-[#141439] p-6 rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl transition-all'
                  onClick={() => setSelectedPost(post)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>
                    {post.title}
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                    {post.date}
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {post.content.substring(0, 100)}...
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
