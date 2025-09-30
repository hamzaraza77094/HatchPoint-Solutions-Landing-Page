import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const navigationItems = ['Services', 'Vision', 'Community', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/Orange.svg" alt="HatchPoint Logo" className="h-8 w-8" />
            <span className="font-quicksand font-medium text-lg"><span className="text-[#F77531]">hatch</span><span className="text-gray-800">Point Solutions</span></span>
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
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
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
