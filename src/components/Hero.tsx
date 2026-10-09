import React from 'react';
import { ArrowDown, Cpu, Shield, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToAnatomy: () => void;
  onScrollToSimulator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToAnatomy,
  onScrollToSimulator,
  onOpenContact
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-line dark:border-line-dark overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-line dark:border-line-dark bg-white/80 dark:bg-neutral-900/80 text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light">
            <span className="w-2 h-2 rounded-full bg-sovereign-green animate-ping inline-block"></span>
            <span>Sovereign Sales OS · Blueprint V4</span>
          </div>
          <span className="text-xs font-mono text-ink-mute tracking-widest uppercase">
            Sovereign Mini Computer Server
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.035em] text-ink dark:text-white max-w-5xl leading-[1.08] mb-6">
          An entire sales department of <span className="font-semibold underline decoration-neutral-300 dark:decoration-neutral-700 decoration-1 underline-offset-8">7 agents</span>, in one mini computer server.
        </h1>

        <p className="text-lg sm:text-xl text-ink-soft dark:text-ink-light/80 max-w-2xl leading-relaxed mb-8">
          Private, sovereign, on premise... sitting on top of your desk. Sovereign Sales coordinates seven specialized agents to manage your pipeline 24/7. Research, cold outreach, inbound qualification, logistics, and RevOps — while keeping final sign-off authority in your hands.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-14">
          <button
            onClick={onScrollToAnatomy}
            className="inline-flex items-center gap-2 px-5 py-3 rounded text-sm font-medium bg-ink text-white dark:bg-white dark:text-ink hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
          >
            <Cpu className="w-4 h-4" />
            Explore Exploded Anatomy
            <ArrowDown className="w-4 h-4 ml-1 opacity-70" />
          </button>

          <button
            onClick={onScrollToSimulator}
            className="inline-flex items-center gap-2 px-5 py-3 rounded text-sm font-medium border border-line dark:border-line-dark bg-white dark:bg-neutral-900 text-ink dark:text-ink-light hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all"
          >
            <Zap className="w-4 h-4 text-sovereign-green" />
            Launch Live Pipeline Simulator
          </button>

          <button
            onClick={onOpenContact}
            className="text-xs font-mono uppercase tracking-widest text-ink-mute hover:text-ink dark:hover:text-white underline underline-offset-4 pl-2"
          >
            Order Mini Server Appliance &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-line/60 dark:border-line-dark/60">
          <div className="p-3 bg-white/50 dark:bg-neutral-900/50 rounded border border-line-soft dark:border-line-dark">
            <div className="text-xs font-mono text-ink-mute uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-ink-mute" />
              Agent Roster
            </div>
            <div className="text-xl font-semibold tracking-tight text-ink dark:text-white">
              7 Autonomous Agents
            </div>
            <p className="text-xs text-ink-mute mt-1">CSO, Research, Outreach, SDR, Booking, RevOps</p>
          </div>

          <div className="p-3 bg-white/50 dark:bg-neutral-900/50 rounded border border-line-soft dark:border-line-dark">
            <div className="text-xs font-mono text-ink-mute uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-sovereign-green" />
              Human Governance
            </div>
            <div className="text-xl font-semibold tracking-tight text-ink dark:text-white flex items-center gap-2">
              <span>You Own It</span>
              <span className="w-2 h-2 rounded-full bg-sovereign-green"></span>
            </div>
            <p className="text-xs text-ink-mute mt-1">Agent 06 closer co-pilot requires human sign-off</p>
          </div>

          <div className="p-3 bg-white/50 dark:bg-neutral-900/50 rounded border border-line-soft dark:border-line-dark">
            <div className="text-xs font-mono text-ink-mute uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-ink-mute" />
              Physical Form Factor
            </div>
            <div className="text-xl font-semibold tracking-tight text-ink dark:text-white">
              Desk Mini Server
            </div>
            <p className="text-xs text-ink-mute mt-1">Sub-25dB silent unibody, zero cloud GPU required</p>
          </div>

          <div className="p-3 bg-white/50 dark:bg-neutral-900/50 rounded border border-line-soft dark:border-line-dark">
            <div className="text-xs font-mono text-ink-mute uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-sovereign-green" />
              Real-Time Protocol
            </div>
            <div className="text-xl font-semibold tracking-tight text-ink dark:text-white">
              Model Context (MCP)
            </div>
            <p className="text-xs text-ink-mute mt-1">Direct pipes to HubSpot, Gmail, Cal.com & Apollo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
