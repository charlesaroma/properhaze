import React, { useState, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Mock user data for search
  const mockUsers = [
    { id: 1, name: 'Brooklyn Simmons', avatar: 'https://i.pravatar.cc/40?img=1' },
    { id: 2, name: 'Esther Howard', avatar: 'https://i.pravatar.cc/40?img=2' },
    { id: 3, name: 'Courtney Henry', avatar: 'https://i.pravatar.cc/40?img=3' },
    { id: 4, name: 'Darlene Robertson', avatar: 'https://i.pravatar.cc/40?img=4' },
    { id: 5, name: 'Kristin Watson', avatar: 'https://i.pravatar.cc/40?img=5' },
    { id: 6, name: 'Jane Cooper', avatar: 'https://i.pravatar.cc/40?img=6' },
    { id: 7, name: 'Robin Inzama', avatar: 'https://i.pravatar.cc/40?img=7' },
  ];

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.trim()) {
      const filtered = mockUsers.filter(user =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  return (
    <section className="pt-20 px-6 pb-8">
      <div className="container mx-auto text-center">
        
        {/* Main Title */}
        <div className="mb-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream-canvas">
           <span className="text-accent">Reciprocate Delight</span>
          </h1>
        </div>

        {/* Search Section */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative">
            <MagnifyingGlassIcon 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-cream-canvas z-10" 
            />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search profile"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-2 sm:py-3 bg-[#05141D]/60 backdrop-blur-md border border-gray-600/30 rounded-2xl text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-transparent transition-all text-base sm:text-lg"
            />
          </div>

          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div 
              className="absolute top-full left-0 right-0 mt-2 bg-[#05141D]/60 backdrop-blur-md rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#05141D transparent'
              }}
            >
              {searchResults.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center p-4 cursor-pointer transition-all hover:bg-[#05141D]/70"
                  onClick={() => {
                    setSearchQuery(user.name);
                    setShowResults(false);
                  }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <span className="text-cream-canvas">{user.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-[13.5px] text-[var(--color-cream-canvas)]/60 font-light text-placeholder max-w-xl mx-auto pt-5">
          Press buzzer button and dispatch a burst of confetti to surprise and delight your chosen recipient.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
