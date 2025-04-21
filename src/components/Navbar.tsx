import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GithubIcon } from 'lucide-react';
import { Link } from '../components/ui/Link';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Community', href: '#community' },
    { name: 'Events', href: '#events' },
    { name: 'Spots', href: '#spots' },
    { name: 'Weather', href: '#weather' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
  ];

  const NavLink: React.FC<{ href: string; name: string }> = ({ href, name }) => (
    <Link
      href={href}
      className="text-neutral-700 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400 font-medium transition duration-200"
      onClick={() => setIsMenuOpen(false)}
    >
      {name}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="#" className="flex items-center">
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Wave&Peak
                </span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href} name={link.name} />
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-200"
            >
              Join Us
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-slate-800 transition duration-150"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-slate-800 transition duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-200 mt-4"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;