import React, { useState, useEffect } from 'react';
import { SALES_AGENTS } from '../data/salesAgents';
import { SalesAgent } from '../types';
import { 
  Layers, 
  FileText, 
  Wrench, 
  Sliders, 
  Maximize2, 
  Minimize2, 
  ShieldCheck, 
  Cpu, 
  Play, 
  Pause, 
  Terminal, 
  CheckCircle2, 
  ChevronRight,
  Server,
  Box,
  Copy,
  Check
} from 'lucide-react';

function getFaceFill(isHuman: boolean, isSelected: boolean): string {
  if (isHuman) return 'url(#greenGrad)';
  if (isSelected) return '#ffffff';
  return '#f9f9f7';
}

function getFaceStroke(isHuman: boolean, isSelected: boolean): string {
  if (isHuman) return '#1f8f3d';
  if (isSelected) return '#161616';
  return '#dcdcd5';
}

function getLeftThicknessFill(isHuman: boolean, isSelected: boolean): string {
  if (isHuman) return '#1f8f3d';
  if (isSelected) return '#e0e0dc';
  return '#ecece6';
}

function getRightThicknessFill(isHuman: boolean, isSelected: boolean): string {
  if (isHuman) return '#166534';
  if (isSelected) return '#cfcfc7';
  return '#deded6';
}

function getBadgeCircleFill(isHuman: boolean, isSelected: boolean): string {
  if (isHuman) return '#ffffff';
  if (isSelected) return '#161616';
  return '#ecece7';
}

function getBadgeTextFill(isHuman: boolean, isSelected: boolean): string {
  if (isHuman) return '#1f8f3d';
  if (isSelected) return '#ffffff';
  return '#76766f';
}

type InspectorTab = 'specs' | 'tools' | 'memory' | 'prompt';

export const IsometricStage: React.FC = () => {
  // View mode: 'software' (100% screen safe modern rack) vs 'cad' (3D isometric CAD view)
  const [viewMode, setViewMode] = useState<'software' | 'cad'>('software');
  const [explosionSpread, setExplosionSpread] = useState<number>(75);
  const [selectedAgent, setSelectedAgent] = useState<SalesAgent>(SALES_AGENTS[0]);
  const [hoveredAgent, setHoveredAgent] = useState<SalesAgent | null>(null);
  const [activeTab, setActiveTab] = useState<InspectorTab>('specs');
  const [isAutoTracing, setIsAutoTracing] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  const activeAgent = hoveredAgent || selectedAgent;
  const spreadFactor = explosionSpread / 50;

  // Auto-trace pipeline timer
  useEffect(() => {
    if (!isAutoTracing) return;

    const interval = setInterval(() => {
      setSelectedAgent((current) => {
        const currentIndex = SALES_AGENTS.findIndex((a) => a.id === current.id);
        const nextIndex = (currentIndex + 1) % SALES_AGENTS.length;
        return SALES_AGENTS[nextIndex];
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isAutoTracing]);

  const handleCopyPrompt = () => {
    if (activeAgent.samplePrompt) {
      navigator.clipboard.writeText(activeAgent.samplePrompt);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="anatomy" className="py-16 sm:py-24 border-b border-line dark:border-line-dark relative bg-canvas dark:bg-canvas-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-mute mb-2.5">
              <span className="w-2 h-2 rounded-full bg-sovereign-green"></span>
              SYSTEM ARCHITECTURE &middot; 7-LAYER STACK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-ink dark:text-white">
              The Seven Layers of Autonomous Sales
            </h2>
            <p className="text-sm sm:text-base text-ink-soft dark:text-ink-light/70 mt-2.5 max-w-2xl leading-relaxed">
              Software layout engineered for flawless execution on desktop and mobile. AI automates high-volume prospecting and qualification, while Layer 06 guarantees 100% human sign-off on closed contracts.
            </p>
          </div>

          {/* Top Controls: View Switcher & Auto-Trace */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="inline-flex items-center bg-white dark:bg-neutral-900 border border-line dark:border-line-dark p-1 rounded-lg shadow-sm">
              <button
                onClick={() => setViewMode('software')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-2 transition-all ${
                  viewMode === 'software'
                    ? 'bg-ink text-white dark:bg-white dark:text-ink shadow-sm font-medium'
                    : 'text-ink-soft dark:text-ink-light hover:text-ink'
                }`}
                aria-pressed={viewMode === 'software'}
              >
                <Server className="w-3.5 h-3.5" />
                <span>Software Rack (Safe)</span>
              </button>
              <button
                onClick={() => setViewMode('cad')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-2 transition-all ${
                  viewMode === 'cad'
                    ? 'bg-ink text-white dark:bg-white dark:text-ink shadow-sm font-medium'
                    : 'text-ink-soft dark:text-ink-light hover:text-ink'
                }`}
                aria-pressed={viewMode === 'cad'}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Projection</span>
              </button>
            </div>

            {/* Auto-Trace Play/Pause */}
            <button
              onClick={() => setIsAutoTracing(!isAutoTracing)}
              className={`px-3 py-2 rounded-lg text-xs font-mono border flex items-center gap-2 transition-all ${
                isAutoTracing
                  ? 'bg-sovereign-green text-white border-sovereign-green shadow-sm'
                  : 'bg-white dark:bg-neutral-900 border-line dark:border-line-dark text-ink-soft dark:text-ink-light hover:text-ink'
              }`}
              title={isAutoTracing ? 'Pause Auto-Trace' : 'Start Auto-Trace through layers'}
            >
              {isAutoTracing ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span className="font-semibold">Tracing Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto-Trace Flow</span>
                </>
              )}
            </button>

            {/* 3D Explosion Slider (Only in CAD view) */}
            {viewMode === 'cad' && (
              <div className="hidden sm:flex items-center gap-3 bg-white dark:bg-neutral-900 border border-line dark:border-line-dark px-3 py-1.5 rounded-lg shadow-sm">
                <Sliders className="w-3.5 h-3.5 text-ink-mute" />
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-ink-mute">{explosionSpread}%</span>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={explosionSpread}
                    onChange={(e) => setExplosionSpread(Number(e.target.value))}
                    className="w-24 h-1 bg-neutral-200 dark:bg-neutral-700 rounded appearance-none cursor-pointer accent-ink dark:accent-white"
                    aria-label="Explosion spread"
                  />
                </div>
                <div className="flex gap-1 pl-1 border-l border-line dark:border-line-dark">
                  <button
                    onClick={() => setExplosionSpread(25)}
                    className="p-1 text-ink-mute hover:text-ink"
                    title="Compact"
                  >
                    <Minimize2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setExplosionSpread(90)}
                    className="p-1 text-ink-mute hover:text-ink"
                    title="Explode"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            VIEW MODE 1: MODERN SOFTWARE SYSTEM RACK (SCREEN-SAFE FOR PC & MOBILE)
            ========================================================================= */}
        {viewMode === 'software' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left 7 Columns: The 7-Layer Modular Software Rack */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-3">
              
              {/* Rack Top Status Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-100 dark:bg-neutral-900 border border-line dark:border-line-dark rounded-lg text-xs font-mono">
                <div className="flex items-center gap-2 text-ink dark:text-ink-light font-medium">
                  <Cpu className="w-4 h-4 text-ink-mute" />
                  <span>LOCAL SOVEREIGN RACK &middot; 7 INTEGRATED BLADES</span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1.5 text-ink-soft dark:text-ink-light">
                    <span className="w-2 h-2 rounded-full bg-ink dark:bg-white"></span>
                    AI
                  </span>
                  <span className="flex items-center gap-1.5 text-sovereign-green font-semibold">
                    <span className="w-2 h-2 rounded-full bg-sovereign-green animate-pulse"></span>
                    Human Sign-Off
                  </span>
                </div>
              </div>

              {/* 7 Modular Layer Cards */}
              <div className="space-y-2.5 relative">
                {/* Connecting Bus Line */}
                <div className="absolute left-[26px] top-4 bottom-4 w-0.5 bg-neutral-200 dark:bg-neutral-800 -z-0 pointer-events-none" />

                {SALES_AGENTS.map((agent) => {
                  const isSelected = activeAgent.id === agent.id;
                  const isHuman = agent.isHuman;

                  return (
                    <div
                      key={agent.id}
                      onClick={() => setSelectedAgent(agent)}
                      onMouseEnter={() => setHoveredAgent(agent)}
                      onMouseLeave={() => setHoveredAgent(null)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedAgent(agent);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Layer ${agent.number}: ${agent.title}. ${agent.controlType}`}
                      aria-pressed={isSelected}
                      className={`relative z-10 w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white ${
                        isSelected
                          ? isHuman
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-sovereign-green shadow-md ring-1 ring-sovereign-green'
                            : 'bg-white dark:bg-neutral-900 border-ink dark:border-white shadow-md ring-1 ring-ink dark:ring-white'
                          : 'bg-white/90 dark:bg-neutral-900/80 border-line dark:border-line-dark hover:border-neutral-400 dark:hover:border-neutral-700 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start sm:items-center justify-between gap-3">
                        
                        {/* Left: Layer Number Badge + Title */}
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Number Badge with LED */}
                          <div
                            className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                              isHuman
                                ? 'bg-sovereign-green text-white shadow-sm'
                                : isSelected
                                ? 'bg-ink text-white dark:bg-white dark:text-ink'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-ink-mute'
                            }`}
                          >
                            {agent.number}
                          </div>

                          {/* Agent Info */}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-sm sm:text-base font-semibold text-ink dark:text-white tracking-tight truncate">
                                {agent.title}
                              </h3>
                              {isHuman && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-sovereign-green-lt text-sovereign-green-dk dark:bg-emerald-950 dark:text-emerald-300 border border-sovereign-green/30">
                                  <ShieldCheck className="w-3 h-3 text-sovereign-green" />
                                  YOU OWN IT
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-ink-mute font-mono truncate mt-0.5">
                              {agent.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Right: Authority Pill & Active Chevron */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded ${
                              isHuman
                                ? 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-medium'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-ink-mute'
                            }`}
                          >
                            {agent.controlType}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              isSelected
                                ? 'text-ink dark:text-white translate-x-0.5'
                                : 'text-neutral-300 dark:text-neutral-700'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Tool Chips Preview */}
                      <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase text-ink-mute mr-1">MCP Tools:</span>
                        {agent.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/60 text-ink-soft dark:text-ink-light"
                          >
                            {tool}
                          </span>
                        ))}
                        {agent.tools.length > 4 && (
                          <span className="text-[10px] font-mono text-ink-mute">
                            +{agent.tools.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Columns: Dedicated Interactive Layer Inspector (Sticky on Desktop) */}
            <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24">
              <div 
                className="w-full bg-white dark:bg-neutral-900 border border-line dark:border-line-dark rounded-xl p-5 sm:p-6 shadow-card"
                aria-live="polite"
              >
                {/* Inspector Header */}
                <div className="flex items-center justify-between pb-4 border-b border-line-soft dark:border-line-dark">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-ink dark:text-ink-light">
                      LAYER {activeAgent.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                        activeAgent.isHuman
                          ? 'bg-sovereign-green-lt text-sovereign-green-dk dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-ink-mute'
                      }`}
                    >
                      {activeAgent.controlType}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-sovereign-green">
                    <span className="w-2 h-2 rounded-full bg-sovereign-green animate-pulse"></span>
                    <span>LIVE TELEMETRY</span>
                  </div>
                </div>

                {/* Agent Title & Role */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-ink dark:text-white tracking-tight flex items-center gap-2">
                    {activeAgent.title}
                    {activeAgent.isHuman && <ShieldCheck className="w-5 h-5 text-sovereign-green" />}
                  </h3>
                  <p className="text-xs text-ink-mute font-mono mt-1">
                    {activeAgent.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-soft dark:text-ink-light/80 mt-3 leading-relaxed">
                  {activeAgent.longDescription}
                </p>

                {/* Tab Navigation */}
                <div className="mt-5 border-b border-line-soft dark:border-line-dark flex gap-1 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('specs')}\
                    className={`pb-2 px-2.5 transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                      activeTab === 'specs'
                        ? 'border-ink text-ink dark:border-white dark:text-white font-medium'
                        : 'border-transparent text-ink-mute hover:text-ink'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('tools')}
                    className={`pb-2 px-2.5 transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                      activeTab === 'tools'
                        ? 'border-ink text-ink dark:border-white dark:text-white font-medium'
                        : 'border-transparent text-ink-mute hover:text-ink'
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Tools ({activeAgent.tools.length})</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('memory')}
                    className={`pb-2 px-2.5 transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                      activeTab === 'memory'
                        ? 'border-ink text-ink dark:border-white dark:text-white font-medium'
                        : 'border-transparent text-ink-mute hover:text-ink'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Memory</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('prompt')}
                    className={`pb-2 px-2.5 transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                      activeTab === 'prompt'
                        ? 'border-ink text-ink dark:border-white dark:text-white font-medium'
                        : 'border-transparent text-ink-mute hover:text-ink'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Prompt</span>
                  </button>
                </div>

                {/* Tab 1: Specs */}
                {activeTab === 'specs' && (
                  <div className="mt-4 space-y-2 text-xs">
                    {activeAgent.specs.map(([label, val]) => (
                      <div
                        key={label}
                        className="flex justify-between items-center py-1.5 px-2.5 rounded bg-neutral-50 dark:bg-neutral-800/50 border border-line-soft dark:border-line-dark"
                      >
                        <span className="text-ink-mute font-mono">{label}</span>
                        <span className="font-mono text-ink dark:text-white font-medium text-right max-w-[60%]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Connected MCP Tools */}
                {activeTab === 'tools' && (
                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] font-mono text-ink-mute">
                      Registered MCP Tools & APIs for this execution layer:
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeAgent.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-mono px-2.5 py-1 rounded border border-line dark:border-line-dark bg-neutral-50 dark:bg-neutral-800 text-ink dark:text-ink-light flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-sovereign-green" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Local Memory Files */}
                {activeTab === 'memory' && (
                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] font-mono text-ink-mute">
                      Sovereign on-disk Markdown files stored on NVMe:
                    </div>
                    <div className="space-y-1.5 pt-1">
                      {activeAgent.files.map((file) => (
                        <div
                          key={file}
                          className="flex items-center justify-between text-xs font-mono p-2 rounded bg-neutral-50 dark:bg-neutral-800 border border-line-soft dark:border-line-dark"
                        >
                          <div className="flex items-center gap-2 text-ink dark:text-ink-light truncate">
                            <FileText className="w-3.5 h-3.5 text-ink-mute shrink-0" />
                            <span className="truncate">{file}</span>
                          </div>
                          <span className="text-[10px] text-ink-mute shrink-0">LOCAL VAULT</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 4: Sample Execution Prompt */}
                {activeTab === 'prompt' && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-mute">
                      <span>Execution prompt template:</span>
                      <button
                        onClick={handleCopyPrompt}
                        className="flex items-center gap-1 text-ink dark:text-white hover:underline"
                      >
                        {copiedPrompt ? <Check className="w-3 h-3 text-sovereign-green" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto border border-neutral-800">
                      <code>{activeAgent.samplePrompt || 'Autonomous trigger based on lead event payload.'}</code>
                    </div>
                  </div>
                )}

                {/* Action CTA */}
                <div className="mt-6 pt-4 border-t border-line-soft dark:border-line-dark flex items-center justify-between gap-3">
                  <button
                    onClick={scrollToSimulator}
                    className="w-full py-2.5 px-4 rounded-lg bg-ink dark:bg-white text-white dark:text-ink text-xs font-mono font-medium flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all shadow-sm"
                  >
                    <span>Simulate Pipeline With This Agent</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            VIEW MODE 2: 3D HARDWARE ISOMETRIC PROJECTION (FOR CAD / 3D DESKTOP DISPLAY)
            ========================================================================= */}
        {viewMode === 'cad' && (
          <div className="relative w-full bg-white dark:bg-neutral-950 border border-line dark:border-line-dark rounded-xl overflow-hidden shadow-card p-6 lg:p-8">
            
            {/* Subtle engineering grid background */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Metadata Bar */}
            <div className="relative z-10 flex flex-wrap justify-between items-center gap-3 text-xs font-mono pb-4 border-b border-line-soft dark:border-line-dark">
              <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 border border-line dark:border-line-dark rounded text-ink dark:text-ink-light flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-ink-mute" />
                <span>FORM: 19.7 &times; 19.7 CM ALUMINUM UNIBODY &middot; 30&deg; ISOMETRIC</span>
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-ink-soft dark:text-ink-light">
                  <span className="w-2 h-2 rounded-full bg-ink dark:bg-white"></span>
                  AI-Executed
                </span>
                <span className="flex items-center gap-1.5 text-sovereign-green font-medium">
                  <span className="w-2 h-2 rounded-full bg-sovereign-green"></span>
                  You Own It
                </span>
              </div>
            </div>

            {/* Split Screen Grid: 3D Isometric Projection (No Overlap) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
              
              {/* Left Column: Isometric SVG Canvas */}
              <div className="lg:col-span-7 xl:col-span-8 flex items-center justify-center w-full min-h-[420px] lg:min-h-[500px]">
                <svg 
                  viewBox="0 0 900 600" 
                  className="w-full h-full max-h-[500px] overflow-visible drop-shadow-md select-none"
                >
                  <defs>
                    <linearGradient id="lidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#ebebea" />
                    </linearGradient>
                    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34c759" />
                      <stop offset="100%" stopColor="#1f8f3d" />
                    </linearGradient>
                  </defs>

                  {/* Vertical MCP Data Bus Spine */}
                  <g className="opacity-40">
                    <line 
                      x1="450" 
                      y1={120 - 7 * (spreadFactor * 16)} 
                      x2="450" 
                      y2="490" 
                      stroke="#2563eb" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                    />
                    <circle cx="450" cy="220" r="4" fill="#2563eb" className="animate-ping" />
                    <circle cx="450" cy="380" r="4" fill="#34c759" className="animate-ping" />
                  </g>

                  {/* Base Enclosure Platform */}
                  <g transform="translate(450, 480)">
                    <polygon 
                      points="-160,0 0,-90 160,0 0,90" 
                      fill="#e5e5df" 
                      stroke="#dcdcd5" 
                      strokeWidth="1.5" 
                      className="dark:fill-neutral-900 dark:stroke-neutral-800"
                    />
                    <polygon 
                      points="-160,0 0,90 0,110 -160,20" 
                      fill="#d0d0c8" 
                      className="dark:fill-neutral-950"
                    />
                    <polygon 
                      points="0,90 160,0 160,20 0,110" 
                      fill="#bebeb6" 
                      className="dark:fill-neutral-900"
                    />
                    <text 
                      x="0" 
                      y="5" 
                      textAnchor="middle" 
                      className="font-mono text-[9px] fill-neutral-500 uppercase tracking-widest pointer-events-none"
                    >
                      SOVEREIGN HARDWARE BASE &middot; LOCAL NVME VAULT
                    </text>
                  </g>

                  {/* Render the 7 Agent Layers from Bottom (07) to Top (01) */}
                  {[...SALES_AGENTS].reverse().map((agent, revIndex) => {
                    const index = SALES_AGENTS.length - 1 - revIndex;
                    const isSelected = activeAgent.id === agent.id;
                    const baseY = 420;
                    const layerSpacing = 38 * spreadFactor;
                    const yPos = baseY - (index * layerSpacing);
                    const isHumanCore = agent.isHuman;

                    return (
                      <g 
                        key={agent.id}
                        transform={`translate(450, ${yPos})`}
                        onClick={() => setSelectedAgent(agent)}
                        onMouseEnter={() => setHoveredAgent(agent)}
                        onMouseLeave={() => setHoveredAgent(null)}
                        tabIndex={0}
                        role="button"
                        aria-label={`Layer ${agent.number}: ${agent.title}`}
                        aria-pressed={isSelected}
                        className="cursor-pointer transition-transform duration-200 outline-none focus:outline-none"
                      >
                        {isSelected && (
                          <polygon 
                            points="-175,0 0,-100 175,0 0,100" 
                            fill="none" 
                            stroke={isHumanCore ? '#34c759' : '#161616'} 
                            strokeWidth="2" 
                            strokeDasharray="6 4"
                            className="animate-pulse"
                          />
                        )}

                        {/* Top Isometric Face */}
                        <polygon 
                          points="-150,0 0,-85 150,0 0,85" 
                          fill={getFaceFill(isHumanCore, isSelected)}
                          stroke={getFaceStroke(isHumanCore, isSelected)} 
                          strokeWidth={isSelected ? '2' : '1.2'}
                          className={!isHumanCore ? 'dark:fill-neutral-900 dark:stroke-neutral-700' : ''}
                        />

                        {/* Front Left Thickness */}
                        <polygon 
                          points="-150,0 0,85 0,97 -150,12" 
                          fill={getLeftThicknessFill(isHumanCore, isSelected)}
                          className={!isHumanCore ? 'dark:fill-neutral-950' : ''}
                        />

                        {/* Front Right Thickness */}
                        <polygon 
                          points="0,85 150,0 150,12 0,97" 
                          fill={getRightThicknessFill(isHumanCore, isSelected)}
                          className={!isHumanCore ? 'dark:fill-neutral-900' : ''}
                        />

                        {/* Layer Label on Face */}
                        <g>
                          <circle 
                            cx="-65" 
                            cy="0" 
                            r="10" 
                            fill={getBadgeCircleFill(isHumanCore, isSelected)} 
                            className={!isHumanCore && !isSelected ? 'dark:fill-neutral-800' : ''}
                          />
                          <text 
                            x="-65" 
                            y="3" 
                            textAnchor="middle" 
                            fill={getBadgeTextFill(isHumanCore, isSelected)} 
                            className="font-mono text-[9px] font-bold pointer-events-none"
                          >
                            {agent.number}
                          </text>

                          <text 
                            x="-45" 
                            y="4" 
                            textAnchor="start" 
                            fill={isHumanCore ? '#ffffff' : '#161616'} 
                            className={`font-sans text-[13px] font-semibold tracking-tight pointer-events-none ${
                              !isHumanCore ? 'dark:fill-white' : ''
                            }`}
                          >
                            {agent.title}
                          </text>

                          {isHumanCore && (
                            <g transform="translate(85, -2)">
                              <rect x="-35" y="-7" width="55" height="14" rx="3" fill="#ffffff" />
                              <text x="-7" y="3" textAnchor="middle" fill="#1f8f3d" className="font-mono text-[8px] font-bold uppercase tracking-wider">
                                YOU OWN IT
                              </text>
                            </g>
                          )}
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Right Column: Layer Inspector */}
              <div className="lg:col-span-5 xl:col-span-4 w-full">
                <div className="w-full bg-white dark:bg-neutral-900 border border-line dark:border-line-dark rounded-xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-line-soft dark:border-line-dark">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-ink dark:text-ink-light">
                      LAYER {activeAgent.number}
                    </span>
                    <span className="text-[10px] font-mono text-sovereign-green font-semibold">
                      INSPECTION
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-ink dark:text-white tracking-tight mt-3">
                    {activeAgent.title}
                  </h3>
                  <p className="text-xs text-ink-mute font-mono mt-0.5">
                    {activeAgent.role}
                  </p>
                  <p className="text-xs text-ink-soft dark:text-ink-light/80 mt-2.5 leading-relaxed">
                    {activeAgent.longDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-line-soft dark:border-line-dark">
                    <div className="text-[10px] font-mono uppercase text-ink-mute mb-1.5">MCP Tools:</div>
                    <div className="flex flex-wrap gap-1">
                      {activeAgent.tools.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Step Indicator Bar */}
        <div className="mt-6 pt-4 border-t border-line-soft dark:border-line-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 flex-1 max-w-lg">
            {SALES_AGENTS.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`h-2.5 flex-1 rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink active:scale-95 ${
                  activeAgent.id === agent.id
                    ? agent.isHuman
                      ? 'bg-sovereign-green'
                      : 'bg-ink dark:bg-white'
                    : 'bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300'
                }`}
                title={`Layer ${agent.number}: ${agent.title}`}
                aria-label={`Select Layer ${agent.number}: ${agent.title}`}
                aria-pressed={activeAgent.id === agent.id}
              />
            ))}
          </div>

          <div className="text-xs font-mono text-ink-mute flex items-center gap-2">
            <span>ACTIVE LAYER: <strong className="text-ink dark:text-white">{activeAgent.number} &middot; {activeAgent.title}</strong></span>
            <span>&middot;</span>
            <span className="text-sovereign-green font-medium">99.4% VERIFIED PIPELINE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
