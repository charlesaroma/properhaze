import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventsCarousel = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 lg:py-20 px-4 lg:px-6"> {/* Added dark background to the section */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-cream-canvas">
            Events today
          </h2>
        </div>

        {/* React Slick Carousel Container */}
        <div className="relative">
          <Slider {...settings} className="events-carousel">
            {/* Individual Event Slides */}
            {events.map((event) => (
              <div key={event.id} className="px-2">
                {/* Changed bg-white to a translucent dark gray for the main card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-800/20 backdrop-blur-sm max-w-[308px] mx-auto">
                  
                  {/* Event Image Container */}
                  <div className="h-[207px] overflow-hidden">
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
                  <div className="min-h-[147px] max-h-[147px] p-4 lg:p-5 bg-black/30 backdrop-blur-md rounded-b-xl flex flex-col justify-center">
                    <h3 className="text-white text-lg lg:text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="lg:hidden text-center mt-8">
          <p className="text-placeholder text-sm">← Swipe to see more events →</p>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
