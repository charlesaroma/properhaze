import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const KeyFeatures = () => {
  // Features organized by columns - blending new info with grid design
  const column1Features = [
    {
      id: 1,
      title: "Profile Search",
      description: "Search and find desired profiles through the search bar in the homepage.",
      iconKey: 'search'
    },
    {
      id: 2,
      title: "Reciprocate Delight",
      description: "Use (Press/buzzz) the \"Buzzer Button\" on public profiles to send confetti (monetary rewards).",
      iconKey: 'buzzer'
    }
  ];

  const column2Features = [
    {
      id: 3,
      title: "Personalized Note",
      description: "Write a message to make it special when sending confetti.",
      iconKey: 'note'
    },
    {
      id: 4,
      title: "Media Attachments",
      description: "Upload photos, audio, or videos to enhance the celebration.",
      iconKey: 'images'
    }
  ];

  const column3Features = [
    {
      id: 5,
      title: "Anonymous Mode",
      description: "Send confetti anonymously, allowing you to celebrate without revealing your identity.",
      iconKey: 'anonymous'
    },
    {
      id: 6,
      title: "Event-Based Gifting",
      description: "Choose from listed events or create a custom one to align with daily or personal celebrations.",
      iconKey: 'calendar'
    }
  ];

  // Icon mapping to animated Iconify glyphs (kept unique yet safe)
  const IconComponent = ({ name }) => {
    const common = 'w-6 h-6 text-white';
    switch (name) {
      case 'search':
        return <Icon icon="mdi:magnify" className={common} />;
      case 'buzzer':
        return <Icon icon="mdi:gesture-tap-button" className={common} />;
      case 'note':
        return <Icon icon="mdi:note-text-outline" className={common} />;
      case 'images':
        return <Icon icon="mdi:image-multiple-outline" className={common} />;
      case 'anonymous':
        return <Icon icon="mdi:incognito" className={common} />;
      case 'calendar':
        return <Icon icon="mdi:calendar-month-outline" className={common} />;
      default:
        return <Icon icon="mdi:star-circle-outline" className={common} />;
    }
  };

  // Feature item component
  const FeatureItem = ({ feature }) => (
    <motion.div
      className="flex items-start space-x-4 mb-8"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Icon Container with subtle motion and sheen */}
      <motion.div
        className="relative w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(145deg, #B8A050, #a08a47)' }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.07, rotate: 1 }}
      >
        <span className="relative z-[1]">
          <IconComponent name={feature.iconKey} />
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-lg"
              style={{
                background: 'radial-gradient(60% 60% at 30% 20%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)'
              }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-2">
          {feature.title}
        </h3>
        <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
          {feature.description}
        </p>
      </div>
    </motion.div>
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