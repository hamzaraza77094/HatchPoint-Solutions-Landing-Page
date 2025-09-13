import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const ServiceModal = ({ isOpen, onClose, service }) => {
  const scrollToContact = useScrollToSection('contact');
  
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="h-full bg-slate-900 rounded-3xl border border-slate-700/50 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-semibold text-white">
                      {service.title}
                    </h2>
                    <p className="text-cyan-400 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto">
                  <div className="text-slate-300 leading-relaxed space-y-6">
                    {service.detailedDescription?.map((paragraph, index) => {
                      // Check if paragraph contains bullet points
                      if (paragraph.startsWith('•')) {
                        return (
                          <div key={index} className="ml-6 border-l-2 border-slate-700 pl-4">
                            <p className="text-lg leading-relaxed">
                              <span className="text-cyan-400 font-semibold">•</span>
                              <span className="ml-2">{paragraph.substring(1).trim()}</span>
                            </p>
                          </div>
                        );
                      }
                      
                      // Check for key phrases to bold and format
                      const formattedParagraph = paragraph
                        .replace(/\b(At Hatchpoint Solutions|Hatchpoint Solutions)\b/g, '<strong class="text-white font-bold">$1</strong>')
                        .replace(/\b(Digital transformation|Technology|Strategy)\b/g, '<strong class="text-white font-semibold">$1</strong>')
                        .replace(/\b(Organizational Readiness|Business Readiness|Technology Readiness)\b/g, '<strong class="text-cyan-400 font-semibold">$1</strong>')
                        .replace(/\b(34\+ years|20%\+|400\+ person|multi-million-dollar)\b/g, '<span class="text-cyan-400 font-bold">$1</span>')
                        .replace(/\b(execution gap|digital on paper|ABC framework)\b/g, '<em class="text-cyan-400 font-medium italic">$1</em>')
                        .replace(/\b(leadership alignment|cultural adaptability|workforce capability|clarity of vision|operating models|financial commitment|infrastructure|data maturity|ability to scale)\b/g, '<span class="text-slate-200 font-medium">$1</span>');
                      
                      return (
                        <p 
                          key={index} 
                          className="text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-700/50">
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      scrollToContact();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-medium transition-all duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
