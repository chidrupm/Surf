import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { MapPin, Star, ExternalLink } from 'lucide-react';
import { Link } from './ui/Link';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  difficulty: string;
  description: string;
  type: 'surf' | 'ski';
  season: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Covelong Point',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg',
    rating: 4.7,
    difficulty: 'Beginner/Intermediate',
    description: 'One of India\'s premier surf spots with consistent waves and a vibrant local surf culture.',
    type: 'surf',
    season: 'May to September'
  },
  {
    id: 2,
    name: 'Mulki',
    location: 'Karnataka',
    image: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg',
    rating: 4.5,
    difficulty: 'All Levels',
    description: 'Home to the Mantra Surf Club and perfect for beginners with gentle waves.',
    type: 'surf',
    season: 'October to May'
  },
  {
    id: 3,
    name: 'Varkala Beach',
    location: 'Kerala',
    image: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg',
    rating: 4.6,
    difficulty: 'Intermediate',
    description: 'Beautiful cliff-backed beach with consistent waves and stunning sunsets.',
    type: 'surf',
    season: 'November to March'
  },
  {
    id: 4,
    name: 'Gulmarg',
    location: 'Kashmir, India',
    image: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg',
    rating: 4.9,
    difficulty: 'All Levels',
    description: 'India\'s premier ski resort with world-class powder snow and breathtaking Himalayan views.',
    type: 'ski',
    season: 'December to March'
  },
  {
    id: 5,
    name: 'Auli',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg',
    rating: 4.7,
    difficulty: 'Beginner/Intermediate',
    description: 'Stunning ski resort in the Garhwal Himalayas with excellent slopes for beginners.',
    type: 'ski',
    season: 'November to March'
  },
  {
    id: 6,
    name: 'Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg',
    rating: 4.6,
    difficulty: 'All Levels',
    description: 'Popular destination for skiing and winter sports with beautiful mountain scenery.',
    type: 'ski',
    season: 'December to February'
  }
];

const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'surf' | 'ski'>('all');
  
  const filteredDestinations = destinations.filter(destination => 
    activeTab === 'all' || destination.type === activeTab
  );

  return (
    <section id="spots" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Explore Indian Destinations"
          subtitle="Discover the best surf spots and ski resorts across India"
        />
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 rounded-md bg-gray-100 dark:bg-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              All Destinations
            </button>
            <button
              id="surf-spots"
              onClick={() => setActiveTab('surf')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'surf'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Surf Spots
            </button>
            <button
              id="ski-resorts"
              onClick={() => setActiveTab('ski')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'ski'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Ski Resorts
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-white/90 dark:bg-slate-800/90 rounded-md backdrop-blur-sm text-xs font-semibold text-neutral-700 dark:text-neutral-200">
                  {destination.type === 'surf' ? 'Surf Spot' : 'Ski Resort'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center text-neutral-600 dark:text-neutral-400">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                    destination.difficulty.includes('Expert')
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      : destination.difficulty.includes('Intermediate')
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  }`}>
                    {destination.difficulty}
                  </span>
                  <span className="ml-2 inline-block px-2 py-1 text-xs font-medium rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                    Season: {destination.season}
                  </span>
                </div>
                
                <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm">
                  {destination.description}
                </p>
                
                <Link 
                  href="#"
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300"
                >
                  View Details
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
          >
            Explore All Destinations
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;