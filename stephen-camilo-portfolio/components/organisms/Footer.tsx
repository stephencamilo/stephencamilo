
import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import SocialLinks from '../molecules/SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Heading level={4} light className="mb-2">SC<span className="text-emerald-500">.</span></Heading>
            <Text variant="small" className="text-slate-400 max-w-sm">
              Senior PHP Developer specialized in enterprise-scale Drupal and WordPress solutions.
            </Text>
          </div>
          <SocialLinks light />
        </div>
        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <Text variant="small" className="text-slate-500">
            &copy; {new Date().getFullYear()} Stephen Camilo. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
