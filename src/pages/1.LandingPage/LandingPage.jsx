import React from 'react';
import HeroSection from './HeroSection';
import EventsCarousel from './EventsCarousel';

const LandingPage = () => {
  return (
    <div 
      className="pt-20 min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/BG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Hero Section with Search */}
      <HeroSection />
      
      {/* Events Carousel */}
      <EventsCarousel />
    </div>
  );
};

export default LandingPage;
