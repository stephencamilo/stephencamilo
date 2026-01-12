
import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../../constants';
import SectionHeader from '../molecules/SectionHeader';
import ProjectCard from '../molecules/ProjectCard';
import Button from '../atoms/Button';
import { Section } from '../../types';

const ProjectModal: React.FC<{ project: ProjectItem; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors">
        <i className="fas fa-times"></i>
      </button>
      <div className="grid md:grid-cols-2">
        <div className="h-64 md:h-full"><img src={project.image} alt={project.title} className="w-full h-full object-cover" /></div>
        <div className="p-8 md:p-12">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">{project.category}</span>
          <h3 className="text-3xl font-black text-slate-900 mb-4">{project.title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">{project.fullDescription}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">{tag}</span>
            ))}
          </div>
          <Button onClick={onClose} href={`#${Section.Contact}`}>REQUEST SIMILAR PROJECT <i className="fas fa-chevron-right ml-2 text-xs"></i></Button>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id={Section.Projects} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Case Studies" title="Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PORTFOLIO_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default PortfolioGrid;
