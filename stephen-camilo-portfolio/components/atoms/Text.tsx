
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'body' | 'small' | 'muted';
}

const Text: React.FC<TextProps> = ({ children, className = '', variant = 'body' }) => {
  const variants = {
    body: "text-lg leading-relaxed text-slate-400",
    small: "text-sm leading-relaxed text-slate-500",
    muted: "text-xs font-bold text-slate-400 uppercase tracking-widest"
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};

export default Text;
