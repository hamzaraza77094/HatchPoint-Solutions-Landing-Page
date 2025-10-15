import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleNavClick = (item) => {
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
              <img src="/Orange.svg" alt="HatchPoint Logo" className="h-8 w-8" />
              <span className="font-quicksand font-medium text-lg"><span className="text-[#F77531]">hatch</span><span className="text-gray-800">Point Solutions</span></span>
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
