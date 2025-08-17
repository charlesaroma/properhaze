import React from 'react';
import { Icon } from '@iconify/react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF5]">
      {/* Dark Top Section */}
      <div className="bg-[var(--color-black-canvas)] h-[30vh] sm:h-[35vh] md:h-[40vh] relative">
        {/* Profile Picture - Centered and overlapping */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 sm:-bottom-14 md:-bottom-16">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img 
              src="/images/meet-team1.png" 
              alt="Robin Inzama" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Light Bottom Section */}
      <div className="pt-16 sm:pt-18 md:pt-20 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* User Name and QR Code */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#333333]">Robin Inzama</h1>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-200 rounded flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Icon icon="mdi:qrcode" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
              </div>
            </div>
            
            {/* Location */}
            <p className="text-[#666666] text-base sm:text-lg mb-4 sm:mb-6">Kampala, Uganda</p>
            
            {/* Account Balance and Edit Profile */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
              {/* Account Balance */}
              <div className="bg-white border border-gray-200 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-sm w-full sm:w-auto">
                <span className="text-[#666666] text-sm sm:text-base">Account balance: </span>
                <span className="font-bold text-[#333333] text-sm sm:text-base">KES 12,500.00</span>
              </div>
              
              {/* Edit Profile Button */}
              <button className="bg-[var(--color-black-canvas)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[var(--color-black-canvas)]/90 transition-colors cursor-pointer w-full sm:w-auto text-sm sm:text-base">
                Edit Profile
              </button>
            </div>
            
            {/* Bio */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm mb-4 sm:mb-6">
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                Founder and C.E.O PROPERHAZE LIMITED, Imaginer, Anthropologist, Philosopher of technology, Poet, Wealth material, Mr.confetti...Homo Excelsior
              </p>
            </div>
            
            {/* Website Link */}
            <div className="flex items-center justify-center space-x-2">
              <Icon icon="mdi:web" className="w-3 h-3 sm:w-4 sm:h-4 text-[#3b82f6]" />
              <a 
                href="https://www.domain.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#3b82f6] underline hover:text-[#2563eb] transition-colors cursor-pointer text-xs sm:text-sm"
              >
                https://www.domain.com/...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
