import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white dark:bg-neutral-950 border-t border-line dark:border-line-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-line-soft dark:border-line-dark">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 text-ink dark:text-white font-medium text-lg">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 72 72" fill="currentColor">
                <rect width="56" height="16" rx="2" />
                <rect x="16" y="28" width="56" height="16" rx="2" />
                <rect y="56" width="56" height="16" rx="2" />
              </svg>
              <span>ReStructure AI</span>
            </div>
            <p className="text-xs text-ink-soft dark:text-ink-light/70 mt-3 leading-relaxed">
              Architecting sovereign intelligent systems and autonomous agent departments. Your models, your data, on hardware you physically own.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div>
              <div className="text-ink-mute uppercase tracking-wider mb-3">Capabilities</div>
              <ul className="space-y-2">
                <li><a href="#anatomy" className="hover:text-ink dark:hover:text-white transition-colors">Reese Sales Appliance</a></li>
                <li><a href="#parts" className="hover:text-ink dark:hover:text-white transition-colors">7-Agent Pipeline</a></li>
                <li><a href="#simulator" className="hover:text-ink dark:hover:text-white transition-colors">Live Simulation</a></li>
              </ul>
            </div>
            <div>
              <div className="text-ink-mute uppercase tracking-wider mb-3">Sovereignty</div>
              <ul className="space-y-2">
                <li><span className="text-ink-soft dark:text-ink-light">Zero Cloud Telemetry</span></li>
                <li><span className="text-ink-soft dark:text-ink-light">AES-256 at Rest</span></li>
                <li><span className="text-ink-soft dark:text-ink-light">Air-Gapped Mode</span></li>
              </ul>
            </div>
            <div>
              <div className="text-ink-mute uppercase tracking-wider mb-3">Protocol</div>
              <ul className="space-y-2">
                <li><span className="text-ink-soft dark:text-ink-light">Model Context Protocol</span></li>
                <li><span className="text-ink-soft dark:text-ink-light">pgvector Local Store</span></li>
                <li><span className="text-ink-soft dark:text-ink-light">Claude Code Core</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-mute">
          <div>
            &copy; {new Date().getFullYear()} ReStructure AI. Replicating the 24/7 AI Sales Department Blueprint.
          </div>
          <div className="flex items-center gap-4">
            <span>SAN FRANCISCO, CA</span>
            <span>&middot;</span>
            <span className="text-reese-green font-medium">SOVEREIGNTY VERIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
