import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import './App.css';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Vision = lazy(() => import('./components/Vision'));
const Community = lazy(() => import('./components/Community'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg animate-pulse"></div>
      <p className="text-slate-400 text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
          <Hero />
          <Services />
          <Vision />
          <Community />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App