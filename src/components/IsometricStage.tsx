import React, { useState } from 'react';
import { SALES_AGENTS } from '../data/salesAgents';
import { SalesAgent } from '../types';
import { Layers, FileText, Wrench, Sliders, Maximize2, Minimize2 } from 'lucide-react';

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

function getStepBarClass(isActive: boolean, isHuman: boolean): string {
  if (!isActive) {
    return 'bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300';
  }
  return isHuman ? 'bg-reese-green' : 'bg-ink dark:bg-white';
}

export const IsometricStage: React.FC = () => {
  const [explosionSpread, setExplosionSpread] = useState<number>(75);
  const [selectedAgent, setSelectedAgent] = useState<SalesAgent>(SALES_AGENTS[0]);
  const [hoveredAgent, setHoveredAgent] = useState<SalesAgent | null>(null);

  const activeAgent = hoveredAgent || selectedAgent;
  const spreadFactor = explosionSpread / 50;

  return (
    <section id="anatomy" className="py-20 border-b border-line dark:border-line-dark relative bg-canvas dark:bg-canvas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-ink-mute mb-2">
              Hardware & Agent Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-ink dark:text-white">
              The Seven Layers of Reese Sales
            </h2>
            <p className="text-base text-ink-soft dark:text-ink-light/70 mt-2 max-w-xl">
              Hover or click any layer to inspect internal tools, memory files, and execution rules. The green core is where your approval is required.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-neutral-900 border border-line dark:border-line-dark p-3 rounded-lg shadow-sm">
            <Sliders className="w-4 h-4 text-ink-mute" />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-ink-soft dark:text-ink-light">Layer Explosion</span>
                <span className="text-ink-mute">{explosionSpread}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={explosionSpread}
                onChange={(e) => setExplosionSpread(Number(e.target.value))}
                className="w-36 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-ink dark:accent-white"
                aria-label="Layer explosion spread"
              />
            </div>
            <div className="flex gap-1 pl-2 border-l border-line dark:border-line-dark">
              <button
                onClick={() => setExplosionSpread(20)}
                title="Compact View"
                className={`p-1.5 rounded text-xs font-mono transition-colors ${
                  explosionSpread < 35 ? 'bg-neutral-200 dark:bg-neutral-800 text-ink dark:text-white' : 'text-ink-mute hover:text-ink'
                }`}
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setExplosionSpread(90)}
                title="Exploded View"
                className={`p-1.5 rounded text-xs font-mono transition-colors ${
                  explosionSpread > 70 ? 'bg-neutral-200 dark:bg-neutral-800 text-ink dark:text-white' : 'text-ink-mute hover:text-ink'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full min-h-[640px] lg:min-h-[720px] bg-white dark:bg-neutral-950 border border-line dark:border-line-dark rounded-xl overflow-hidden shadow-card flex flex-col justify-between p-6 lg:p-10">
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 border border-line dark:border-line-dark rounded text-ink dark:text-ink-light flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-ink-mute" />
                <span>FORM: 19.7 &times; 19.7 CM ALUMINUM UNIBODY</span>
              </span>
              <span className="hidden sm:inline-block text-ink-mute">
                ISOMETRIC ANGLE: 30&deg; / PROJECTION 2.5D
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-ink-soft dark:text-ink-light">
                <span className="w-2 h-2 rounded-full bg-ink dark:bg-white"></span>
                AI-Executed
              </span>
              <span className="flex items-center gap-1.5 text-reese-green font-medium">
                <span className="w-2 h-2 rounded-full bg-reese-green"></span>
                You Own It (Human Sign-Off)
              </span>
            </div>
          </div>

          <div className="relative z-10 my-auto flex items-center justify-center py-10">
            <div className="relative w-full max-w-4xl h-[480px] flex items-center justify-center">
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
                  <linearGradient id="busGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#34c759" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

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
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedAgent(agent);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Layer ${agent.number}: ${agent.title}. ${agent.controlType}.`}
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

                      <polygon 
                        points="-150,0 0,-85 150,0 0,85" 
                        fill={getFaceFill(isHumanCore, isSelected)}
                        stroke={getFaceStroke(isHumanCore, isSelected)} 
                        strokeWidth={isSelected ? '2' : '1.2'}
                        className={`transition-colors duration-150 ${
                          !isHumanCore ? 'dark:fill-neutral-900 dark:stroke-neutral-700' : ''
                        }`}
                      />

                      <polygon 
                        points="-150,0 0,85 0,97 -150,12" 
                        fill={getLeftThicknessFill(isHumanCore, isSelected)}
                        className={!isHumanCore ? 'dark:fill-neutral-950' : ''}
                      />

                      <polygon 
                        points="0,85 150,0 150,12 0,97" 
                        fill={getRightThicknessFill(isHumanCore, isSelected)}
                        className={!isHumanCore ? 'dark:fill-neutral-900' : ''}
                      />

                      <g transform="translate(0, 0)">
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

                      {isSelected && (
                        <g className="pointer-events-none">
                          <polyline 
                            points="150,0 210,0 260,-20" 
                            fill="none" 
                            stroke={isHumanCore ? '#34c759' : '#161616'} 
                            strokeWidth="1.5" 
                            strokeDasharray="3 3"
                            className="dark:stroke-neutral-400"
                          />
                          <circle cx="150" cy="0" r="3" fill={isHumanCore ? '#34c759' : '#161616'} />
                          <circle cx="260" cy="-20" r="3" fill={isHumanCore ? '#34c759' : '#161616'} />
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              <div 
                className="absolute right-2 sm:right-4 lg:right-6 bottom-2 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-72 sm:w-80 max-w-[calc(100vw-2.5rem)] bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-line dark:border-line-dark rounded-xl p-4 sm:p-5 shadow-float pointer-events-auto transition-all z-20"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex items-center justify-between pb-3 border-b border-line-soft dark:border-line-dark">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-ink dark:text-ink-light">
                      LAYER {activeAgent.number}
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                      activeAgent.isHuman 
                        ? 'bg-reese-green-lt text-reese-green-dk font-semibold dark:bg-green-950 dark:text-green-300' 
                        : 'bg-neutral-100 dark:bg-neutral-800 text-ink-mute'
                    }`}>
                      {activeAgent.controlType}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-reese-green animate-pulse"></span>
                </div>

                <div className="mt-3">
                  <h3 className="text-base font-semibold text-ink dark:text-white tracking-tight">
                    {activeAgent.title}
                  </h3>
                  <p className="text-xs text-ink-mute font-mono mt-0.5">
                    {activeAgent.role}
                  </p>
                </div>

                <p className="text-xs text-ink-soft dark:text-ink-light/80 mt-2.5 leading-relaxed">
                  {activeAgent.longDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-line-soft dark:border-line-dark">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-mute mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-ink-mute" />
                    Connected Tools & MCP
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeAgent.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded border border-line-soft dark:border-line-dark bg-canvas-subtle dark:bg-neutral-800 text-ink dark:text-ink-light"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-line-soft dark:border-line-dark">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-mute mb-2 flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-ink-mute" />
                    Local Memory Files
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-ink-soft dark:text-ink-light/70">
                    {activeAgent.files.map((file) => (
                      <span key={file} className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                        {file}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-line-soft dark:border-line-dark text-[11px]">
                  {activeAgent.specs.slice(0, 2).map(([label, val]) => (
                    <div key={label} className="flex justify-between py-0.5">
                      <span className="text-ink-mute">{label}:</span>
                      <span className="font-mono text-ink dark:text-ink-light font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-line-soft dark:border-line-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 flex-1 max-w-lg">
              {SALES_AGENTS.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`h-2.5 flex-1 rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 active:scale-95 ${
                    getStepBarClass(activeAgent.id === agent.id, agent.isHuman)
                  }`}
                  title={`${agent.number} · ${agent.title}`}
                  aria-label={`Select Layer ${agent.number}: ${agent.title}`}
                  aria-pressed={activeAgent.id === agent.id}
                />
              ))}
            </div>

            <div className="text-xs font-mono text-ink-mute flex items-center gap-2">
              <span>ACTIVE LAYER: <strong className="text-ink dark:text-white">{activeAgent.number} · {activeAgent.title}</strong></span>
              <span>&middot;</span>
              <span className="text-reese-green font-medium">99.4% VERIFIED PIPELINE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
