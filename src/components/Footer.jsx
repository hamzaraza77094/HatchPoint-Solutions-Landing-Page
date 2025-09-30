import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    { label: 'Our Story', href: 'vision' },
    { label: 'Framework', href: 'framework' },
    { label: 'Services', href: 'services' },
    { label: 'Contact', href: 'contact' }
  ];

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
            <span className="font-quicksand font-medium text-xl"><span className="text-[#F77531]">hatch</span><span className="text-gray-800">Point Solutions</span></span>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Incubating generational knowledge systems to benefit people, communities, and the future.
          </p>
          
          <nav className="flex justify-center space-x-8 mb-8" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.href}`} 
                className="text-gray-600 hover:text-[#F77531] transition-colors duration-200 text-sm font-medium"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm font-light">
              © 2025 hatchPoint Solutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
