import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const PublicLayout = () => {
  return (
    <div className='flex flex-col min-h-screen' style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <main className='flex-1' style={{ backgroundColor: '#F2EFE9' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
