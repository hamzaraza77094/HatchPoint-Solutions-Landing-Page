import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Vision = lazy(() => import('./components/Vision'));
const Community = lazy(() => import('./components/Community'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Blog = lazy(() => import('./components/Blog'));
const WhitePaperDetail = lazy(() => import('./components/WhitePaperDetail'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <img src="/Orange.svg" alt="Hatchpoint Logo" className="w-16 h-16 animate-pulse" />
      <p className="text-gray-800 text-base font-medium">Loading...</p>
    </div>
  </div>
);

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Vision />
    <Community />
    <Services />
    <Contact />
  </>
);

function App() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<WhitePaperDetail />} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App