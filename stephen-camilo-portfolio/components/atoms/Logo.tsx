
import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ light = false, className = '' }) => {
  return (
    <a href="#home" className={`flex items-center gap-2 group ${className}`}>
      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <span className="text-slate-900 font-black text-xl">S</span>
      </div>
      <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        CAMILO<span className="text-emerald-500">.</span>
      </span>
    </a>
  );
};

export default Logo;
