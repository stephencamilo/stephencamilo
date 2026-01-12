
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-black rounded-xl transition-all active:scale-95 shadow-lg whitespace-nowrap";
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-slate-900 shadow-emerald-500/20",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10",
    outline: "bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
