import React, { useEffect } from 'react';
import { X, ExternalLink, Video } from 'lucide-react';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-6xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Hyperframes Video Demo"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sovereign-green animate-pulse" />
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-sovereign-green" />
              <span className="font-semibold text-sm text-white tracking-tight">
                Sovereign Sales OS — Video Demo
              </span>
            </div>
            <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
              Hyperframes HTML5 Engine
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/videodemo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
              title="Open full standalone player"
            >
              <span>Full Window</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Video Player Body */}
        <div className="relative w-full aspect-video bg-black flex-1 overflow-hidden">
          <iframe
            src="/videodemo.html"
            title="Sovereign Sales OS Hyperframes Video Demo"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sovereign-green font-medium">100% Client-Side Video:</span>
            <span>Deterministic HTML/CSS/Canvas &middot; No Cloud Rendering API Required</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/videodemo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sovereign-green hover:underline flex items-center gap-1"
            >
              <span>Open Direct Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
