import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmployerRegister = () => {
    navigate('/register', { state: { isEmployerRegister: true } });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className='sticky top-0 z-40 bg-[#FBF9F3]'>
        <div className='container mx-auto px-6 py-4   '>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link to='/' className='flex items-center gap-2 cursor-pointer'>
              <img src='/logo.png' alt='PNW' className='h-12  w-auto' />
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-6'>
              <Link to='/find-jobs' className='text-base font-medium text-[#0C0C0C] cursor-pointer mr-12'>
                Find Jobs
              </Link>
              <button
                onClick={handleEmployerRegister}
                className='px-4 py-2 rounded-lg text-base font-semibold bg-[#1A5F37] text-white cursor-pointer hover:bg-[#155630] transition-colors'
              >
                Get Employers Account
              </button>
              <Link
                to={'/login'}
                className='px-4 py-2 rounded-lg text-base font-semibold bg-[#D4AF37] text-[#0C0C0C] cursor-pointer hover:bg-[#c4a02e] transition-colors'
              >
                Sign In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden p-2 text-[#0C0C0C] relative z-50 cursor-pointer'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/50 z-30 lg:hidden'
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className='fixed top-16 left-0 right-0 bg-white z-40 lg:hidden animate-slide-down shadow-lg'>
            <div className='p-4 space-y-3'>
              <a 
                href='#' 
                onClick={() => setIsMenuOpen(false)} 
                className='block w-full px-4 py-2 rounded-lg text-sm font-semibold text-[#0C0C0C] border-2 border-[#0C0C0C] text-center cursor-pointer'
              >
                Find Jobs
              </a>
              <button
                onClick={handleEmployerRegister}
                className='w-full px-4 py-2 rounded-lg text-sm font-semibold bg-[#1A5F37] text-white cursor-pointer hover:bg-[#155630] transition-colors'
              >
                Get Employers Account
              </button>
              <Link
                to={'/login'}
                onClick={() => setIsMenuOpen(false)}
                className='w-full block px-4 py-2 rounded-lg text-sm font-semibold bg-[#D4AF37] text-[#0C0C0C] text-center cursor-pointer'
              >
                Sign In
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
