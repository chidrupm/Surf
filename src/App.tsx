import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Community from './components/Community';
import Destinations from './components/Destinations';
import WeatherSection from './components/WeatherSection';
import Gallery from './components/Gallery';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Wave&Peak - Surf & Ski Community";
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-neutral-900 dark:text-white">
      <Navbar />
      <Hero />
      <Community />
      <Destinations />
      <WeatherSection />
      <Gallery />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;