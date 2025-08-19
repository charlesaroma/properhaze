import React from "react";

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
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Our Story Section */}
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-6 text-center">
              Our Story
            </h2>
            <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
              Properhaze was created to establish a true celebrity platform in
              the social media industry, where everyone and anyone can have a
              celebrity moment. Anyone can shine on Properhaze, regardless of
              fame, as long as they bring delight to others. When you bring joy
              to others they'll celebrate you in return. By celebrating such
              individuals, we can build a happier world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
