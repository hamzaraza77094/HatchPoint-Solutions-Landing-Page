import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = ['About', 'Services', 'Vision', 'Community', 'Contact'];

  return (
    <footer className="relative py-20 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg">HP</span>
            </div>
            <span className="text-white font-display font-semibold text-xl">HatchPoint Solutions</span>
          </div>
          
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            Incubating generational knowledge systems to benefit people, communities, and the future.
          </p>
          
          <nav className="flex justify-center space-x-8 mb-8" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="border-t border-slate-800/50 pt-8">
            <p className="text-slate-500 text-sm font-light">
              © 2024 HatchPoint Solutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
