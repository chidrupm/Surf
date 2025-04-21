import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Wave&Peak
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Connecting surf and ski enthusiasts worldwide. Share adventures, find spots, and join a global community of outdoor lovers.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#spots" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Surf Spots & Ski Resorts
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Weather Forecast
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Gear Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Training Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Safety Information
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  123 Adventure Way<br />
                  Oceanside, CA 92054
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-2" />
                <a href="mailto:info@waveandpeak.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  info@waveandpeak.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-2" />
                <a href="tel:+18001234567" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wave&Peak. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;