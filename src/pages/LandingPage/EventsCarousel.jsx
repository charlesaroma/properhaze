import React from 'react';
import { motion } from 'framer-motion';

const EventsCarousel = () => {
  const events = [
    {
      id: 1,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-czech',
      colors: ['bg-blue-600', 'bg-white', 'bg-red-600']
    },
    {
      id: 2,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-austria',
      colors: ['bg-red-600', 'bg-white', 'bg-red-600']
    },
    {
      id: 3,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-belgium',
      colors: ['bg-black', 'bg-yellow-400', 'bg-red-600']
    },
    {
      id: 4,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-estonia',
      colors: ['bg-blue-600', 'bg-black', 'bg-white']
    }
  ];

  const EventCard = ({ event, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-80 card hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
    >
      <div className={`h-48 rounded-lg ${event.flag} mb-4 relative overflow-hidden`}>
        {/* Flag representation using gradients */}
        <div className="absolute inset-0 opacity-80">
          {event.id === 1 && (
            <div className="h-full flex">
              <div className="w-1/3 bg-blue-600"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 bg-red-600"></div>
            </div>
          )}
          {event.id === 2 && (
            <div className="h-full flex flex-col">
              <div className="h-1/3 bg-red-600"></div>
              <div className="h-1/3 bg-white"></div>
              <div className="h-1/3 bg-red-600"></div>
            </div>
          )}
          {event.id === 3 && (
            <div className="h-full flex flex-col">
              <div className="h-1/3 bg-yellow-400"></div>
              <div className="h-1/3 bg-black"></div>
              <div className="h-1/3 bg-red-600"></div>
            </div>
          )}
          {event.id === 4 && (
            <div className="h-full flex flex-col">
              <div className="h-1/3 bg-blue-600"></div>
              <div className="h-1/3 bg-black"></div>
              <div className="h-1/3 bg-white"></div>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
      </div>
      
      <h3 className="text-xl font-bold text-cream-canvas mb-2">{event.title}</h3>
      <p className="text-placeholder">{event.description}</p>
    </motion.div>
  );

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream-canvas mb-4">
            Events today
          </h2>
        </motion.div>

        {/* Events Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="overflow-x-auto pb-6"
        >
          <div className="flex space-x-6 w-max">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Mobile scroll indicator */}
        <div className="md:hidden text-center mt-8">
          <p className="text-placeholder text-sm">← Swipe to see more events →</p>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
