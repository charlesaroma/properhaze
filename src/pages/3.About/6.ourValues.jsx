import React from 'react';
import { motion } from 'framer-motion';

const OurValues = () => {
  return (
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
          
          {/* Section Header */}
          <motion.h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-12 text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            Our Values
          </motion.h2>
          
          {/* Delightfulness Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: 'easeOut' }}>
              <img 
                src="/images/Our-Values1.png" 
                alt="Delightfulness - Man with confetti" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Text */}
            <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-4">Delightfulness</h3>
                              <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
                  Making the world a delightful place through the celebration of delightful people.
                </p>
            </motion.div>
          </div>
          
          {/* Diversity in Events Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: 'easeOut' }}>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-4">Diversity in Events</h3>
                              <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
                  Encouraging celebrations of a diverse range of events to cater to different cultures and interests.
                </p>
            </motion.div>
            
            {/* Image */}
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}>
              <img 
                src="/images/Our-Values2.png" 
                alt="Diversity in Events - Performer on stage" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;