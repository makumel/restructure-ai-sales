import React from 'react';
import { SALES_AGENTS } from '../data/salesAgents';
import { Wrench } from 'lucide-react';

export const AgentCards: React.FC = () => {
  const COLUMNS = [
    {
      title: 'Find & Qualify',
      subtitle: 'Account intelligence and 60-second triage.',
      agents: [SALES_AGENTS[1], SALES_AGENTS[3]]
    },
    {
      title: 'Engage & Book',
      subtitle: 'Multichannel cold outreach and calendar scheduling.',
      agents: [SALES_AGENTS[2], SALES_AGENTS[4]]
    },
    {
      title: 'Control & RevOps',
      subtitle: 'The router on top, your sign-off, and CRM synchronizer.',
      agents: [SALES_AGENTS[0], SALES_AGENTS[5], SALES_AGENTS[6]]
    }
  ];

  return (
    <section id="parts" className="py-20 border-b border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-ink-mute mb-2">
            The Parts
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-ink dark:text-white">
            What Each Agent Does Inside the Appliance.
          </h2>
          <p className="text-base text-ink-soft dark:text-ink-light/80 mt-3 leading-relaxed">
            Seven specialized agents run the loop. The orchestrator on top routes the work, the green core in the middle is you, and the RevOps synchronizer keeps your CRM immaculate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {COLUMNS.map((col, cIdx) => (
            <div key={cIdx} className="flex flex-col">
              <div className="pb-4 mb-6 border-b border-line dark:border-line-dark">
                <h3 className="text-base font-semibold text-ink dark:text-white tracking-tight">
                  {col.title}
                </h3>
                <p className="text-xs text-ink-mute mt-0.5">
                  {col.subtitle}
                </p>
              </div>

              <div className="space-y-8">
                {col.agents.map((agent) => (
                  <div 
                    key={agent.id}
                    className={`p-5 rounded-xl border transition-all ${
                      agent.isHuman
                        ? 'border-reese-green bg-white dark:bg-neutral-900 shadow-sm'
                        : 'border-line-soft dark:border-line-dark bg-white/70 dark:bg-neutral-900/70 hover:border-neutral-400 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-ink dark:text-white">
                        {agent.number}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-medium ${
                        agent.isHuman
                          ? 'bg-reese-green-lt text-reese-green-dk dark:bg-green-950 dark:text-green-300'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-ink-mute'
                      }`}>
                        {agent.controlType}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-ink dark:text-white tracking-tight">
                      {agent.title}
                    </h4>
                    <p className="text-xs font-mono text-ink-mute mt-0.5">
                      {agent.role}
                    </p>

                    <p className="text-xs text-ink-soft dark:text-ink-light/80 mt-2.5 leading-relaxed">
                      {agent.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-line-soft dark:border-line-dark">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-ink-mute mb-2 flex items-center gap-1">
                        <Wrench className="w-3 h-3" />
                        Connected Tools & MCP
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {agent.tools.map((t) => (
                          <span 
                            key={t}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-ink-soft dark:text-ink-light/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-line-soft dark:border-line-dark space-y-1">
                      {agent.specs.map(([label, val]) => (
                        <div key={label} className="flex justify-between text-[11px]">
                          <span className="text-ink-mute">{label}:</span>
                          <span className="font-mono text-ink dark:text-ink-light font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
