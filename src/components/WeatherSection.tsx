import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Cloud, Sun, CloudRain, Wind, Snowflake, CloudSnow, Search } from 'lucide-react';

interface WeatherData {
  location: string;
  type: 'surf' | 'ski';
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy';
  temperature: number;
  windSpeed: number;
  precipitation: number;
  waveHeight?: number;
  snowDepth?: number;
}

const weatherData: WeatherData[] = [
  {
    location: 'Covelong Point, Tamil Nadu',
    type: 'surf',
    condition: 'sunny',
    temperature: 32,
    windSpeed: 12,
    precipitation: 0,
    waveHeight: 1.5,
  },
  {
    location: 'Mulki, Karnataka',
    type: 'surf',
    condition: 'cloudy',
    temperature: 29,
    windSpeed: 15,
    precipitation: 20,
    waveHeight: 1.2,
  },
  {
    location: 'Varkala Beach, Kerala',
    type: 'surf',
    condition: 'windy',
    temperature: 28,
    windSpeed: 18,
    precipitation: 10,
    waveHeight: 1.8,
  },
  {
    location: 'Gulmarg, Kashmir',
    type: 'ski',
    condition: 'snowy',
    temperature: -4,
    windSpeed: 8,
    precipitation: 80,
    snowDepth: 150,
  },
  {
    location: 'Auli, Uttarakhand',
    type: 'ski',
    condition: 'cloudy',
    temperature: -2,
    windSpeed: 10,
    precipitation: 40,
    snowDepth: 95,
  },
  {
    location: 'Manali, Himachal Pradesh',
    type: 'ski',
    condition: 'snowy',
    temperature: -1,
    windSpeed: 12,
    precipitation: 60,
    snowDepth: 85,
  },
];

const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case 'sunny':
      return <Sun size={28} className="text-amber-500" />;
    case 'cloudy':
      return <Cloud size={28} className="text-gray-500" />;
    case 'rainy':
      return <CloudRain size={28} className="text-blue-500" />;
    case 'windy':
      return <Wind size={28} className="text-teal-500" />;
    case 'snowy':
      return <CloudSnow size={28} className="text-blue-300" />;
    default:
      return <Sun size={28} className="text-amber-500" />;
  }
};

const WeatherSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'surf' | 'ski'>('all');
  
  const filteredWeather = weatherData
    .filter(data => 
      (activeTab === 'all' || data.type === activeTab) &&
      data.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section id="weather" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Live Weather Conditions"
          subtitle="Check real-time weather updates for India's top surf and ski destinations"
        />
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="inline-flex p-1 rounded-md bg-gray-100 dark:bg-slate-800 mb-4 md:mb-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              All
            </button>
            <button
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
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWeather.map((data, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      {data.location}
                    </h3>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded mt-2 ${
                      data.type === 'surf'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400'
                    }`}>
                      {data.type === 'surf' ? 'Surf Spot' : 'Ski Resort'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {getWeatherIcon(data.condition)}
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Temperature</div>
                    <div className="text-lg font-semibold text-neutral-800 dark:text-white">
                      {data.temperature}°C
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Wind</div>
                    <div className="text-lg font-semibold text-neutral-800 dark:text-white flex items-center">
                      <Wind size={16} className="mr-1" />
                      {data.windSpeed} km/h
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Precipitation</div>
                    <div className="text-lg font-semibold text-neutral-800 dark:text-white">
                      {data.precipitation}%
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {data.type === 'surf' ? 'Wave Height' : 'Snow Depth'}
                    </div>
                    <div className="text-lg font-semibold text-neutral-800 dark:text-white">
                      {data.type === 'surf' 
                        ? `${data.waveHeight} m` 
                        : `${data.snowDepth} cm`
                      }
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-right">
                  Updated: Today, 10:30 AM IST
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <Snowflake size={16} className="inline-block mr-1" />
          Weather data is updated hourly. Last update: 10:30 AM IST
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;