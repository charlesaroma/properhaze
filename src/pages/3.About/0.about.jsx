import React from 'react';

// About Page Sections
import AboutHero from './1.aboutHero';
import Buzz from './2.buzz';
import OurStory from './3.ourStory';
import KeyFeatures from './4.keyFeatures';
import Events from './5.Events';
import OurValues from './6.ourValues';
import Team from './7.team';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-black-canvas)]">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Content Sections with consistent background */}
      <div className="bg-[var(--color-black-canvas)]">
        {/* Buzz Section */}
        <Buzz />
        
        {/* Our Story Section */}
        <OurStory />
        
        {/* Key Features Section */}
        <KeyFeatures />
        
        {/* Events Section */}
        <Events />
        
        {/* Our Values Section */}
        <OurValues />
        
        {/* Team Section */}
        <Team />
      </div>
    </div>
  );
};

export default AboutPage;
