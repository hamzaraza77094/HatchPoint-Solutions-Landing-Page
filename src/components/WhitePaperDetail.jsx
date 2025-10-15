import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { getWhitepaperBySlug, getRelatedWhitepapers } from '../data/whitepapers';

const WhitePaperDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const paper = getWhitepaperBySlug(slug);
  const relatedPapers = getRelatedWhitepapers(slug);

  if (!paper) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">White Paper Not Found</h1>
          <Link to="/blog" className="text-[#F77531] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: paper.title,
          text: paper.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#F77531] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Insights
          </button>
        </motion.div>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#F77531]/10 text-[#F77531]">
            {paper.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          {paper.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-quicksand text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
        >
          {paper.subtitle}
        </motion.p>

        {/* Hero Image */}
        {paper.heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 rounded-xl overflow-hidden"
          >
            <img 
              src={paper.heroImage} 
              alt={paper.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        )}

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6 pb-8 mb-12 border-b border-gray-200"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="font-quicksand">{paper.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="font-quicksand">{paper.readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <BookOpen className="w-5 h-5" />
            <span className="font-quicksand">{paper.sections.length} Sections</span>
          </div>
          <div className="ml-auto">
            <motion.button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-[#F77531] hover:text-[#F77531] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="w-4 h-4" />
              <span className="font-quicksand font-medium">Share</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {paper.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="mb-16"
            >
              {/* Section Title */}
              <h2 className="font-quicksand text-3xl font-bold text-gray-900 mb-6 mt-0">
                {section.title}
              </h2>

              {/* Section with Image (Left or Right) */}
              {section.image && section.imagePosition ? (
                <div>
                  {/* Parse content for special layout */}
                  {(() => {
                    const paragraphs = section.content.split('\n\n');
                    const introParagraphs = [];
                    const bulletParagraphs = [];
                    const conclusionParagraphs = [];
                    let foundBullets = false;
                    let foundConclusion = false;
                    
                    paragraphs.forEach(paragraph => {
                      if (paragraph.includes('•') && !foundBullets) {
                        bulletParagraphs.push(paragraph);
                        foundBullets = true;
                      } else if (foundBullets && !paragraph.includes('•') && !foundConclusion) {
                        conclusionParagraphs.push(paragraph);
                        foundConclusion = true;
                      } else if (!foundBullets) {
                        introParagraphs.push(paragraph);
                      }
                    });
                    
                    return (
                      <>
                        {/* Intro text above image */}
                        <div className="mb-6">
                          {introParagraphs.map((paragraph, pIndex) => (
                            <p key={pIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        
                        {/* Side-by-side layout for bullets and image */}
                        <div className={`flex flex-col ${section.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-6 items-start`}>
                          {/* Image */}
                          <div className="w-full md:w-1/2 flex-shrink-0">
                            <div className="rounded-lg overflow-hidden sticky top-24">
                              <img 
                                src={section.image} 
                                alt={section.title}
                                className="w-full h-auto max-h-[350px] object-contain bg-gray-50 rounded-lg"
                              />
                            </div>
                          </div>
                          
                          {/* Bullet points */}
                          <div className="w-full md:w-1/2 space-y-3">
                            {bulletParagraphs.map((paragraph, pIndex) => {
                              const lines = paragraph.split('\n').filter(line => line.trim());
                              return (
                                <div key={pIndex}>
                                  {lines.map((line, lIndex) => {
                                    const cleanLine = line.trim();
                                    if (cleanLine.startsWith('•')) {
                                      return (
                                        <div key={lIndex} className="flex gap-3 mb-3">
                                          <span className="text-[#F77531] mt-1.5">•</span>
                                          <p className="font-quicksand text-lg text-gray-700 leading-relaxed flex-1 m-0">
                                            {cleanLine.substring(1).trim()}
                                          </p>
                                        </div>
                                      );
                                    } else if (cleanLine) {
                                      return (
                                        <p key={lIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0 mb-3">
                                          {cleanLine}
                                        </p>
                                      );
                                    }
                                    return null;
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Conclusion text below */}
                        <div>
                          {conclusionParagraphs.map((paragraph, pIndex) => (
                            <p key={pIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : section.image ? (
                // Full width image (no positioning specified)
                <div>
                  <div className="mb-8 rounded-lg overflow-hidden">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    {section.content.split('\n\n').map((paragraph, pIndex) => {
                      // Check if paragraph is bold subtitle (starts with **)
                      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                        const text = paragraph.trim().slice(2, -2);
                        return (
                          <h3 key={pIndex} className="font-quicksand text-xl font-bold text-gray-900 text-center mt-8 mb-4">
                            {text}
                          </h3>
                        );
                      }
                        // Check if paragraph contains bold text with **text** format
                        if (paragraph.includes('**') && paragraph.match(/\*\*.*?\*\*/)) {
                          // Special handling for The HatchPoint Approach section
                          if (section.title === 'The HatchPoint Approach') {
                            // Group phases and their bullets together
                            const phases = [];
                            const lines = paragraph.split('\n').filter(line => line.trim());
                            let currentPhase = null;
                            
                            lines.forEach(line => {
                              const cleanLine = line.trim();
                              if (cleanLine.includes('**') && cleanLine.match(/\*\*.*?\*\*/)) {
                                // Save previous phase
                                if (currentPhase) {
                                  phases.push(currentPhase);
                                }
                                // Start new phase
                                const phaseTitle = cleanLine.replace(/\*\*(.*?)\*\*/g, '$1');
                                currentPhase = { title: phaseTitle, bullets: [] };
                              } else if (cleanLine.startsWith('•') && currentPhase) {
                                currentPhase.bullets.push(cleanLine.substring(1).trim());
                              }
                            });
                            
                            // Add last phase
                            if (currentPhase) {
                              phases.push(currentPhase);
                            }
                            
                            return (
                              <div key={pIndex} className="space-y-6">
                                {/* 2-column grid for phase titles */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {phases.map((phase, phaseIndex) => (
                                    <div key={phaseIndex} className="space-y-4">
                                      {/* Phase title */}
                                      <h3 className="font-quicksand text-xl font-bold text-gray-900 text-left">
                                        {phase.title}
                                      </h3>
                                      {/* Bullet points for this phase */}
                                      <div className="space-y-2">
                                        {phase.bullets.map((bullet, bulletIndex) => (
                                          <div key={bulletIndex} className="flex gap-3">
                                            <span className="text-[#F77531] mt-1.5 flex-shrink-0">•</span>
                                            <p className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                                              {bullet}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          } else {
                            // Default bold and center behavior for other sections
                            const processedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                            return (
                              <div key={pIndex} className="font-quicksand text-xl font-bold text-gray-900 text-center mt-8 mb-4" dangerouslySetInnerHTML={{ __html: processedText }} />
                            );
                          }
                        }
                      // Check if paragraph is a list (contains bullet points or numbered items)
                      if (paragraph.includes('•') || paragraph.match(/^\d+\./m)) {
                        const lines = paragraph.split('\n').filter(line => line.trim());
                        return (
                          <div key={pIndex} className="space-y-3">
                            {lines.map((line, lIndex) => {
                              const cleanLine = line.trim();
                              if (cleanLine.startsWith('•')) {
                                return (
                                  <div key={lIndex} className="flex gap-3">
                                    <span className="text-[#F77531] mt-1.5">•</span>
                                    <p className="font-quicksand text-lg text-gray-700 leading-relaxed flex-1 m-0">
                                      {cleanLine.substring(1).trim()}
                                    </p>
                                  </div>
                                );
                              } else if (cleanLine.match(/^\d+\./)) {
                                return (
                                  <p key={lIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0 pl-4">
                                    {cleanLine}
                                  </p>
                                );
                              } else if (cleanLine.endsWith(':')) {
                                return (
                                  <h3 key={lIndex} className="font-quicksand text-xl font-semibold text-gray-900 mt-4 mb-2">
                                    {cleanLine}
                                  </h3>
                                );
                              } else if (cleanLine) {
                                return (
                                  <p key={lIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                                    {cleanLine}
                                  </p>
                                );
                              }
                              return null;
                            })}
                          </div>
                        );
                      } else {
                        return (
                          <p key={pIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                            {paragraph}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
          ) : (
            // No image
            <div className="space-y-6">
              {section.title === 'The HatchPoint Approach' || section.title === 'The Outcomes' ? (
                // Special handling for sections with 2-column layout - process entire content
                (() => {
                  const sections = [];
                  const lines = section.content.split('\n').filter(line => line.trim());
                  let currentSection = null;
                  let introText = '';
                  let conclusionText = '';
                  
                  // Process all lines
                  lines.forEach((line, index) => {
                    const cleanLine = line.trim();
                    
                    if (cleanLine.includes('**') && cleanLine.match(/\*\*.*?\*\*/)) {
                      // Save previous section
                      if (currentSection) {
                        sections.push(currentSection);
                      }
                      // Start new section
                      const sectionTitle = cleanLine.replace(/\*\*(.*?)\*\*/g, '$1');
                      currentSection = { title: sectionTitle, bullets: [] };
                    } else if (cleanLine.startsWith('•') && currentSection) {
                      currentSection.bullets.push(cleanLine.substring(1).trim());
                    } else if (cleanLine && !cleanLine.includes('**') && !cleanLine.startsWith('•')) {
                      // This is regular text - could be intro or conclusion
                      if (!currentSection) {
                        // Before any sections start, this is intro text
                        introText += (introText ? ' ' : '') + cleanLine;
                      } else {
                        // After sections, this is conclusion text
                        conclusionText += (conclusionText ? ' ' : '') + cleanLine;
                      }
                    }
                  });
                  
                  // Add last section
                  if (currentSection) {
                    sections.push(currentSection);
                  }
                  
                  return (
                    <>
                      {/* Intro text */}
                      {introText && (
                        <p className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                          {introText}
                        </p>
                      )}
                      
                      {/* Special diagram for The HatchPoint Approach */}
                      {section.title === 'The HatchPoint Approach' && section.diagram ? (
                        <div className="my-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {section.diagram.phases.map((phase, index) => (
                              <div key={index} className="relative">
                                <div className="bg-white border-2 border-[#F77531] rounded-lg p-4 h-full relative">
                                  {/* Phase Number */}
                                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#F77531] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                    {phase.number}
                                  </div>
                                  
                                  {/* Phase Title */}
                                  <h4 className="font-quicksand text-base font-bold text-gray-900 mb-2 mt-1">
                                    {phase.title}
                                  </h4>
                                  
                                  {/* Phase Description */}
                                  <p className="font-quicksand text-xs text-gray-700 leading-relaxed">
                                    {phase.description}
                                  </p>
                                </div>
                                
                                {/* Arrow between phases - only show on larger screens */}
                                {index < section.diagram.phases.length - 1 && (
                                  <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 12L10 8L6 4" stroke="#F77531" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* 2-column grid for other sections */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {sections.map((sectionItem, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-4">
                              {/* Section title */}
                              <h3 className="font-quicksand text-xl font-bold text-gray-900 text-left">
                                {sectionItem.title}
                              </h3>
                              {/* Bullet points for this section */}
                              <div className="space-y-2">
                                {sectionItem.bullets.map((bullet, bulletIndex) => (
                                  <div key={bulletIndex} className="flex gap-3">
                                    <span className="text-[#F77531] mt-1.5 flex-shrink-0">•</span>
                                    <p className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                                      {bullet}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Conclusion text */}
                      {conclusionText && (
                        <p className="font-quicksand text-lg text-gray-700 leading-relaxed m-0 mt-6">
                          {conclusionText}
                        </p>
                      )}
                    </>
                  );
                })()
              ) : (
                // Default handling for other sections
                section.content.split('\n\n').map((paragraph, pIndex) => {
                  // Check if paragraph is bold subtitle (starts with **)
                  if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    const text = paragraph.trim().slice(2, -2);
                    return (
                      <h3 key={pIndex} className="font-quicksand text-xl font-bold text-gray-900 text-center mt-8 mb-4">
                        {text}
                      </h3>
                    );
                  }
                  // Check if paragraph contains bold text with **text** format
                  if (paragraph.includes('**') && paragraph.match(/\*\*.*?\*\*/)) {
                    // Default bold and center behavior for other sections
                    const processedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return (
                      <div key={pIndex} className="font-quicksand text-xl font-bold text-gray-900 text-center mt-8 mb-4" dangerouslySetInnerHTML={{ __html: processedText }} />
                    );
                  }
                  // Check if paragraph is a list (contains bullet points or numbered items)
                  if (paragraph.includes('•') || paragraph.match(/^\d+\./m)) {
                    const lines = paragraph.split('\n').filter(line => line.trim());
                    return (
                      <div key={pIndex} className="space-y-3">
                        {lines.map((line, lIndex) => {
                          const cleanLine = line.trim();
                          if (cleanLine.startsWith('•')) {
                            return (
                              <div key={lIndex} className="flex gap-3">
                                <span className="text-[#F77531] mt-1.5">•</span>
                                <p className="font-quicksand text-lg text-gray-700 leading-relaxed flex-1 m-0">
                                  {cleanLine.substring(1).trim()}
                                </p>
                              </div>
                            );
                          } else if (cleanLine.match(/^\d+\./)) {
                            return (
                              <p key={lIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0 pl-4">
                                {cleanLine}
                              </p>
                            );
                          } else if (cleanLine.endsWith(':')) {
                            return (
                              <h3 key={lIndex} className="font-quicksand text-xl font-semibold text-gray-900 mt-4 mb-2">
                                {cleanLine}
                              </h3>
                            );
                          } else if (cleanLine) {
                            return (
                              <p key={lIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                                {cleanLine}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    );
                  } else {
                    return (
                      <p key={pIndex} className="font-quicksand text-lg text-gray-700 leading-relaxed m-0">
                        {paragraph}
                      </p>
                    );
                  }
                })
              )}
            </div>
          )}
            </motion.div>
          ))}
        </div>

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-12 mt-12 border-t border-gray-200"
        >
          <h3 className="font-quicksand text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {paper.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Share CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-lg text-center"
        >
          <h3 className="font-quicksand text-2xl font-bold text-gray-900 mb-3">
            Share This White Paper
          </h3>
          <p className="font-quicksand text-gray-600 mb-6">
            Found this helpful? Share it with your colleagues and network
          </p>
          <motion.button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#F77531] text-white font-medium hover:bg-[#E66520] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-5 h-5" />
            Share
          </motion.button>
        </motion.div>
      </article>

      {/* Related White Papers */}
      {relatedPapers.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h3 className="font-quicksand text-3xl font-bold text-gray-900 mb-8">
              Related Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPapers.map((relatedPaper) => (
                <Link
                  key={relatedPaper.id}
                  to={`/blog/${relatedPaper.slug}`}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F77531]/10 text-[#F77531] mb-4">
                      {relatedPaper.category}
                    </span>
                    <h4 className="font-quicksand text-xl font-bold text-gray-900 mb-2 group-hover:text-[#F77531] transition-colors duration-300">
                      {relatedPaper.title}
                    </h4>
                    <p className="font-quicksand text-gray-600 text-sm mb-4">
                      {relatedPaper.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedPaper.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhitePaperDetail;
