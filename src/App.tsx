import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IsometricStage } from './components/IsometricStage';
import { PipelineSimulator } from './components/PipelineSimulator';
import { AgentCards } from './components/AgentCards';
import { Interrupts } from './components/Interrupts';
import { Scoreboard } from './components/Scoreboard';
import { ContactModal } from './components/ContactModal';
import { VideoDemoModal } from './components/VideoDemoModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isVideoDemoOpen, setIsVideoDemoOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToAnatomy = () => {
    const el = document.getElementById('anatomy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas dark:bg-canvas-dark text-ink dark:text-ink-light transition-colors duration-200">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
        onScrollToSimulator={scrollToSimulator}
        onOpenVideoDemo={() => setIsVideoDemoOpen(true)}
      />
      <ErrorBoundary>
        <main className="flex-1">
          <Hero
            onScrollToAnatomy={scrollToAnatomy}
            onScrollToSimulator={scrollToSimulator}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenVideoDemo={() => setIsVideoDemoOpen(true)}
          />
          <IsometricStage />
          <PipelineSimulator />
          <AgentCards />
          <Interrupts />
          <Scoreboard />
        </main>
      </ErrorBoundary>
      <Footer />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <VideoDemoModal
        isOpen={isVideoDemoOpen}
        onClose={() => setIsVideoDemoOpen(false)}
      />
    </div>
  );
};
