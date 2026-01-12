
import React, { useState, useEffect } from 'react';
import { HERO_TITLES } from '../constants';

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = HERO_TITLES[index % HERO_TITLES.length];
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wider uppercase border border-emerald-500/20">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight">
            STEPHEN <span className="text-emerald-500">CAMILO</span>
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-3xl text-slate-300 font-light">
              I am a <span className="text-white font-semibold">{text}</span>
              <span className="inline-block w-0.5 h-8 bg-emerald-500 ml-1 cursor-blink align-middle"></span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Senior software engineer with 10+ years of experience delivering high-complexity digital platforms using Drupal, WordPress, and Laravel in international environments.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              CONTACT ME
            </a>
            <a 
              href="#resume" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 hover:border-white/20"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/30 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
