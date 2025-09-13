import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { services } from '../data/services';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Proven methodologies that deliver transformational results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
};

const ServiceCard = ({ service, index, onClick }) => {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className={`${service.bgColor} ${service.borderColor} border rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-opacity-40 group-hover:shadow-lg group-hover:shadow-blue-500/10`}>
        <div className="flex items-start space-x-6">
          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-display font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" aria-hidden="true" />
            </div>
            
            <p className="text-cyan-400 font-medium text-sm mb-4">{service.subtitle}</p>
            
            <p className="text-slate-300 mb-6 leading-relaxed font-light">
              {service.description}
            </p>
            
            <div className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">
              Click to learn more →
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
