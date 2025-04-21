import React from 'react';
import { Users, CalendarDays, Map, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FeatureCard from './FeatureCard';

const Community: React.FC = () => {
  const features = [
    {
      title: 'Connect with Enthusiasts',
      description: 'Join a global community of surfers and skiers to share experiences, tips, and stories.',
      icon: <Users size={28} />,
    },
    {
      title: 'Discover Events',
      description: 'Find local meetups, competitions, and group trips organized by community members.',
      icon: <CalendarDays size={28} />,
    },
    {
      title: 'Explore Top Spots',
      description: 'Discover the best surf breaks and ski slopes with community-curated location guides.',
      icon: <Map size={28} />,
    },
    {
      title: 'Engage in Discussions',
      description: 'Participate in forums covering everything from gear reviews to technique improvements.',
      icon: <MessageCircle size={28} />,
    },
  ];

  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Join Our Community"
          subtitle="Connect with fellow surf and ski enthusiasts from around the world"
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Become a Member Today
              </h3>
              <p className="text-white/90 mb-6">
                Join thousands of surf and ski enthusiasts. Get access to exclusive content, events, and connect with like-minded adventurers.
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition duration-200 transform hover:scale-105">
                Sign Up Free
              </button>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/1209622/pexels-photo-1209622.jpeg" 
                alt="Community members" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;