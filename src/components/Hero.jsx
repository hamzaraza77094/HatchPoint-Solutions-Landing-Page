import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Hero = () => {
  const scrollToServices = useScrollToSection('services');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo & Title */}
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/Orange.svg" 
              alt="HatchPoint Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-quicksand font-medium leading-tight">
                <span className="text-[#F77531]">hatch</span><span className="text-[#7D7D7D]">POINT</span>
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-quicksand font-medium text-[#7D7D7D] tracking-wider mt-1">
                SOLUTIONS
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-orange-500 font-medium">
              "Turning Experience into Your Competitive Advantage"
            </span>
            <br />
            In today's environment, digital is not just a tool — it is the foundation of resilience, efficiency, and new revenue creation.
          </motion.p>

          <motion.div 
            className="flex justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="group bg-gradient-to-r from-[#F77531] to-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center space-x-3 shadow-lg shadow-orange-500/30"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToServices}
              aria-label="Explore our services"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
          onClick={scrollToServices}
          aria-label="Scroll to services section"
        >
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
