import React, { memo } from 'react';

const HomeContent = memo(() => {
  return (
    <div className='max-w-4xl mx-auto'>
      <article className='bg-white rounded-lg shadow-md p-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Home</h1>
        <p className='text-lg text-gray-600 mb-6'>Welcome to your application</p>
      </article>
    </div>
  );
});

HomeContent.displayName = 'HomeContent';

export default HomeContent;
