import React, { useState, useEffect } from 'react';
import { SALES_AGENTS, DEMO_SCENARIOS } from '../data/salesAgents';
import { LeadScenario, PipelineSimulationEvent } from '../types';
import { Play, RotateCcw, CheckCircle, AlertTriangle, ShieldCheck, Sparkles, Terminal, UserCheck, XCircle } from 'lucide-react';

function getStepCardClass(
  isAwaitingHuman: boolean,
  isAgentActive: boolean,
  isAgentPassed: boolean
): string {
  if (isAwaitingHuman) {
    return 'border-reese-amber bg-amber-50 dark:bg-amber-950/40 ring-2 ring-reese-amber/50 animate-pulse';
  }
  if (isAgentActive) {
    return 'border-ink bg-white dark:border-white dark:bg-neutral-800 shadow-sm';
  }
  if (isAgentPassed) {
    return 'border-reese-green/40 bg-reese-green-lt/30 dark:bg-green-950/20';
  }
  return 'border-line-soft dark:border-line-dark bg-white/40 dark:bg-neutral-900/40 opacity-70';
}

function renderStepStatusIcon(
  isAwaitingHuman: boolean,
  isAgentActive: boolean,
  isAgentPassed: boolean
) {
  if (isAgentPassed) {
    return <CheckCircle className="w-3.5 h-3.5 text-reese-green" />;
  }
  if (isAwaitingHuman) {
    return <AlertTriangle className="w-3.5 h-3.5 text-reese-amber animate-bounce" />;
  }
  if (isAgentActive) {
    return <span className="w-2 h-2 rounded-full bg-ink dark:bg-white animate-ping" />;
  }
  return <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />;
}

function getSimulatorStatusText(isRunning: boolean, dealWon: boolean, isRejected: boolean): string {
  if (isRunning) return 'EXECUTING PIPELINE';
  if (dealWon) return 'IDLE · CYCLE COMPLETE';
  if (isRejected) return 'HALTED · HUMAN SOVEREIGN ABORT';
  return 'WAITING FOR TRIGGER';
}

export const PipelineSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<LeadScenario>(DEMO_SCENARIOS[0]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [events, setEvents] = useState<PipelineSimulationEvent[]>([]);
  const [awaitingApproval, setAwaitingApproval] = useState<boolean>(false);
  const [dealApproved, setDealApproved] = useState<boolean>(false);
  const [dealWon, setDealWon] = useState<boolean>(false);
  const [dealRejected, setDealRejected] = useState<boolean>(false);
  const terminalEndRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (events.length > 0) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [events]);

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setEvents([]);
    setAwaitingApproval(false);
    setDealApproved(false);
    setDealWon(false);
    setDealRejected(false);
  };

  const handleStart = () => {
    handleReset();
    setIsRunning(true);
    setCurrentStep(1);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (currentStep === 1) {
      const timer = setTimeout(() => {
        setEvents((prev) => [
          ...prev,
          {
            step: 1,
            agentId: 'cso-orchestrator',
            agentName: '01 · CSO Orchestrator',
            status: 'completed',
            action: 'Evaluated lead against icp-matrix.md',
            details: `Target: ${selectedScenario.company} · Tier 1 Enterprise (ICP Match: 96%). Dispatched Agent 02.`,
            timestamp: new Date().toLocaleTimeString(),
            badge: 'MCP Bus'
          }
        ]);
        setCurrentStep(2);
      }, 1200);
      return () => clearTimeout(timer);
    }

    if (currentStep === 2) {
      const timer = setTimeout(() => {
        setEvents((prev) => [
          ...prev,
          {
            step: 2,
            agentId: 'deep-prospecting',
            agentName: '02 · Prospecting & Research',
            status: 'completed',
            action: 'Enriched Account Dossier',
            details: `Identified Decision Maker: ${selectedScenario.contact.name} (${selectedScenario.contact.title}). Verified SMTP & tech stack telemetry.`,
            timestamp: new Date().toLocaleTimeString(),
            badge: 'Apollo + LinkedIn'
          }
        ]);
        setCurrentStep(3);
      }, 1400);
      return () => clearTimeout(timer);
    }

    if (currentStep === 3) {
      const timer = setTimeout(() => {
        setEvents((prev) => [
          ...prev,
          {
            step: 3,
            agentId: 'cold-outreach',
            agentName: '03 · Multichannel Outreach',
            status: 'completed',
            action: 'Dispatched Personalized Touchpoint',
            details: `Drafted bespoke messaging anchored to recent infrastructure scaling milestones. Delivered via warm relay.`,
            timestamp: new Date().toLocaleTimeString(),
            badge: 'Smartlead + Gmail'
          }
        ]);
        setCurrentStep(4);
      }, 1300);
      return () => clearTimeout(timer);
    }

    if (currentStep === 4) {
      const timer = setTimeout(() => {
        setEvents((prev) => [
          ...prev,
          {
            step: 4,
            agentId: 'inbound-sdr',
            agentName: '04 · Inbound SDR & Qualification',
            status: 'completed',
            action: 'BANT Scored in 38s',
            details: `Prospect engaged. Confirmed budget: ${selectedScenario.dealSize}. Architecture requirements validated against documentation.`,
            timestamp: new Date().toLocaleTimeString(),
            badge: 'Webhook Validated'
          }
        ]);
        setCurrentStep(5);
      }, 1300);
      return () => clearTimeout(timer);
    }

    if (currentStep === 5) {
      const timer = setTimeout(() => {
        setEvents((prev) => [
          ...prev,
          {
            step: 5,
            agentId: 'meeting-booker',
            agentName: '05 · Call Logistics & Booker',
            status: 'completed',
            action: 'Confirmed Calendar Discovery Call',
            details: `Synced via Cal.com. Meeting locked for Thursday 2:00 PM EST. Executive 1-page pre-call dossier delivered to Slack.`,
            timestamp: new Date().toLocaleTimeString(),
            badge: 'Cal.com Confirmed'
          }
        ]);
        setCurrentStep(6);
        setAwaitingApproval(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (currentStep === 6 && dealApproved) {
      setEvents((prev) => [
        ...prev,
        {
          step: 6,
          agentId: 'human-closer',
          agentName: '06 · Closer Co-Pilot (YOU)',
          status: 'completed',
          action: 'Human Sign-Off Granted',
          details: `Founder verified contract terms & pricing. Master agreement counter-signed. Dispatched Agent 07 for RevOps sync.`,
          timestamp: new Date().toLocaleTimeString(),
          badge: 'You Own It 🟢'
        }
      ]);
      setAwaitingApproval(false);
      setCurrentStep(7);
    }

    if (currentStep === 7) {
      const timer = setTimeout(() => {
        setEvents((prev) => [
          ...prev,
          {
            step: 7,
            agentId: 'revops-sync',
            agentName: '07 · RevOps & CRM Auto-Sync',
            status: 'completed',
            action: 'HubSpot Deal Transitioned to Closed-Won',
            details: `Stripe invoice generated (${selectedScenario.dealSize}). Customer onboarding channel provisioned in Slack. Zero manual data entry.`,
            timestamp: new Date().toLocaleTimeString(),
            badge: 'Deal Won 🎉'
          }
        ]);
        setIsRunning(false);
        setDealWon(true);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [isRunning, currentStep, dealApproved, selectedScenario]);

  const handleApproveDeal = () => {
    setDealApproved(true);
  };

  const handleRejectDeal = () => {
    setDealRejected(true);
    setIsRunning(false);
    setAwaitingApproval(false);
    setEvents((prev) => [
      ...prev,
      {
        step: 6,
        agentId: 'human-closer',
        agentName: '06 · Closer Co-Pilot (YOU)',
        status: 'rejected',
        action: 'Sovereign Safety Abort Triggered',
        details: 'Founder rejected enterprise proposal terms. Halting pipeline. No external charges or agreements were executed.',
        timestamp: new Date().toLocaleTimeString(),
        badge: 'Sovereign Halt ⛔'
      }
    ]);
  };

  return (
    <section id="simulator" className="py-20 border-b border-line dark:border-line-dark bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-line dark:border-line-dark bg-neutral-100 dark:bg-neutral-800 text-xs font-mono uppercase tracking-wider text-ink dark:text-ink-light mb-3">
            <Terminal className="w-3.5 h-3.5 text-reese-green" />
            Interactive Hardware Cockpit
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-ink dark:text-white">
            Simulate a Live 24/7 Sales Cycle
          </h2>
          <p className="text-base text-ink-soft dark:text-ink-light/80 mt-2">
            Experience how the seven autonomous agents process a real lead end-to-end. Watch the workflow halt at Agent 06 until you give the green light.
          </p>
        </div>

        <div className="border border-line dark:border-line-dark rounded-xl bg-canvas dark:bg-neutral-950 overflow-hidden shadow-card">
          <div className="p-4 sm:p-6 border-b border-line dark:border-line-dark bg-white dark:bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-mute">
                Select Test Scenario:
              </span>
              <div className="flex flex-wrap gap-2">
                {DEMO_SCENARIOS.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      if (!isRunning) {
                        setSelectedScenario(sc);
                        handleReset();
                      }
                    }}
                    disabled={isRunning}
                    aria-pressed={selectedScenario.id === sc.id}
                    className={`text-xs font-medium px-3 py-1.5 rounded border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white active:scale-[0.98] ${
                      selectedScenario.id === sc.id
                        ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink shadow-sm'
                        : 'border-line dark:border-line-dark bg-canvas dark:bg-neutral-800 text-ink dark:text-ink-light hover:border-neutral-400'
                    } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {sc.name} ({sc.dealSize})
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {!isRunning && currentStep === 0 ? (
                <button
                  onClick={handleStart}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-reese-green text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-reese-green-dk active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-reese-green focus-visible:ring-offset-2 transition-all shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Trigger 7-Agent Loop
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-line dark:border-line-dark bg-white dark:bg-neutral-800 text-ink dark:text-ink-light font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-700 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Loop
                </button>
              )}
            </div>
          </div>

          <div className="px-6 py-3 bg-neutral-50 dark:bg-neutral-900/60 border-b border-line-soft dark:border-line-dark flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-4">
              <span>LEAD: <strong className="text-ink dark:text-white">{selectedScenario.contact.name}</strong></span>
              <span className="hidden sm:inline">&middot;</span>
              <span className="hidden sm:inline">ORG: <strong className="text-ink dark:text-white">{selectedScenario.company}</strong></span>
              <span>&middot;</span>
              <span>DEAL: <strong className="text-reese-green">{selectedScenario.dealSize}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                {selectedScenario.channel}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                {selectedScenario.intent}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {SALES_AGENTS.map((agent, i) => {
                const stepNum = i + 1;
                const isAgentActive = currentStep === stepNum;
                const isAgentPassed = currentStep > stepNum || dealWon;
                const isAwaitingHuman = stepNum === 6 && awaitingApproval;

                return (
                  <div
                    key={agent.id}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      getStepCardClass(isAwaitingHuman, isAgentActive, isAgentPassed)
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-ink-mute">
                        {agent.number}
                      </span>
                      {renderStepStatusIcon(isAwaitingHuman, isAgentActive, isAgentPassed)}
                    </div>
                    <div className="text-xs font-semibold text-ink dark:text-white truncate">
                      {agent.title.split('&')[0]}
                    </div>
                    <div className="text-[10px] font-mono text-ink-mute uppercase tracking-tight mt-0.5">
                      {agent.isHuman ? 'YOU' : 'AI CORE'}
                    </div>
                  </div>
                );
              })}
            </div>

            {awaitingApproval && !dealApproved && (
              <div className="mb-8 p-6 rounded-xl border-2 border-reese-amber bg-amber-50/80 dark:bg-amber-950/30 backdrop-blur-sm shadow-card animate-fadeIn">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-reese-amber text-white rounded-lg shadow-sm">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                          AGENT 06 · HUMAN SIGN-OFF REQUIRED
                        </span>
                        <span className="text-[10px] font-mono bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 px-2 py-0.5 rounded font-semibold">
                          SOVEREIGN GUARD
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-ink dark:text-white mt-1">
                        Approve Custom Enterprise Agreement for {selectedScenario.company}?
                      </h4>
                      <p className="text-xs text-ink-soft dark:text-ink-light/80 mt-1 max-w-2xl">
                        Agent 04 and Agent 05 prepared an enterprise package for <strong>{selectedScenario.contact.name}</strong> ({selectedScenario.dealSize}). Hardware security policy requires executive approval before Agent 07 mints the Stripe billing record and locks the deal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                      onClick={handleApproveDeal}
                      className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-reese-green text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-reese-green-dk active:scale-[0.98] transition-all shadow-md"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Approve Proposal ({selectedScenario.dealSize})
                    </button>
                    <button
                      onClick={handleRejectDeal}
                      className="px-4 py-3 rounded border border-line dark:border-line-dark text-xs font-mono uppercase text-ink-mute hover:text-red-600 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            )}

            {dealRejected && (
              <div className="mb-8 p-6 rounded-xl border border-red-300 dark:border-red-900 bg-red-50/70 dark:bg-red-950/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600 text-white rounded-lg">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink dark:text-white">
                      Pipeline Halted by Sovereign Human Guard
                    </h4>
                    <p className="text-xs text-ink-mute font-mono mt-0.5">
                      Enterprise terms rejected at Agent 06 checkpoint &middot; Zero outbound webhooks fired &middot; Reset available
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-mono uppercase tracking-wider font-semibold px-3 py-1.5 rounded border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 transition-all"
                >
                  Reset Simulator &rarr;
                </button>
              </div>
            )}

            {dealWon && (
              <div className="mb-8 p-6 rounded-xl border border-reese-green bg-emerald-50/70 dark:bg-emerald-950/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-reese-green text-white rounded-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink dark:text-white">
                      Pipeline Cycle Completed · Deal Won ($ {selectedScenario.dealSize})
                    </h4>
                    <p className="text-xs text-ink-mute font-mono mt-0.5">
                      HubSpot updated &middot; Stripe subscription active &middot; Slack notified in 1.4s &middot; Zero manual administrative work
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleStart}
                  className="text-xs font-mono uppercase tracking-wider font-semibold px-3 py-1.5 rounded border border-reese-green text-reese-green-dk dark:text-reese-green hover:bg-reese-green hover:text-white transition-all"
                >
                  Run Another Lead &rarr;
                </button>
              </div>
            )}

            <div className="bg-neutral-900 text-neutral-100 rounded-lg p-4 font-mono text-xs overflow-hidden border border-neutral-800 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 font-mono text-neutral-300">MCP Real-Time Event Bus (Local IPC)</span>
                </div>
                <span>STATUS: {getSimulatorStatusText(isRunning, dealWon, dealRejected)}</span>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
                {events.length === 0 ? (
                  <div className="text-neutral-500 py-6 text-center italic">
                    Press "Trigger 7-Agent Loop" above to watch live execution telemetry...
                  </div>
                ) : (
                  events.map((evt, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[11px] leading-relaxed animate-fadeIn">
                      <span className="text-neutral-500 select-none">[{evt.timestamp}]</span>
                      <span className="text-reese-green font-semibold select-none">{evt.agentName}:</span>
                      <span className="text-neutral-200 flex-1">{evt.details}</span>
                      {evt.badge && (
                        <span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded select-none">
                          {evt.badge}
                        </span>
                      )}
                    </div>
                  ))
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
