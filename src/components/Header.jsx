import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const navigationItems = ['Services', 'Vision', 'Community', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-mono font-bold text-sm">HP</span>
            </div>
            <span className="text-white font-display font-semibold text-lg">HatchPoint Solutions</span>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navigationItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
