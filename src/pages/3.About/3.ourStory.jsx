import React from 'react';

/**
 * Our Story Section Component
 * 
 * Features:
 * - "Our Story" section explaining Properhaze platform
 * - "Reciprocate Delight" section about the core theme
 * - Simple, clean text layout matching UI design
 */
const OurStory = () => {
  return (
    <section className="py-16 bg-[#FDFBF5]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Our Story Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">
              Our Story
            </h2>
            <p className="text-[#333333] text-lg leading-relaxed">
              Properhaze is a true celebrity platform in social media. Celebration is not limited to "Famous people." 
              Everyone and anyone can have a celebrity moment. If you delight someone, they will reciprocate that 
              effect of delight back to you by celebrating you. You don't need to be widely known; recognition as 
              "delightful" is enough. A "buzzer button" is used to dispatch confetti (money) as a medium of celebration. 
              We believe that acknowledging and celebrating individuals is essential for building a stronger, brighter 
              and wonderful world.
            </p>
          </div>
          
          {/* Reciprocate Delight Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">
              Reciprocate Delight
            </h2>
            <p className="text-[#333333] text-lg leading-relaxed">
              The theme is simple yet powerful. Encourage others to reciprocate that delight by surprising them 
              with a burst of confetti! It's like a seesaw where one player pushes the other up and is immediately 
              pushed up as well creating shared joy. This creates a ripple effect of positivity. People are motivated 
              to continue being delightful because it's nice being celebrated. Everyone else would want to be delightful 
              and this will make the world a delightful place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;