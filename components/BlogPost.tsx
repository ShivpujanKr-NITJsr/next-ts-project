// BlogPost.tsx
import React from 'react';

type BlogPostProps = {
  post: {
    id: number;
    title: string;
    date: string;
    content: string;
  };
  onBack: () => void;
};

export default function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <div className='bg-white dark:bg-[#1e1e30] p-6 rounded-2xl shadow-xl'>
      <button
        className='mb-4 text-blue-600 underline hover:text-blue-800'
        onClick={onBack}
      >
        ← Back to all blogs
      </button>
      <h3 className='text-2xl font-semibold mb-2 text-gray-800 dark:text-white'>
        {post.title}
      </h3>
      <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
        {post.date}
      </p>
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
        {post.content}
      </p>
    </div>
  );
}
