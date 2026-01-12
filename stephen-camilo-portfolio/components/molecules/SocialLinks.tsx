
import React from 'react';

const SOCIAL_LINKS = [
  { icon: 'fab fa-github', href: 'https://github.com/stephencamilo', name: 'GitHub' },
  { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/stephencamilo', name: 'LinkedIn' },
  { icon: 'fas fa-cube', href: 'https://www.drupal.org/u/stephencamilo', name: 'Drupal' }
];

const SocialLinks: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((link, i) => (
        <a 
          key={i} 
          href={link.href} 
          target="_blank" 
          rel="noreferrer" 
          aria-label={link.name}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-emerald-500 hover:text-white ${
            light ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'
          }`}
        >
          <i className={`${link.icon} text-xl`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
