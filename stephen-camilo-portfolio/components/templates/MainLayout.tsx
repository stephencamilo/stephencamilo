
import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import AIChatBot from '../organisms/AIChatBot';

interface MainLayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, scrolled }) => {
  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <main>
        {children}
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default MainLayout;
