
import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Technical Stack</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8">Core Expertise</h2>
          
          {/* Category Filter */}
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
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => (
            <div 
              key={`${activeCategory}-${idx}`}
              className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                  <i className={`${skill.icon} text-xl text-emerald-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{skill.name}</h3>
                  {skill.featured && (
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Expert Level</span>
                  )}
                </div>
                <span className="text-sm font-black text-slate-400">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Summary / Context */}
        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Need specialized expertise?</h3>
            <p className="text-slate-400 max-w-md">
              With over a decade of experience in the PHP ecosystem, I specialize in building high-performance architectures for complex enterprise needs.
            </p>
          </div>
          <a 
            href="#contact" 
            className="relative z-10 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-black rounded-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-emerald-500/20"
          >
            DISCUSS YOUR STACK
          </a>
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
