import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'surf' | 'ski';
  featured?: boolean;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1, 
    src: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg',
    alt: 'Surfer riding wave at sunset',
    category: 'surf',
    featured: true
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg',
    alt: 'Surfer on a big wave',
    category: 'surf'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg',
    alt: 'Surfer paddling',
    category: 'surf'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg',
    alt: 'Skier in fresh powder',
    category: 'ski',
    featured: true
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/45391/whistler-blackcomb-skiing-snowboarding-british-columbia-45391.jpeg',
    alt: 'Skiing through trees',
    category: 'ski'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg',
    alt: 'Skier jumping',
    category: 'ski'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1209622/pexels-photo-1209622.jpeg',
    alt: 'Group of surfers',
    category: 'surf'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg',
    alt: 'Alpine skiing',
    category: 'ski'
  }
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'surf' | 'ski'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = galleryImages.filter(image => 
    activeTab === 'all' || image.category === activeTab
  );

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Community Gallery"
          subtitle="Explore stunning photos shared by our community members"
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
              All Photos
            </button>
            <button
              onClick={() => setActiveTab('surf')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'surf'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Surfing
            </button>
            <button
              onClick={() => setActiveTab('ski')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'ski'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Skiing
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className={`relative rounded-lg overflow-hidden cursor-pointer ${
                image.featured ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300">
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white text-center">
              <p className="text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;