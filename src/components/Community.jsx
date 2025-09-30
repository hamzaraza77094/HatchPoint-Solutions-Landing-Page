import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Building, DollarSign } from 'lucide-react';

const Community = () => {
  const abcFramework = [
    {
      id: 'adopt',
      icon: Zap,
      title: "Adopt",
      subtitle: "Proven digital tools for quick wins",
      description: "Adopt proven digital tools that deliver quick wins and accelerate impact. Start with solutions that have demonstrated success in similar environments.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 'build',
      icon: Building,
      title: "Build",
      subtitle: "Differentiated competitive advantage",
      description: "Build differentiated solutions that strengthen your unique competitive advantage. Create custom capabilities that set you apart from competitors.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 'commercialize',
      icon: DollarSign,
      title: "Commercialize",
      subtitle: "New revenue streams",
      description: "Commercialize your digital capabilities by packaging them into new services, products, or revenue streams. Turn internal initiatives into multi-million-dollar businesses.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    }
  ];

  return (
    <section id="abc-framework" className="relative py-32 bg-gray-50">
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
            That's why we break it down into the ABC framework to help you move with clarity and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {abcFramework.map((item, index) => (
            <ABCCard key={item.id} item={item} index={index} />
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
              This isn't theory — it's lived experience.
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We have turned internal initiatives into multi-million-dollar businesses by following this exact path. 
              The ABC framework helps you move with clarity and confidence, ensuring every step of your digital journey 
              builds towards <span className="text-orange-600 font-medium">measurable value</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ABCCard = ({ item, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className={`${item.bgColor} backdrop-blur-sm border ${item.borderColor} bg-white rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-opacity-60 shadow-sm group-hover:shadow-md`}>
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
          className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 group shadow-sm"
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
