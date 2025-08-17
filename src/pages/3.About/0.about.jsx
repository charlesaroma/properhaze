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
    <div className="pt-20 min-h-screen bg-[#FDFBF5] text-[#333333]">
      {/* Hero Section */}
      <AboutHero />
      
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
  );
};

export default AboutPage;
