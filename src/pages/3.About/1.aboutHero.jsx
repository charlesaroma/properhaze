import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galaxy Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/Galaxy.png" 
          alt="Galaxy Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Welcome Text */}
          <motion.div className="text-left" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#F0E68C] mb-4">
              Welcome to
            </h1>
            
            {/* Platform Name */}
            <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}>
              Properhaze
            </motion.h2>
            
            {/* Platform Description */}
            <motion.p className="text-base sm:text-normal md:text-lg text-white leading-relaxed max-w-3xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
              Properhaze is a social celebration platform where individuals can recognize and celebrate 
              others who bring delight to their lives. Our mission is to spread delightfulness and 
              foster a culture of celebration, one buzz at a time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;