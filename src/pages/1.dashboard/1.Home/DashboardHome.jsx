import React from 'react';

// Page Components
import HeroSection from './HeroSection';
import EventsCarousel from './EventsCarousel';

// This component serves as the main landing page for both:
// - Root route (/) - Public landing page
// - Dashboard route (/dashboard) - Authenticated user dashboard

export const DashboardPage = () => {
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
      {/* Hero Section - Main content and search interface */}
      <HeroSection />
      
      {/* Events Carousel - Featured events display */}
      <EventsCarousel />
    </div>
  );
};

export default DashboardPage;
