import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50'>
      <div className='w-full md:w-auto flex justify-between items-center'>
        <h1 className='text-2xl md:text-3xl font-bold text-fuchsia-600'>
          Shubham <span className='text-white'>Bhakare</span>
        </h1>
        
        {/* Hamburger menu for mobile */}
        <button 
          className='md:hidden text-white focus:outline-none'
          onClick={toggleMenu}
        >
          <svg 
            className='w-6 h-6' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24' 
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation - hidden on mobile unless menu is open */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0 w-full md:w-auto`}>
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl'>
          <Link
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
            className='block'
            >
            <li className='cursor-pointer hover:text-fuchsia-600 p-2 md:p-0'>Home</li>
            </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
            className='block'
          >
            <li className='cursor-pointer hover:text-fuchsia-600 p-2 md:p-0'>About</li>
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
            className='block'
          >
            <li className='cursor-pointer hover:text-fuchsia-600 p-2 md:p-0'>Projects</li>
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
            className='block'
          >
            <li className='cursor-pointer hover:text-fuchsia-600 p-2 md:p-0'>Skills</li>
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
            className='block'
          >
            <li className='cursor-pointer hover:text-fuchsia-600 p-2 md:p-0'>Contact</li>
          </Link>                
        </ul>
      </nav>
    </div>
  );
};

export default Header;