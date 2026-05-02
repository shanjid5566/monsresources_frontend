import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './adminSidebar/Sidebar';
import DashboardHeader from './DashboardHeader';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='flex h-dvh overflow-hidden bg-gray-50'>
      {/* Desktop Sidebar */}
      <div className='hidden lg:block'>
        <Sidebar onClose={closeMobileMenu} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black/70 bg-opacity-50 z-30 lg:hidden'
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed left-0 top-0 bottom-0 w-64 bg-[#E2E2E2] z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar onClose={closeMobileMenu} />
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <DashboardHeader onMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
        <main className='flex-1 overflow-auto bg-[#FBF9F3]'>
          <div className='p-4 md:p-8'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
