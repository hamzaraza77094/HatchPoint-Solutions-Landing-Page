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
            <div className="h-full bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-quicksand font-semibold text-gray-800">
                      {service.title}
                    </h2>
                    <p className="text-orange-500 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                  <div className="max-w-4xl mx-auto">
                  <div className="text-gray-600 leading-relaxed space-y-6">
                    {service.detailedDescription?.map((paragraph, index) => {
                      // Check if paragraph contains bullet points
                      if (paragraph.startsWith('•')) {
                        return (
                          <div key={index} className="ml-6 border-l-2 border-gray-300 pl-4">
                            <p className="text-lg leading-relaxed">
                              <span className="text-orange-500 font-semibold">•</span>
                              <span className="ml-2">{paragraph.substring(1).trim()}</span>
                            </p>
                          </div>
                        );
                      }
                      
                      // Check for key phrases to bold and format
                      const formattedParagraph = paragraph
                        .replace(/\b(At Hatchpoint Solutions|Hatchpoint Solutions)\b/g, '<strong class="text-gray-900 font-bold">$1</strong>')
                        .replace(/\b(Digital transformation|Technology|Strategy)\b/g, '<strong class="text-gray-800 font-semibold">$1</strong>')
                        .replace(/\b(Organizational Readiness|Business Readiness|Technology Readiness)\b/g, '<strong class="text-orange-600 font-semibold">$1</strong>')
                        .replace(/\b(Deep Industry Experience|20%\+|400\+ person|multi-million-dollar)\b/g, '<span class="text-orange-600 font-bold">$1</span>')
                        .replace(/\b(execution gap|digital on paper|ABC framework)\b/g, '<em class="text-orange-600 font-medium italic">$1</em>')
                        .replace(/\b(leadership alignment|cultural adaptability|workforce capability|clarity of vision|operating models|financial commitment|infrastructure|data maturity|ability to scale)\b/g, '<span class="text-gray-700 font-medium">$1</span>');
                      
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
              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      scrollToContact();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-medium transition-all duration-200 shadow-md shadow-orange-500/30"
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
