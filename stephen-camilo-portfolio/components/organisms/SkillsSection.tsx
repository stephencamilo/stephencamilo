
import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../constants';
import SectionHeader from '../molecules/SectionHeader';
import Button from '../atoms/Button';
import SkillBar from '../molecules/SkillBar';
import { Section } from '../../types';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id={Section.Expertise} className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Technical Stack" title="Expertise" />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeCategory === idx 
                  ? 'bg-slate-900 text-white shadow-xl scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => (
            <SkillBar key={`${activeCategory}-${idx}`} skill={skill} />
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto overflow-hidden relative">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Need specialized expertise?</h3>
            <p className="text-slate-400 max-w-md">With over a decade of experience, I specialize in building high-performance architectures.</p>
          </div>
          <Button href={`#${Section.Contact}`} variant="primary">DISCUSS YOUR STACK</Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
