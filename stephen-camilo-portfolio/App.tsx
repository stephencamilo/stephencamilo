
import React, { useState, useEffect } from 'react';
import MainLayout from './components/templates/MainLayout';
import Hero from './components/organisms/Hero';
import PortfolioGrid from './components/organisms/PortfolioGrid';
import ResumeSection from './components/organisms/ResumeSection';
import SkillsSection from './components/organisms/SkillsSection';
import ContactSection from './components/organisms/ContactSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainLayout scrolled={scrolled}>
      <Hero />
      <div className="bg-white">
        <PortfolioGrid />
        <ResumeSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </MainLayout>
  );
};

export default App;
