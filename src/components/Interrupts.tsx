import React from 'react';
import { INTERRUPTS } from '../data/salesAgents';
import { CheckCircle2 } from 'lucide-react';

export const Interrupts: React.FC = () => {
  return (
    <section id="interrupts" className="py-20 border-b border-line dark:border-line-dark bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-ink-mute mb-2">
            The Loop, Interrupted
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-ink dark:text-white">
            What Used to Need a VP of Sales at a Desk.
          </h2>
          <p className="text-base text-ink-soft dark:text-ink-light/80 mt-3 leading-relaxed">
            Eight events that break a normal pipeline week, and which part of the mini computer server handles them autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-neutral-800 border border-line dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
          {INTERRUPTS.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 bg-canvas dark:bg-neutral-950 flex flex-col justify-between hover:bg-white dark:hover:bg-neutral-900 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-ink-mute">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-ink dark:text-ink-light font-medium">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-ink dark:text-white tracking-tight leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-ink-soft dark:text-ink-light/80 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-line-soft dark:border-line-dark font-mono text-[11px] text-ink-mute flex items-center justify-between">
                <span>{item.tools}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-reese-green" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
