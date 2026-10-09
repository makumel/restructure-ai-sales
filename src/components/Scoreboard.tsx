import React from 'react';

export const Scoreboard: React.FC = () => {
  const STATS = [
    { num: '1,420+', label: 'Accounts enriched & researched', detail: 'Zero duplicate entries across CRM' },
    { num: '99.4%', label: 'ICP match & deliverability', detail: 'Verified SMTP + DMARC domain rotation' },
    { num: '< 38s', label: 'Inbound SDR response latency', detail: 'Global 24/7 instant lead engagement' },
    { num: '100%', label: 'On-premise data sovereignty', detail: 'Zero customer records leave local NVMe' },
  ];

  const PLATFORMS = [
    { name: 'HubSpot CRM', type: 'Two-Way Sync' },
    { name: 'Apollo.io', type: 'Account Intelligence' },
    { name: 'LinkedIn Sales Nav', type: 'Committee Mapping' },
    { name: 'Google Workspace / Gmail', type: 'Relay Sequences' },
    { name: 'Cal.com', type: 'Logistics & Booking' },
    { name: 'Stripe Billing', type: 'Invoice Automation' },
    { name: 'Slack', type: 'Real-Time Telemetry' },
  ];

  return (
    <section id="scoreboard" className="py-20 border-b border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-ink-mute mb-2">
              Performance Scoreboard
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-ink dark:text-white">
              The Scoreboard So Far, Building in Public.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-sovereign-green font-medium">
            <span className="w-2 h-2 rounded-full bg-sovereign-green animate-pulse"></span>
            ALL METRICS COLLECTED FROM LOCAL AUDIT LOGS
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white dark:bg-neutral-900 border border-line-soft dark:border-line-dark rounded-xl shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink dark:text-white font-mono">
                  {stat.num}
                </div>
                <div className="text-sm font-medium text-ink-soft dark:text-ink-light mt-2">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs font-mono text-ink-mute mt-4 pt-3 border-t border-line-soft dark:border-line-dark">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-white dark:bg-neutral-900 border border-line dark:border-line-dark rounded-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-ink-mute mb-4">
            Unified Model Context Protocol (MCP) Connectors
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PLATFORMS.map((plat) => (
              <div 
                key={plat.name}
                className="p-3 bg-canvas dark:bg-neutral-950 border border-line-soft dark:border-line-dark rounded-lg flex flex-col justify-between"
              >
                <div className="text-xs font-semibold text-ink dark:text-white truncate">
                  {plat.name}
                </div>
                <div className="text-[10px] font-mono text-ink-mute mt-1">
                  {plat.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
