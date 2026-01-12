
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20',
    outline: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    ghost: 'bg-slate-100 text-slate-600 border border-slate-200'
  };

  return (
    <span className={`inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
