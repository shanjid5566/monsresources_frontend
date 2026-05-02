import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './adminSidebar/Sidebar';
import DashboardHeader from './DashboardHeader';

const Layout = () => {
  return (
    <div className='flex h-dvh overflow-hidden bg-gray-50'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <DashboardHeader />
        <main className='flex-1 overflow-auto bg-[#FBF9F3]'>
          <div className='p-8'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
