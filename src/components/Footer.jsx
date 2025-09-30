import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = ['About', 'Services', 'Vision', 'Community', 'Contact'];

  return (
    <footer className="relative py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img src="/Orange.svg" alt="HatchPoint Logo" className="h-10 w-10" />
            <span className="text-gray-800 font-quicksand font-medium text-xl">HatchPoint Solutions</span>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Incubating generational knowledge systems to benefit people, communities, and the future.
          </p>
          
          <nav className="flex justify-center space-x-8 mb-8" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm font-light">
              © 2024 HatchPoint Solutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
