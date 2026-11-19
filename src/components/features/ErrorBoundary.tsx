import { Component, type ErrorInfo, type ReactNode } from 'react';
interface ErrorBoundaryProps { children: ReactNode }
interface ErrorBoundaryState { failed: boolean }
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { failed: false };
  static getDerivedStateFromError(): ErrorBoundaryState { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Portfolio rendering error', error, info); }
  render() {
    if (this.state.failed) return <div className="page-shell py-20"><h1 className="text-2xl font-semibold">Unable to display this section.</h1><p className="mt-4 text-muted-foreground">Reload the page, or contact Abhinav directly.</p><a className="quiet-link mt-4 text-primary" href="mailto:abhinavpadige06@gmail.com">abhinavpadige06@gmail.com</a></div>;
    return this.props.children;
  }
}
