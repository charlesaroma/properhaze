import React from 'react';
import { Icon } from '@iconify/react';

/**
 * Team Section Component
 * 
 * Features:
 * - Robin Inzama profile with image and details
 * - "Get in Touch" section with contact information
 * - Social media icons using Iconify
 * - Simple, clean design matching UI
 */
const Team = () => {
  return (
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Meet the Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-8">
              Meet the Team
            </h2>
            
            {/* Robin Inzama Profile */}
            <div className="max-w-sm mx-auto">
              <img 
                src="/images/meet-team1.png" 
                alt="Robin Inzama - Founder and CEO" 
                className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-2">Robin Inzama</h3>
              <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm">Founder and C.E.O</p>
            </div>
          </div>
          
          {/* Get in Touch Section */}
          <div className="w-full flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-8">
              Get in Touch
            </h2>
            
            {/* Contact Information */}
            <div className="mb-8">
              <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                Contact us at <span className="font-semibold text-[var(--color-link)]">properhaze0@gmail.com</span> for feedback, suggestions, or partnership inquiries.
              </p>
              <p className="text-[var(--color-cream-canvas)] text-center text-xs sm:text-sm leading-relaxed">
                Or follow us to stay updated on the latest news, features, and success stories.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <button className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#555555] transition-colors">
                <Icon icon="mdi:twitter" className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#555555] transition-colors">
                <Icon icon="mdi:instagram" className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#555555] transition-colors">
                <Icon icon="mdi:music-note" className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#555555] transition-colors">
                <Icon icon="mdi:facebook" className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;