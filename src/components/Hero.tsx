import React, { useEffect, useState } from 'react';
import { Link } from './ui/Link';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg',
    title: 'Discover Indian Waves',
    subtitle: 'Experience surfing along India\'s pristine coastline',
    category: 'surf'
  },
  {
    url: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg',
    title: 'Himalayan Adventures',
    subtitle: 'Explore India\'s majestic ski slopes',
    category: 'ski'
  },
  {
    url: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg',
    title: 'Surf Paradise',
    subtitle: 'Join the growing surf culture in India',
    category: 'surf'
  },
  {
    url: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg',
    title: 'Snow-Capped Dreams',
    subtitle: 'Experience world-class skiing in the Himalayas',
    category: 'ski'
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto transform transition-all duration-1000 ease-in-out">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            {currentImage.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 mb-8">
            {currentImage.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="#community"
              className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Join Community
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href={`#${currentImage.category === 'surf' ? 'surf-spots' : 'ski-resorts'}`}
              className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium border border-white/30 transition-all duration-300"
            >
              Explore {currentImage.category === 'surf' ? 'Surf Spots' : 'Ski Resorts'}
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;