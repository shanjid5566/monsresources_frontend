import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-blue-600 text-white shadow-lg'>
        <div className='container mx-auto px-4 py-4'>
          <div className='text-xl font-bold'>App</div>
        </div>
      </nav>
      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
