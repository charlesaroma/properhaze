import React from 'react';

/**
 * Our Values Section Component
 * 
 * Features:
 * - "Delightfulness" section with image and text
 * - "Diversity in Events" section with text and image
 * - Alternating layout design
 * - Simple, clean design matching UI
 */
const OurValues = () => {
  return (
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-12 text-center">
            Our Values
          </h2>
          
          {/* Delightfulness Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="/images/Our-Values1.png" 
                alt="Delightfulness - Man with confetti" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            {/* Text */}
            <div className="order-1 lg:order-2">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-4">Delightfulness</h3>
                              <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
                  Making the world a delightful place through the celebration of delightful people.
                </p>
            </div>
          </div>
          
          {/* Diversity in Events Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-4">Diversity in Events</h3>
                              <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
                  Encouraging celebrations of a diverse range of events to cater to different cultures and interests.
                </p>
            </div>
            
            {/* Image */}
            <div>
              <img 
                src="/images/Our-Values2.png" 
                alt="Diversity in Events - Performer on stage" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;