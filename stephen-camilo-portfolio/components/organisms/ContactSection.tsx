
import React from 'react';
import SectionHeader from '../molecules/SectionHeader';
import { Section } from '../../types';

const ContactSection: React.FC = () => {
  return (
    <section id={Section.Contact} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Let's Connect" title="Contact" />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Stephen Camilo</h3>
            <p className="text-slate-500 mb-12 leading-relaxed text-lg max-w-2xl mx-auto">
              I am available for remote work and international projects. Feel free to reach out via email.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-emerald-50 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-envelope text-2xl text-emerald-500 group-hover:text-white transition-colors"></i>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</p>
                <a href="mailto:stephen.camilo@live.com" className="text-xl font-bold text-slate-900 hover:text-emerald-500 break-all">stephen.camilo@live.com</a>
              </div>
              <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-emerald-50 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-map-marker-alt text-2xl text-emerald-500 group-hover:text-white transition-colors"></i>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl font-bold text-slate-900">Brazil (UTC-3)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
