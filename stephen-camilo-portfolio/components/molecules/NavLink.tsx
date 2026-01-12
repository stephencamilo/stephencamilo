
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled?: boolean;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, scrolled = false, active = false, onClick, className = '' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Smooth scroll fallback if CSS scroll-behavior: smooth is not supported
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`relative text-sm font-bold tracking-wide transition-all duration-300 group py-2 ${
        active 
          ? 'text-emerald-500' 
          : scrolled ? 'text-slate-600 hover:text-emerald-500' : 'text-slate-300 hover:text-white'
      } ${className}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
        active ? 'w-full' : 'w-0 group-hover:w-1/2'
      }`}></span>
    </a>
  );
};

export default NavLink;
