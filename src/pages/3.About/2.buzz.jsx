import React from "react";

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
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Central Icon/Button */}
          <div className="mb-8">
            <img
              src="/images/Icon.png"
              alt="Buzzer Button"
              className="w-auto h-32 mx-auto animate-bounce"
            />
          </div>

          {/* Reciprocate Delight Section */}
          <div className="mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-6 text-center">
              Reciprocate Delight
            </h2>
            <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
              The theme is simple yet powerful. Encourage others to reciprocate that delight by surprising them 
              with a burst of confetti! It's like a seesaw where one player pushes the other up and is immediately 
              pushed up as well creating shared joy. This creates a ripple effect of positivity. People are motivated 
              to continue being delightful because it's nice being celebrated. Everyone else would want to be delightful 
              and this will make the world a delightful place.
            </p>
          </div>

          {/* Note */}
          <div className="bg-[var(--color-black-canvas)] border border-[#B8A050]/30 rounded-lg p-4 mb-8 max-w-lg mx-auto">
            <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
              <strong className="text-orange-700">NB:</strong> The spirit of
              reciprocate delight is clear: don't ask for celebration! Instead,
              focus on sparking delight in others through positivity and joy.
              When you create a delightful experience for someone, they'll
              naturally reciprocate with a burst of confetti, celebrating your
              impact. Let's keep the cycle of delight genuine and heartfelt!
            </p>
          </div>
        </div>
        {/* Horizontal Separator */}
        <div className="w-full h-px bg-[#D9D9D9]/30 mx-auto mt-16"></div>
      </div>
    </section>
  );
};

export default Buzz;
