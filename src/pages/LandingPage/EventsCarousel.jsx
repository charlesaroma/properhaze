import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventsCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Handle responsive behavior manually
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlidesToShow(4);
      } else if (width >= 1024) {
        setSlidesToShow(3);
      } else if (width >= 768) {
        setSlidesToShow(2);
      } else if (width >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const events = [
    {
      id: 1,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/cz.png' // Czech Republic
    },
    {
      id: 2,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/at.png' // Austria
    },
    {
      id: 3,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/be.png' // Belgium
    },
    {
      id: 4,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/ee.png' // Estonia
    },
    {
      id: 5,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/fr.png' // France
    },
    {
      id: 6,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/de.png' // Germany
    },
    {
      id: 7,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'https://flagcdn.com/w320/it.png' // Italy
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    swipe: true,
    touchMove: true,
    // Remove responsive array since we're handling it manually
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-cream-canvas">
            Events today
          </h2>
        </div>

        {/* React Slick Carousel Container */}
        <div className="relative">
          <Slider {...settings} className="events-carousel" key={slidesToShow}>
            {/* Individual Event Slides */}
            {events.map((event) => (
              <div key={event.id} className="px-1 sm:px-2">
                {/* Changed bg-white to a translucent dark gray for the main card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-800/20 backdrop-blur-sm max-w-[280px] sm:max-w-[308px] mx-auto">
                  
                  {/* Event Image Container */}
                  <div className="h-[180px] sm:h-[207px] overflow-hidden">
                    <img
                      src={event.flag}
                      alt={`${event.title} flag`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/1f2937/ffffff?text=Flag';
                        e.target.alt = 'Flag placeholder';
                      }}
                    />
                  </div>
                  
                  {/* Event Content Container - kept original translucent black with blur */}
                  <div className="min-h-[120px] sm:min-h-[147px] max-h-[120px] sm:max-h-[147px] p-3 sm:p-4 lg:p-5 bg-black/30 backdrop-blur-md rounded-b-xl flex flex-col justify-center">
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default EventsCarousel;
