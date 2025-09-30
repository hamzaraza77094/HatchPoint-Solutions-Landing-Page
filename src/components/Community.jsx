import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Building, DollarSign } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Community = () => {
  const scrollToServices = useScrollToSection('services');
  const abcFramework = [
    {
      id: 'adopt',
      icon: Zap,
      title: "Adopt",
      subtitle: "Proven tools with AI-powered insights",
      description: "Implement proven digital tools that deliver quick wins and accelerate impact. We leverage proprietary AI tools to provide unique insights, ensuring adoption of solutions strategically aligned with your specific needs.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 'build',
      icon: Building,
      title: "Build",
      subtitle: "AI-guided bespoke solutions",
      description: "Develop differentiated solutions that strengthen your unique competitive advantage. Our AI-driven insights guide the creation of custom capabilities, helping identify and capitalize on opportunities that truly set you apart.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 'commercialize',
      icon: DollarSign,
      title: "Commercialize",
      subtitle: "AI-identified revenue opportunities",
      description: "Package your digital capabilities into new services, products, or revenue streams. Leverage AI insights to identify and maximize commercial opportunities, turning internal initiatives into multi-million-dollar businesses.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    }
  ];

  return (
    <section id="framework" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-semibold text-gray-800 mb-6">
            The <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">ABC</span> of Your Digital Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Digital transformation can feel overwhelming — too many tools, too many trends, too many directions. 
            That's why we use the <span className="font-medium text-gray-700">ABC framework, enhanced by AI-driven insights</span>, to help you move with clarity, confidence, and strategic precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {abcFramework.map((item, index) => (
            <ABCCard key={item.id} item={item} index={index} scrollToServices={scrollToServices} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl md:text-3xl font-quicksand font-semibold text-gray-800 mb-6">
              This isn't theory — it's proven, AI-enhanced methodology.
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We have turned internal initiatives into multi-million-dollar businesses by following this exact path. 
              The ABC framework, <span className="text-orange-600 font-medium">powered by AI intelligence</span>, helps you move with clarity and confidence, 
              ensuring every step of your digital journey builds towards measurable value and maximizes your commercial success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ABCCard = ({ item, index, scrollToServices }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className={`${item.bgColor} backdrop-blur-sm border ${item.borderColor} bg-white rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-orange-500/40 shadow-sm group-hover:shadow-xl group-hover:shadow-orange-500/10`}>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
            <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-quicksand font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed font-light">{item.description}</p>
        
        <button 
          onClick={scrollToServices}
          className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 group shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          aria-label={`Learn more about ${item.title}`}
        >
          <span>Learn More</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
};

export default Community;
