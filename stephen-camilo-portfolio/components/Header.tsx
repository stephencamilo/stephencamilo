
import React, { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-slate-900 font-black text-xl">S</span>
          </div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            CAMILO<span className="text-emerald-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold tracking-wide hover:text-emerald-500 transition-colors ${
                scrolled ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 lg:hidden p-6">
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-900 hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
