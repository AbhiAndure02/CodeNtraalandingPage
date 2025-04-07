// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import { SiX } from 'react-icons/si';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ Detect scroll to toggle style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Add mount animation once on load
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🌀 NavLink classes based on scroll
  const navLinkClass = `
    relative px-3 py-1 font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-in-out
    group ${scrolled ? 'text-black hover:text-[#e63946]' : 'text-black hover:text-[#e63946]'}
  `;

  const underlineClass = `
    absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 ease-in-out
    ${scrolled ? 'bg-[#e63946]' : 'bg-[#e63946]'} group-hover:w-full
  `;

  return (
    <nav
      className={`
        fixed top-0 left-[8%] right-[8%] z-50 px-6 md:px-12 py-4
        transition-all duration-700 ease-in-out
        bg-white shadow-md
        ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
      style={{
        borderRadius: '0rem',
      }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto transition-all duration-700 ease-in-out">
        {/* 💠 Logo */}
        <div
          className={`font-bold transition-all duration-700 ease-in-out ${scrolled ? 'text-[#e63946] text-xl' : 'text-[#e63946] text-2xl'
            }`}
        >
          Amarnath
        </div>

        {/* 💻 Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {['home', 'about', 'projects', 'journey', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-110}
              duration={700}
              className={navLinkClass}
            >
              <span className="group relative">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className={underlineClass}></span>
              </span>
            </Link>
          ))}
        </div>

        {/* 🌐 Social Icons */}
        <div className="hidden md:flex items-center gap-4 transition-all duration-700 ease-in-out">
          <a href="https://www.linkedin.com/in/amar-ambure-007/" target="_blank" rel="noopener noreferrer">
            <Linkedin
              className={`w-5 h-5 transition-all duration-300 ease-in-out ${scrolled ? 'text-black hover:text-[#e63946]' : 'text-black hover:text-[#e63946]'
                }`}
            />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-5 h-5 transition-all duration-300 ease-in-out ${scrolled ? 'text-black hover:text-[#e63946]' : 'text-black hover:text-[#e63946]'
            }`}
          >
            <SiX size={20} />
          </a>
        </div>

        {/* 📱 Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4 mt-4 gap-4 transition-all duration-300">
          {['home', 'about', 'projects', 'journey', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-80}
              duration={700}
              onClick={() => setMenuOpen(false)}
              className={`text-base ${navLinkClass}`}
            >
              <span className="group relative">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className={underlineClass}></span>
              </span>
            </Link>
          ))}
          <div className="flex gap-4 mt-2">
            <a href="https://linkedin.com/in/amarnath-ambure" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-black hover:text-[#e63946]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-black hover:text-[#e63946]" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
