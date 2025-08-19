import React from 'react';
import { Icon } from '@iconify/react';

const KeyFeatures = () => {
  // Features organized by columns - blending new info with grid design
  const column1Features = [
    {
      id: 1,
      title: "Profile Search",
      description: "Search and find desired profiles through the search bar in the homepage.",
      icon: "mdi:account-search"
    },
    {
      id: 2,
      title: "Reciprocate Delight",
      description: "Use (Press/buzzz) the \"Buzzer Button\" on public profiles to send confetti (monetary rewards).",
      icon: "mdi:hand-pointing-up"
    }
  ];

  const column2Features = [
    {
      id: 3,
      title: "Personalized Note",
      description: "Write a message to make it special when sending confetti.",
      icon: "mdi:note-text"
    },
    {
      id: 4,
      title: "Media Attachments",
      description: "Upload photos, audio, or videos to enhance the celebration.",
      icon: "mdi:image-multiple"
    }
  ];

  const column3Features = [
    {
      id: 5,
      title: "Anonymous Mode",
      description: "Send confetti anonymously, allowing you to celebrate without revealing your identity.",
      icon: "mdi:incognito"
    },
    {
      id: 6,
      title: "Event-Based Gifting",
      description: "Choose from listed events or create a custom one to align with daily or personal celebrations.",
      icon: "mdi:calendar"
    }
  ];

  // Feature item component
  const FeatureItem = ({ feature }) => (
    <div className="flex items-start space-x-4 mb-8">
      {/* Icon Container */}
      <div className="w-12 h-12 bg-[#B8A050] rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon 
          icon={feature.icon} 
          className="w-6 h-6 text-white"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-2">
          {feature.title}
        </h3>
        <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
          {feature.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-12 text-center">
            Key Features
          </h2>
          
          {/* Features Grid - 3 Columns with blended information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Profile Search & Reciprocate Delight */}
            <div className="space-y-8">
              {column1Features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
            
            {/* Column 2: Personalized Note & Media Attachments */}
            <div className="space-y-8">
              {column2Features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
            
            {/* Column 3: Anonymous Mode & Event-Based Gifting */}
            <div className="space-y-8">
              {column3Features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;