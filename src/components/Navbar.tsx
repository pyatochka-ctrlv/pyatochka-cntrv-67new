import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-all duration-300 md:px-14 ${
        scrolled
          ? 'bg-[#08090a]/85 backdrop-blur-md border-b border-[rgba(245,245,240,0.12)] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <a
        href="#top"
        className="font-unbounded font-extrabold text-base tracking-wider text-[#f5f4ef]"
      >
        SIX<b className="text-[#d4ff3d] font-extrabold">—</b>SEVEN
      </a>

      <nav className="hidden md:flex items-center gap-8 font-mono-custom text-xs tracking-wider uppercase text-[#c7c6bf]">
        <a href="#experience" className="hover:text-[#f5f4ef] transition-colors relative group py-1">
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff3d] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#film" className="hover:text-[#f5f4ef] transition-colors relative group py-1">
          The film
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff3d] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#villa" className="hover:text-[#f5f4ef] transition-colors relative group py-1">
          Villa
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff3d] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#packages" className="hover:text-[#f5f4ef] transition-colors relative group py-1">
          Packages
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff3d] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#faq" className="hover:text-[#f5f4ef] transition-colors relative group py-1">
          FAQ
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff3d] transition-all duration-300 group-hover:w-full" />
        </a>
      </nav>

      <button
        onClick={onReserveClick}
        className="font-mono-custom text-xs uppercase tracking-widest px-4 py-2.5 rounded-[3px] bg-[#d4ff3d] text-[#08090a] font-medium hover:bg-[#e4ff6e] transition-all duration-300 cursor-pointer"
      >
        Reserve your date
      </button>
    </header>
  );
};
