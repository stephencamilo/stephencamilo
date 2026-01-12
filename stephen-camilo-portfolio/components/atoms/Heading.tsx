
import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className = '', light = false }) => {
  const baseStyle = "font-black tracking-tight";
  const colors = light ? "text-white" : "text-slate-900";
  
  const tags = {
    1: `text-5xl md:text-8xl ${baseStyle} ${colors} ${className}`,
    2: `text-4xl md:text-5xl ${baseStyle} ${colors} ${className}`,
    3: `text-2xl md:text-3xl ${baseStyle} ${colors} ${className}`,
    4: `text-xl ${baseStyle} ${colors} ${className}`
  };

  // Fix: Explicitly cast the dynamic tag name to a union of valid intrinsic elements to resolve JSX namespace and call signature errors
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  return <Tag className={tags[level]}>{children}</Tag>;
};

export default Heading;
