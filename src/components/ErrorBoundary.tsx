import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Aegis-QA] Error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[320px] m-6 p-8 rounded-xl border border-red-300 dark:border-red-900 bg-red-50/70 dark:bg-red-950/30 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-ink dark:text-white mb-1">
            Application Component Interrupted
          </h3>
          <p className="text-xs text-ink-soft dark:text-ink-light/80 max-w-md mb-6 leading-relaxed">
            A runtime exception occurred in the agent telemetry interface. The sovereign error boundary caught the fault to prevent appliance crash.
          </p>
          {this.state.error && (
            <pre className="text-[11px] font-mono text-red-700 dark:text-red-300 bg-white/80 dark:bg-neutral-900 p-3 rounded border border-red-200 dark:border-red-800 max-w-lg mb-6 overflow-x-auto text-left w-full">
              {this.state.error.message}
            </pre>
          )}
          <button
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-ink text-white dark:bg-white dark:text-ink font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reload Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
