import React from 'react';
import { motion } from 'framer-motion';

/**
 * Events Section Component
 * 
 * Features:
 * - "Events at Properhaze" title and description
 * - Two numbered features with large numbers
 * - Simple, clean design matching UI
 */
const Events = () => {
  return (
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-6 text-center">
            Events at Properhaze
          </h2>
          
          {/* Description */}
          <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed mb-8 text-center max-w-3xl mx-auto text-justify">
            We believe in celebrating event-makers! Our platform features a database of internationally 
            recognized public holidays and events, complete with descriptions and images.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
                         {/* Feature 1 */}
             <div className="text-center">
               <div className="text-6xl sm:text-8xl font-bold text-[#B8A050] mb-4">1</div>
               <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-4">On the homepage</h3>
               <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
                 View events on their respective days via the homepage and decide who to celebrate as the 
                 day-maker in regards to that event e.g mother's Day, day-maker is the person who mother's you.
               </p>
             </div>
            
                         {/* Feature 2 */}
             <div className="text-center">
               <div className="text-6xl sm:text-8xl font-bold text-[#B8A050] mb-4">2</div>
               <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-4">On Payment page</h3>
               <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
                 Attach events to the confetti you intend to dispatch, as a reason for celebrating someone by either selecting an 
                 event listed that day or create a custom event that holds special meaning to you and the 
                 person you're buzzing.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;