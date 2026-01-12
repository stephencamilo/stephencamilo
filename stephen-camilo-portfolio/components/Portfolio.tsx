
import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../constants';

const ProjectModal: React.FC<{ project: ProjectItem; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
      >
        <i className="fas fa-times"></i>
      </button>
      
      <div className="grid md:grid-cols-2">
        <div className="h-64 md:h-full">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-12">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">
            {project.category}
          </span>
          <h3 className="text-3xl font-black text-slate-900 mb-4">{project.title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {project.fullDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href="#contact" 
            onClick={onClose}
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-black rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            REQUEST SIMILAR PROJECT <i className="fas fa-chevron-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">My Apps</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PORTFOLIO_DATA.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer aspect-[10/19] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-emerald-500/20"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />

              {/* Gradient Overlay - darkened for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  <span className="inline-block px-4 py-1.5 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-lg shadow-emerald-500/20">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tighter">
                    {project.title}
                  </h3>
                  
                  {/* Expandable description on hover/touch */}
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
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;
