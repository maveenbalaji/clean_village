
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MapPin, BookOpen, Users, Upload, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Map', icon: <MapPin className="h-4 w-4" />, path: '/map' },
    { name: 'Report', icon: <Upload className="h-4 w-4" />, path: '/report' },
    { name: 'Community', icon: <Users className="h-4 w-4" />, path: '/community' },
    { name: 'Education', icon: <BookOpen className="h-4 w-4" />, path: '/education' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/70 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Go to homepage"
          >
            <div className="bg-nature-500 text-white p-2 rounded-lg transition-all duration-300 group-hover:bg-nature-600">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight">CleanMapConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-medium text-sm flex items-center space-x-1.5 transition-all duration-300",
                  location.pathname === item.path
                    ? "text-nature-700 bg-nature-50"
                    : "text-slate-600 hover:text-nature-600 hover:bg-slate-50"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-nature-500 rounded-full animate-pulse-soft" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-nature-600 focus:outline-none transition-all"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 animate-scale-in" />
            ) : (
              <Menu className="h-6 w-6 animate-scale-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block px-4 py-3 rounded-lg font-medium flex items-center space-x-3 transition-all",
                  location.pathname === item.path
                    ? "text-nature-700 bg-nature-50"
                    : "text-slate-600 hover:text-nature-600 hover:bg-slate-50"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
