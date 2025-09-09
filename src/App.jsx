import { motion } from 'framer-motion'
import { ArrowRight, Users, Lightbulb, Briefcase, TrendingUp, ChevronDown, Brain, Target, Zap, Shield, Award, Heart, Sparkles, ArrowUpRight } from 'lucide-react'
import './App.css'

function App() {
  const services = [
    {
      icon: Target,
      title: "Executive Diagnostic & Transformation Roadmap",
      subtitle: "4-6 week structured assessment",
      description: "Quick win engagement that earns trust and opens doors for larger projects. Strategic roadmaps with 3-year investment cases and board-level strategy documents.",
      price: "$150K - $300K",
      duration: "4-6 weeks",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Shield,
      title: "Enterprise Architecture & Platform Modernization", 
      subtitle: "The muscle work once you're in",
      description: "Mapping current vs target IT and business architecture. Creating modernization blueprints for cloud migration, ERP/CRM consolidation, and data platform builds.",
      price: "Custom Pricing",
      duration: "3-12 months",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Zap,
      title: "Product-Led Digital Delivery Pods",
      subtitle: "Cross-functional execution teams",
      description: "Dedicated pods with product leads, engineers, UX, and QA delivering MVPs and digital products. Includes CI/CD pipelines and delivery metrics.",
      price: "Custom Pricing", 
      duration: "Ongoing",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: Brain,
      title: "Culture & Change Leadership",
      subtitle: "Your differentiator",
      description: "Helping leadership teams adapt to new operating models. Change management planning, org design, leadership alignment, and upskilling programs.",
      price: "Custom Pricing",
      duration: "6-18 months", 
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    }
  ]

  const targetAudiences = [
    {
      title: "Young People",
      subtitle: "Seeking Mentorship",
      icon: Users,
      description: "Connect with industry leaders and accelerate your career growth through structured mentorship programs.",
      features: ["1-on-1 Mentorship", "Career Guidance", "Skill Development", "Network Building"]
    },
    {
      title: "Creative People", 
      subtitle: "Showcase Your Ideas",
      icon: Lightbulb,
      description: "Transform your innovative ideas into reality with our platform and expert guidance.",
      features: ["Idea Validation", "Platform Access", "Expert Feedback", "Implementation Support"]
    },
    {
      title: "Senior Executives",
      subtitle: "Find Your Mentees",
      icon: Award,
      description: "Share your wisdom and experience while building the next generation of leaders.",
      features: ["Mentee Matching", "Impact Measurement", "Legacy Building", "Community Access"]
    },
    {
      title: "Investors",
      subtitle: "Believe in the Future",
      icon: TrendingUp,
      description: "Invest in a proven model that creates generational impact and sustainable returns.",
      features: ["Proven Model", "Scalable Impact", "Strong Returns", "Social Impact"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-mono font-bold text-sm">HP</span>
              </div>
              <span className="text-white font-display font-semibold text-lg">HatchPoint Solutions</span>
            </motion.div>
            
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['Services', 'Vision', 'Community', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                HatchPoint
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-pink-400 font-medium">
                Incubate a generational knowledge system
              </span>
              <br />
              to benefit people. People as our customers, our colleagues, stakeholders and communities that we live in.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="group bg-white text-slate-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-100 transition-all duration-200 flex items-center space-x-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="border border-slate-600 text-slate-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-800 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo
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
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-slate-500 text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
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
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              Proven methodologies that deliver transformational results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`${service.bgColor} ${service.borderColor} border rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-opacity-40`}>
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-display font-semibold text-white group-hover:text-pink-400 transition-colors">
                          {service.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-pink-400 transition-colors" />
                      </div>
                      
                      <p className="text-pink-400 font-medium text-sm mb-4">{service.subtitle}</p>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed font-light">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-slate-400">Investment:</span>
                          <span className="text-white font-medium">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-slate-400">Duration:</span>
                          <span className="text-white font-medium">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-8">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto font-light">
              Have a system where we pass information from one generation to the other. 
              Have the next generation to play the role we (senior executives) played but even better.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
              <Heart className="w-16 h-16 text-pink-400 mx-auto mb-8" />
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">Improving lives through the share of knowledge and experience</h3>
              <p className="text-lg text-slate-300 font-light">
                <span className="text-pink-400 font-medium">People are our biggest asset</span> - 
                We believe in the power of mentorship, knowledge transfer, and generational wisdom to create lasting impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="relative py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Community</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              Four distinct groups, one unified vision of generational knowledge transfer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mr-4">
                      <audience.icon className="w-6 h-6 text-pink-400" />
                    </div>
      <div>
                      <h3 className="text-xl font-display font-semibold text-white">{audience.title}</h3>
                      <p className="text-slate-400 text-sm">{audience.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed font-light">{audience.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {audience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 bg-slate-900 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-mono font-bold text-lg">HP</span>
              </div>
              <span className="text-white font-display font-semibold text-xl">HatchPoint Solutions</span>
            </div>
            
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
              Incubating generational knowledge systems to benefit people, communities, and the future.
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              {['About', 'Services', 'Vision', 'Community', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                  {item}
                </a>
              ))}
      </div>
            
            <div className="border-t border-slate-800/50 pt-8">
              <p className="text-slate-500 text-sm font-light">
                © 2024 HatchPoint Solutions. All rights reserved.
        </p>
      </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App