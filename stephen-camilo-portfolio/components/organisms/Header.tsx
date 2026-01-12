
import React, { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import NavLink from '../molecules/NavLink';
import { Section } from '../../types';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(Section.Home);

  const navLinks = [
    { name: 'HOME', href: `#${Section.Home}`, id: Section.Home },
    { name: 'PROJECTS', href: `#${Section.Projects}`, id: Section.Projects },
    { name: 'EXPERIENCE', href: `#${Section.Experience}`, id: Section.Experience },
    { name: 'EXPERTISE', href: `#${Section.Expertise}`, id: Section.Expertise },
    { name: 'CONTACT', href: `#${Section.Contact}`, id: Section.Contact }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Slightly larger offset for better transition feel

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo light={!scrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              href={link.href}
              scrolled={scrolled}
              active={activeSection === link.id}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
            scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-[55] lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[60] lg:hidden transition-transform duration-500 ease-out shadow-2xl flex flex-col ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <Logo />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 text-slate-900 hover:bg-slate-100 rounded-xl flex items-center justify-center"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleMobileLinkClick(e, link.href)} 
                className={`text-3xl font-black transition-all ${
                  activeSection === link.id ? 'text-emerald-500 translate-x-2' : 'text-slate-900 hover:text-emerald-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-slate-100 flex justify-center gap-6">
             <a href="https://github.com/stephencamilo" target="_blank" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><i className="fab fa-github text-xl"></i></a>
             <a href="https://linkedin.com/in/stephencamilo" target="_blank" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><i className="fab fa-linkedin text-xl"></i></a>
             <a href="https://www.drupal.org/u/stephencamilo" target="_blank" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><i className="fas fa-cube text-xl"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
