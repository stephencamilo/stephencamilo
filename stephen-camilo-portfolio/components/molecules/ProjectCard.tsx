
import React from 'react';
import { ProjectItem } from '../../constants';
import Badge from '../atoms/Badge';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative cursor-pointer aspect-[10/19] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-emerald-500/20"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500"></div>
      
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
          <Badge className="mb-4">{project.category}</Badge>
          <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tighter">
            {project.title}
          </h3>
          <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-medium">
                {project.description}
              </p>
              <div className="flex items-center gap-3 text-emerald-400 font-black text-xs uppercase tracking-[0.25em]">
                <span className="w-8 h-px bg-emerald-500/50"></span>
                EXPLORE PROJECT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
