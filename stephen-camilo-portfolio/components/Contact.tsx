
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">Contact Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Info Card */}
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Stephen Camilo</h3>
            <p className="text-slate-500 mb-12 leading-relaxed text-lg max-w-2xl mx-auto">
              I am available for remote work and international projects. Feel free to reach out via email or connect with me on professional platforms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-emerald-50 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-envelope text-2xl text-emerald-500 group-hover:text-white transition-colors"></i>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</p>
                <a href="mailto:stephen.camilo@live.com" className="text-xl font-bold text-slate-900 hover:text-emerald-500 transition-colors break-all">
                  stephen.camilo@live.com
                </a>
              </div>
              
              <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-emerald-50 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-map-marker-alt text-2xl text-emerald-500 group-hover:text-white transition-colors"></i>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl font-bold text-slate-900">Brazil (UTC-3)</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Professional Profiles</p>
              <div className="flex justify-center gap-6">
                <a href="https://github.com/stephencamilo" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:-translate-y-1 transition-all border border-slate-100 shadow-sm">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://linkedin.com/in/stephencamilo" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:-translate-y-1 transition-all border border-slate-100 shadow-sm">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://www.drupal.org/u/stephencamilo" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:-translate-y-1 transition-all border border-slate-100 shadow-sm">
                  <i className="fas fa-cube text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
