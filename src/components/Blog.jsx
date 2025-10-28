import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, FileText, Share2, ArrowRight } from 'lucide-react';
import { whitepapers } from '../data/whitepapers';

// Preload WhitePaperDetail component for faster navigation
const preloadWhitePaperDetail = () => {
  import('./WhitePaperDetail');
};

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-16"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <img src="/Orange.svg" alt="Hatchpoint Logo" className="w-12 h-12" />
          </motion.div>
          
          <h1 className="font-quicksand text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            The <span className="text-[#F77531]">Hatchpoint</span> Journal
          </h1>
          
          <p className="font-quicksand text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of in-depth analyses, case studies, and thought leadership on digital transformation,
            process optimization, and industrial innovation.
          </p>
        </div>
      </motion.div>

      {/* White Papers Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {whitepapers.map((paper) => (
            <motion.div
              key={paper.id}
              variants={itemVariants}
              className="group"
            >
              <Link to={`/blog/${paper.slug}`} className="block" onMouseEnter={preloadWhitePaperDetail}>
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#F77531]/10 text-[#F77531]">
                    {paper.category}
                  </span>
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const url = `${window.location.origin}/blog/${paper.slug}`;
                      if (navigator.share) {
                        navigator.share({
                          title: paper.title,
                          text: paper.excerpt,
                          url: url,
                        }).catch(err => console.log('Error sharing:', err));
                      } else {
                        navigator.clipboard.writeText(url);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-5 h-5 text-gray-600 hover:text-[#F77531]" />
                  </motion.button>
                </div>

                {/* Title and Subtitle */}
                <h2 className="font-quicksand text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F77531] transition-colors duration-300">
                  {paper.title}
                </h2>
                
                <p className="font-quicksand text-lg text-gray-700 mb-6">
                  {paper.subtitle}
                </p>

                {/* Excerpt */}
                <p className="font-quicksand text-gray-600 mb-6 flex-grow leading-relaxed">
                  {paper.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{paper.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                  {paper.tags.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                      +{paper.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F77531] text-white font-medium hover:bg-[#E66520] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Blog;

