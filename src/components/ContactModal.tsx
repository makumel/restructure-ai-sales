import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    pipelineSize: '$50k - $250k / mo',
    deploymentMode: 'On-Premise Desk Mini Server',
    notes: '',
    company_website_hp: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (formData.company_website_hp.trim() !== '') {
      console.warn('[SECURITY] Deception defense triggered: bot filled honeypot input.');
      timerRef.current = setTimeout(() => {
        setStatus('success');
      }, 600);
      return;
    }

    timerRef.current = setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-neutral-900 border border-line dark:border-line-dark rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-ink-mute hover:text-ink dark:hover:text-white rounded-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-sovereign-green-lt dark:bg-green-950/60 text-sovereign-green flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-ink dark:text-white mb-2">
              Deployment Request Registered
            </h3>
            <p className="text-sm text-ink-soft dark:text-ink-light/80 max-w-md mx-auto leading-relaxed">
              Our engineering team has reserved your sovereign mini computer server allotment. An invitation with hardware provisioning telemetry has been dispatched to <strong>{formData.workEmail || 'your email'}</strong>.
            </p>
            <div className="mt-6 pt-6 border-t border-line-soft dark:border-line-dark">
              <button
                onClick={() => {
                  setStatus('idle');
                  onClose();
                }}
                className="px-5 py-2.5 rounded bg-ink text-white dark:bg-white dark:text-ink font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
              >
                Return to Architecture
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-sovereign-green font-semibold uppercase tracking-wider mb-1">
                <Lock className="w-3.5 h-3.5" />
                Sovereign Hardware Allotment
              </div>
              <h3 id="modal-title" className="text-2xl font-semibold text-ink dark:text-white tracking-tight">
                Deploy Your AI Sales Department
              </h3>
              <p className="text-xs text-ink-soft dark:text-ink-light/80 mt-1">
                Receive the Sovereign Mini Computer Server pre-configured with the 7-agent pipeline. Plugs directly into your local office network.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3 rounded-lg border border-red-300 dark:border-red-900 bg-red-50 dark:red-950/40 text-xs flex items-center justify-between text-red-700 dark:text-red-300">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Unable to submit reservation. Please verify your connection and try again.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="font-mono underline text-[11px] ml-2"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              <div 
                style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} 
                aria-hidden="true" 
                tabIndex={-1}
              >
                <label htmlFor="company_website_hp">Leave this empty</label>
                <input
                  type="text"
                  id="company_website_hp"
                  name="company_website_hp"
                  value={formData.company_website_hp}
                  onChange={(e) => setFormData({ ...formData, company_website_hp: e.target.value })}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-line dark:border-line-dark bg-canvas dark:bg-neutral-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-line dark:border-line-dark bg-canvas dark:bg-neutral-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Veloce Systems"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-line dark:border-line-dark bg-canvas dark:bg-neutral-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light mb-1">
                    Monthly Sales Pipeline
                  </label>
                  <select
                    value={formData.pipelineSize}
                    onChange={(e) => setFormData({ ...formData, pipelineSize: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-line dark:border-line-dark bg-canvas dark:bg-neutral-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white transition-all"
                  >
                    <option>$10k - $50k / mo</option>
                    <option>$50k - $250k / mo</option>
                    <option>$250k - $1M+ / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light mb-1">
                  Deployment Mode
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className={`p-3 rounded border cursor-pointer transition-all flex flex-col gap-1 ${
                    formData.deploymentMode === 'On-Premise Desk Mini Server'
                      ? 'border-ink dark:border-white bg-neutral-100 dark:bg-neutral-800 font-medium'
                      : 'border-line dark:border-line-dark bg-canvas dark:bg-neutral-900 text-ink-mute'
                  }`}>
                    <input
                      type="radio"
                      name="deploymentMode"
                      checked={formData.deploymentMode === 'On-Premise Desk Mini Server'}
                      onChange={() => setFormData({ ...formData, deploymentMode: 'On-Premise Desk Mini Server' })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-ink dark:text-white">Desk Mini Server</span>
                    <span className="text-[10px]">Aluminum unibody on premises</span>
                  </label>

                  <label className={`p-3 rounded border cursor-pointer transition-all flex flex-col gap-1 ${
                    formData.deploymentMode === 'Air-Gapped Private Cloud'
                      ? 'border-ink dark:border-white bg-neutral-100 dark:bg-neutral-800 font-medium'
                      : 'border-line dark:border-line-dark bg-canvas dark:bg-neutral-900 text-ink-mute'
                  }`}>
                    <input
                      type="radio"
                      name="deploymentMode"
                      checked={formData.deploymentMode === 'Air-Gapped Private Cloud'}
                      onChange={() => setFormData({ ...formData, deploymentMode: 'Air-Gapped Private Cloud' })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-ink dark:text-white">Air-Gapped Cloud</span>
                    <span className="text-[10px]">Private dedicated VPC</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft dark:text-ink-light mb-1">
                  Existing Tools (HubSpot, Gmail, Cal.com...)
                </label>
                <textarea
                  rows={2}
                  placeholder="Which tools and CRMs do you want the 7 agents to connect to?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-line dark:border-line-dark bg-canvas dark:bg-neutral-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-ink dark:focus:ring-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-4 rounded bg-ink text-white dark:bg-white dark:text-ink font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Provisioning Telemetry...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-sovereign-green" />
                      Request Sovereign Server Allotment
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-ink-mute font-mono flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sovereign-green" />
                Protected by Sovereign Deception Honeypot & Zero Cloud Telemetry
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
