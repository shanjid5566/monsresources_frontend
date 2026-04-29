import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex h-dvh overflow-hidden bg-gray-50'>
      <aside className='w-64 bg-gray-900 text-white p-4'>
        <div className='font-bold text-lg mb-8'>Admin</div>
        <nav className='space-y-2'>
          <div>Navigation menu</div>
        </nav>
      </aside>
      <main className='flex-1 overflow-auto'>
        <div className='p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
