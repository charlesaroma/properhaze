import React from 'react';

/**
 * Buzz Section Component
 * 
 * Features:
 * - Central buzzer button icon using actual image
 * - "Buzzz!" title in gold/brown color
 * - Descriptive text about the buzzer button feature
 * - Simple, clean design matching UI
 */
const Buzz = () => {
  return (
    <section className="py-16 bg-[#FDFBF5]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Central Icon/Button */}
          <div className="mb-8">
            <img 
              src="/images/buzzer-button.png" 
              alt="Buzzer Button" 
              className="w-auto h-32 mx-auto"
            />
          </div>
          
          {/* Description */}
          <p className="text-[#888888] text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Our innovative 'buzzer button' feature allows users to share joy and recognition, 
            sending confetti (which translates to monetary rewards) to those who bring delight to their lives.
          </p>
          
          {/* Horizontal Separator */}
          <div className="w-32 h-px bg-[#D9D9D9] mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Buzz;