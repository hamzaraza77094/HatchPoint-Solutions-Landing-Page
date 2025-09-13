import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const Vision = () => {
  return (
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
            The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hatchpoint</span> Difference
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto font-light">
            Without a clear strategy and disciplined execution, organizations risk falling behind in markets that demand constant innovation and measurable results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">34+ Years Experience</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Digital leadership in global energy and oil & gas industries with unmatched expertise in building, scaling, and monetizing digital businesses.
              </p>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Consistently driving 20%+ annual growth through AI, digital platforms, and industrial innovation with pragmatic, outcome-driven approaches.
              </p>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Knowledge Transfer</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We partner with you to transfer knowledge and build capabilities that endure long after the project is complete.
              </p>
            </motion.div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
              What makes Hatchpoint different is simple: we've done it before.
            </h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              We know how to take strategies off the page and embed them into operations, align digital with growth, and turn investments into measurable ROI. 
              <span className="text-cyan-400 font-medium"> Most importantly, we partner with you to transfer knowledge and build capabilities that endure long after the project is complete.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
