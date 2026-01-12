import React, { useState, useEffect } from 'react';
import { HERO_TITLES } from '../../constants';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import { Section } from '../../types';

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <section id={Section.Home} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* High-Intensity Glitch Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Absolute Pitch Black */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Violent Flickering Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-[5] animate-violent-flicker"></div>
        
        {/* Distorted Grid */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-screen" 
             style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '35px 35px' }}>
        </div>

        {/* Aggressive Horizontal Slices */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`slice-${i}`}
            className="absolute bg-emerald-500/40 w-full h-[1px] z-[2] animate-glitch-slice-aggressive"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${0.04 + Math.random() * 0.12}s`,
            }}
          ></div>
        ))}

        {/* Rapid Digital Jitter Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-emerald-400/60 animate-digital-jitter"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `1px`,
                animationDuration: `${0.1 + Math.random() * 0.3}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Heavy Scanline Distortion */}
        <div className="absolute inset-0 z-10 opacity-[0.1] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.6)_50%),linear-gradient(90deg,rgba(255,0,0,0.2),rgba(0,255,0,0.1),rgba(0,0,255,0.2))] bg-[length:100%_4px,6px_100%] animate-scanlines-heavy"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="space-y-10">
          {/* Main Name with 1px Offset Glitch */}
          <div className="relative inline-block scale-110 md:scale-100">
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase relative z-10 animate-glitch-text-1px" data-text="STEPHEN CAMILO">
              STEPHEN <span className="text-emerald-500">CAMILO</span>
            </h1>
          </div>

          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-5xl text-emerald-400 font-mono tracking-tighter font-black italic">
              <span className="text-white/30 mr-2 select-none">#</span>{text}
              <span className="inline-block w-4 h-12 bg-emerald-500 ml-1 animate-cursor-aggressive align-middle"></span>
            </p>
          </div>

          <Text className="max-w-2xl mx-auto text-slate-700 animate-in fade-in duration-1000 delay-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Architecting High-Performance Backends. Global Reach. 100% Precision.
          </Text>

          <div className="pt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
            <Button 
              href={`#${Section.Contact}`} 
              onClick={(e) => scrollToSection(e as any, `#${Section.Contact}`)}
              className="relative overflow-hidden group border-2 border-emerald-500 bg-emerald-500 text-black hover:bg-black hover:text-emerald-500 transition-all duration-300 px-20 py-6 rounded-none skew-x-[-25deg] shadow-[10px_10px_0px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-4 skew-x-[25deg] font-black italic tracking-widest text-lg">
                CONNECT_NOW <i className="fas fa-bolt"></i>
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Aggressive Brutalist Borders */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-8 border-l-8 border-emerald-500/20"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-8 border-r-8 border-emerald-500/20"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-8 border-l-8 border-emerald-500/20"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-8 border-r-8 border-emerald-500/20"></div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group" onClick={(e) => scrollToSection(e as any, `#${Section.Projects}`)}>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-black tracking-[0.8em] text-emerald-500/40 group-hover:text-emerald-400 transition-colors uppercase italic">Scroll_System</span>
          <i className="fas fa-chevron-down text-emerald-500 group-hover:text-white animate-bounce text-3xl"></i>
        </div>
      </div>

      <style>{`
        @keyframes digital-jitter {
          0% { transform: translate(0,0); }
          1% { transform: translate(-80px, 0); opacity: 1; }
          2% { transform: translate(80px, 0); opacity: 0; }
          3% { transform: translate(0,0); opacity: 0.4; }
          100% { transform: translate(0,0); }
        }

        @keyframes violent-flicker {
          0%, 100% { opacity: 1; }
          49% { opacity: 1; }
          50% { opacity: 0.5; }
          51% { opacity: 1; }
        }

        @keyframes glitch-slice-aggressive {
          0% { transform: translateX(-100%); opacity: 0; }
          4% { transform: translateX(100%); opacity: 1; }
          8% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes cursor-aggressive {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0; transform: scaleY(0.6); }
        }

        @keyframes scanlines-heavy {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }

        .animate-scanlines-heavy {
          animation: scanlines-heavy 15s linear infinite;
        }

        .animate-digital-jitter {
          animation: digital-jitter infinite step-end;
        }

        .animate-violent-flicker {
          animation: violent-flicker 2.5s infinite linear;
        }

        .animate-glitch-slice-aggressive {
          animation: glitch-slice-aggressive infinite linear;
        }

        .animate-cursor-aggressive {
          animation: cursor-aggressive 0.1s infinite;
        }

        .animate-glitch-text-1px {
          position: relative;
        }

        .animate-glitch-text-1px::before,
        .animate-glitch-text-1px::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        .animate-glitch-text-1px::before {
          left: 1px;
          text-shadow: -1px 0 #ff00c1;
          clip: rect(44px, 9999px, 56px, 0);
          animation: glitch-1px-fast 2s infinite linear alternate-reverse;
        }

        .animate-glitch-text-1px::after {
          left: -1px;
          text-shadow: -1px 0 #00fff9;
          clip: rect(44px, 9999px, 56px, 0);
          animation: glitch-1px-fast-2 1.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-1px-fast {
          0% { clip: rect(15px, 9999px, 80px, 0); transform: skew(0.7deg); }
          10% { clip: rect(40px, 9999px, 30px, 0); transform: skew(0.1deg); }
          20% { clip: rect(60px, 9999px, 20px, 0); transform: skew(0.5deg); }
          30% { clip: rect(80px, 9999px, 70px, 0); transform: skew(0.9deg); }
          40% { clip: rect(20px, 9999px, 60px, 0); transform: skew(0.3deg); }
          50% { clip: rect(50px, 9999px, 90px, 0); transform: skew(0.8deg); }
          60% { clip: rect(80px, 9999px, 30px, 0); transform: skew(0.2deg); }
          70% { clip: rect(20px, 9999px, 90px, 0); transform: skew(0.6deg); }
          80% { clip: rect(20px, 9999px, 80px, 0); transform: skew(0.4deg); }
          90% { clip: rect(90px, 9999px, 30px, 0); transform: skew(0.1deg); }
          100% { clip: rect(10px, 9999px, 80px, 0); transform: skew(0.7deg); }
        }

        @keyframes glitch-1px-fast-2 {
          0% { clip: rect(60px, 9999px, 100px, 0); transform: skew(0.9deg); }
          20% { clip: rect(70px, 9999px, 5px, 0); transform: skew(0.3deg); }
          40% { clip: rect(30px, 9999px, 90px, 0); transform: skew(0.6deg); }
          60% { clip: rect(60px, 9999px, 90px, 0); transform: skew(0.8deg); }
          80% { clip: rect(80px, 9999px, 40px, 0); transform: skew(0.5deg); }
          100% { clip: rect(60px, 9999px, 100px, 0); transform: skew(0.9deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;