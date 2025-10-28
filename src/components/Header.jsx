import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Preload Blog component for faster navigation
const preloadBlog = () => {
  import('../components/Blog');
};

// Preload WhitePaperDetail component for faster navigation
const preloadWhitePaperDetail = () => {
  import('../components/WhitePaperDetail');
};

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigationItems = ['Vision', 'Framework', 'Services', 'Contact'];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/#${item.toLowerCase()}`;
    } else {
      // If on home page, just scroll
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white border-b border-gray-200 shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/Orange.svg" alt="Hatchpoint Logo" className="h-8 w-8" />
              <span className="font-quicksand font-medium text-lg"><span className="text-[#F77531]">Hatchpoint</span></span>
            </motion.div>
          </Link>
          
          <motion.div 
            className="hidden md:flex space-x-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navigationItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative text-gray-600 hover:text-[#F77531] transition-colors duration-300 text-sm font-medium group"
                aria-label={`Navigate to ${item} section`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F77531] group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
            
            <Link to="/blog" onMouseEnter={preloadBlog}>
              <motion.button
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  location.pathname.startsWith('/blog')
                    ? 'text-[#F77531]'
                    : 'text-gray-600 hover:text-[#F77531]'
                } group`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#F77531] transition-all duration-300 ${
                    location.pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-600 hover:text-[#F77531] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[#F77531] hover:bg-gray-50 rounded-lg transition-all duration-300 text-base font-medium"
                >
                  {item}
                </motion.button>
              ))}
              
              <Link to="/blog" onMouseEnter={preloadBlog}>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 text-base font-medium ${
                    location.pathname.startsWith('/blog')
                      ? 'text-[#F77531] bg-orange-50'
                      : 'text-gray-600 hover:text-[#F77531] hover:bg-gray-50'
                  }`}
                >
                  Blog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
