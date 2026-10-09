import React from 'react';
import { ShieldCheck, Moon, Sun, Terminal, Play } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenContact: () => void;
  onScrollToSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenContact,
  onScrollToSimulator,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-canvas/90 dark:bg-canvas-dark/90 backdrop-blur-md border-b border-line dark:border-line-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-3 text-ink dark:text-ink-light font-medium tracking-tight group">
            <svg 
              className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-105" 
              viewBox="0 0 72 72" 
              fill="currentColor"
              aria-hidden="true"
            >
              <rect width="56" height="16" rx="2" />
              <rect x="16" y="28" width="56" height="16" rx="2" />
              <rect y="56" width="56" height="16" rx="2" />
            </svg>
            <span className="font-semibold text-lg tracking-tight flex items-center gap-1.5">
              <span>Sovereign</span>
              <span className="font-light text-ink-mute">Sales</span>
              <span className="text-xs font-mono uppercase bg-neutral-200 dark:bg-neutral-800 text-ink dark:text-ink-light px-1.5 py-0.5 rounded tracking-wider ml-1">
                OS
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-ink-mute uppercase tracking-widest pl-4 border-l border-line dark:border-line-dark">
            <span className="inline-flex items-center gap-1.5 text-sovereign-green font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-sovereign-green animate-pulse"></span>
              24/7 Pipeline Active
            </span>
            <span>&middot;</span>
            <span>Mini Server Hardware</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-ink-soft dark:text-ink-light/80" aria-label="Main Navigation">
          <a href="#anatomy" className="hover:text-ink dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white rounded px-1 py-0.5">
            Hardware Anatomy
          </a>
          <a href="#parts" className="hover:text-ink dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white rounded px-1 py-0.5">
            The 7 Agents
          </a>
          <a href="#simulator" className="hover:text-ink dark:hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white rounded px-1 py-0.5">
            <Play className="w-3.5 h-3.5 text-sovereign-green fill-sovereign-green" />
            Live Simulation
          </a>
          <a href="#interrupts" className="hover:text-ink dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white rounded px-1 py-0.5">
            Real-World Interrupts
          </a>
          <a href="#scoreboard" className="hover:text-ink dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white rounded px-1 py-0.5">
            Scoreboard
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-ink-mute hover:text-ink dark:hover:text-white rounded-md border border-line-soft dark:border-line-dark hover:bg-white dark:hover:bg-neutral-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white active:scale-95"
            title="Toggle color theme"
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onScrollToSimulator}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-2 rounded border border-line dark:border-line-dark bg-white dark:bg-neutral-900 text-ink dark:text-ink-light hover:border-neutral-400 dark:hover:border-neutral-700 transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white"
          >
            <Terminal className="w-3.5 h-3.5 text-ink-mute" />
            Run Test Loop
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold px-4 py-2 rounded bg-ink text-white dark:bg-white dark:text-ink hover:opacity-90 active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Deploy Server
          </button>
        </div>
      </div>
    </header>
  );
};
