
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  light?: boolean;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, light = false, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-black mt-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
