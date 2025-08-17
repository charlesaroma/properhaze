import React from 'react';

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
    <section className="py-16 bg-[#FDFBF5]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-[#333333] mb-6 text-center">
            Events at Properhaze
          </h2>
          
          {/* Description */}
          <p className="text-[#666666] text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            We believe in celebrating event-makers! Our platform features a database of internationally 
            recognized public holidays and events, complete with descriptions and images. You can:
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
            {/* Feature 1 */}
            <div className="text-center">
              <div className="text-8xl font-bold text-[#B8A050] mb-4">1</div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">On the homepage</h3>
              <p className="text-[#666666] leading-relaxed">
                View events on their respective days via the homepage and decide who to celebrate as the 
                day-maker in regards to that event e.g mother's day, day-maker is the person who mother's you.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="text-8xl font-bold text-[#B8A050] mb-4">2</div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Confetti as Celebration</h3>
              <p className="text-[#666666] leading-relaxed">
                Attach events to the confetti, as a reason for celebrating someone by either selecting an 
                event listed that day. Or Create a custom event that holds special meaning to you and the 
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