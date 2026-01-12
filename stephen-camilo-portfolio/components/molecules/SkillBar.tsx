
import React from 'react';
import { SkillItem } from '../../types';
import Text from '../atoms/Text';

interface SkillBarProps {
  skill: SkillItem;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
          <i className={`${skill.icon} text-xl text-emerald-600 group-hover:text-white transition-colors`}></i>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900">{skill.name}</h3>
          {skill.featured && <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Expert Level</span>}
        </div>
        <span className="text-sm font-black text-slate-400">{skill.level}%</span>
      </div>
      <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full transition-all duration-1000" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
