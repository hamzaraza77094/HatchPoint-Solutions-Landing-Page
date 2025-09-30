import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Hero = () => {
  const scrollToNextSection = useScrollToSection('vision');

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo & Title */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 md:gap-6 mb-12"
          >
            <motion.img 
              src="/Orange.svg" 
              alt="HatchPoint Logo" 
              className="h-24 md:h-28 lg:h-32 w-auto"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="flex flex-col items-start">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-quicksand font-medium leading-tight">
                <span className="text-[#F77531]">hatch</span><span className="text-[#7D7D7D]">POINT</span>
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-quicksand font-medium text-[#7D7D7D] tracking-wider mt-1">
                SOLUTIONS
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            <span className="text-orange-500 font-medium">
              "Turning Experience into Your Competitive Advantage"
            </span>
            <br />
            In today's environment, digital is not just a tool — it is the foundation of resilience, efficiency, and new revenue creation.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center mb-12"
          >
            <motion.button 
              className="group relative bg-gradient-to-r from-[#F77531] to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center space-x-3 shadow-lg shadow-orange-500/30 overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                boxShadow: "0 20px 40px rgba(247, 117, 49, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNextSection}
              aria-label="Explore more"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
          onClick={scrollToNextSection}
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
