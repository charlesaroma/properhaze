import React from 'react';

/**
 * About Hero Section Component
 * 
 * Features:
 * - Galaxy background image
 * - Welcome message and platform description
 * - Simple, clean design matching UI
 */
const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
        <div className="max-w-4xl mx-auto">
          
          {/* Welcome Text */}
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#F0E68C] mb-4">
              Welcome to
            </h1>
            
            {/* Platform Name */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Properhaze
            </h2>
            
            {/* Platform Description */}
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl">
              Properhaze is a social celebration platform where individuals can recognize and celebrate 
              others who bring delight to their lives. Our mission is to spread delightfulness and 
              foster a culture of celebration, one buzz at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;