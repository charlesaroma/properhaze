import React from 'react';
import { Icon } from '@iconify/react';

const KeyFeatures = () => {
  // Features organized by columns
  const column1Features = [
    {
      id: 1,
      title: "Profile Search",
      description: "Search and find desired profiles through the search bar in the homepage.",
      icon: "mdi:account-search"
    },
    {
      id: 2,
      title: "Attachment Options",
      description: "Three different types of attachments are available, to accompany confetti. This include: Add note, Add media and Add Event.",
      icon: "mdi:paperclip"
    }
  ];

  const column2Features = [
    {
      id: 3,
      title: "Buzzer Button Interaction",
      description: "Reciprocate delight through our unique 'Buzzer Button' availed at every user's public profile page. Through Pressing the buzzer button you'll be able to dispatch a burst of confetti to surprise and delight your chosen recipient.",
      icon: "mdi:hand-pointing-up"
    },
    {
      id: 4,
      title: "Confetti as Celebration",
      description: "Confetti (translates to monetary reward) is our medium of celebration.",
      icon: "mdi:hand-okay"
    }
  ];

  const column3Features = [
    {
      id: 5,
      title: "Anonymous Mode",
      description: "Anonymous option. Users are able to send confetti to another user using an anonymous identity.",
      icon: "mdi:incognito"
    },
    {
      id: 6,
      title: "Event-Based Gifting",
      description: "Add Event (either among listed events of the today within the Properhaze system or customize an event) – enables celebration to align with daily or personal events.",
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
        <h3 className="text-xl font-bold text-[#333333] mb-2">
          {feature.title}
        </h3>
        <p className="text-[#666666] leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-[#FDFBF5]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
            Key Features
          </h2>
          
          {/* Features Grid - 3 Columns with specific organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Profile Search & Attachment Options */}
            <div className="space-y-8">
              {column1Features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
            
            {/* Column 2: Buzzer Button & Confetti */}
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