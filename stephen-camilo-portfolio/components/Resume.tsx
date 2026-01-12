
import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="resume" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">My Resume</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button 
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'experience' 
                  ? 'bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              EXPERIENCE
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'education' 
                  ? 'bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              EDUCATION
            </button>
          </div>

          {/* Timeline Content */}
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:pl-0 space-y-12">
            {RESUME_DATA[activeTab].map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-emerald-500 shadow-sm group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-slate-50 p-8 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200/50">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-emerald-600 font-semibold mb-3">{item.organization}</h4>
                  <p className="text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
