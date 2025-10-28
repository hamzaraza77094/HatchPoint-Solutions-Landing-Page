import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const footerLinks = [
    { label: 'Our Story', href: 'vision', isRoute: false },
    { label: 'Framework', href: 'framework', isRoute: false },
    { label: 'Services', href: 'services', isRoute: false },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Contact', href: 'contact', isRoute: false }
  ];

  const handleNavClick = (href) => {
    if (!isHomePage) {
      window.location.href = `/#${href}`;
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/">
            <div className="flex items-center justify-center space-x-3 mb-8 cursor-pointer">
              <img src="/Orange.svg" alt="Hatchpoint Logo" className="h-10 w-10" />
              <span className="font-quicksand font-medium text-xl"><span className="text-[#F77531]">Hatchpoint</span></span>
            </div>
          </Link>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Incubating generational knowledge systems to benefit people, communities, and the future.
          </p>
          
          <nav className="flex justify-center space-x-8 mb-8" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="text-gray-600 hover:text-[#F77531] transition-colors duration-200 text-sm font-medium"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-600 hover:text-[#F77531] transition-colors duration-200 text-sm font-medium"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm font-light">
              © 2025 <span className="text-orange-600">Hatchpoint</span>. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
