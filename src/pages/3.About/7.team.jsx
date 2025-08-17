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
    <section className="py-16 bg-[#FDFBF5]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Meet the Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Meet the Team
            </h2>
            
            {/* Robin Inzama Profile */}
            <div className="max-w-sm mx-auto">
              <img 
                src="/images/meet-team1.png" 
                alt="Robin Inzama - Founder and CEO" 
                className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-[#333333] mb-2">Robin Inzama</h3>
              <p className="text-[#666666]">Founder and C.E.O</p>
            </div>
          </div>
          
          {/* Get in Touch Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Get in Touch
            </h2>
            
            {/* Contact Information */}
            <div className="mb-8">
              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                Contact us at <span className="font-semibold text-[#333333]">properhaze0@gmail.com</span> for feedback, suggestions, or partnership inquiries.
              </p>
              <p className="text-[#666666] text-lg leading-relaxed">
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