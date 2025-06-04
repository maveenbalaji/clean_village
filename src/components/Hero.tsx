
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Upload, MapPin, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Upload className="h-5 w-5" />,
      title: "Report Waste",
      description: "Easily report illegal waste dumping with photos and location data",
      link: "/report",
      color: "bg-sky-50 text-sky-700 border-sky-100",
      delay: "0ms"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Interactive Map",
      description: "View all reported sites, cleanup initiatives, and collection points",
      link: "/map",
      color: "bg-nature-50 text-nature-700 border-nature-100",
      delay: "150ms"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Learn More",
      description: "Educational resources on waste management and environmental impact",
      link: "/education",
      color: "bg-amber-50 text-amber-700 border-amber-100",
      delay: "300ms"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ 
        '--mouse-x': '50%', 
        '--mouse-y': '50%' 
      } as React.CSSProperties}
    >
      {/* Dynamic background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-nature-100/80 via-slate-50 to-sky-100/80 opacity-70"
        style={{
          backgroundPosition: 'var(--mouse-x) var(--mouse-y)',
          transition: 'background-position 0.1s ease-out',
        }}
      />
      
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-nature-200 rounded-full mix-blend-multiply opacity-20 animate-pulse-soft" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply opacity-20 animate-pulse-soft" style={{animationDelay: '1.5s'}} />
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply opacity-20 animate-pulse-soft" style={{animationDelay: '0.8s'}} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-nature-800 shadow-sm border border-nature-100/50 mb-4 animate-fade-in" style={{animationDelay: '300ms'}}>
            Sustainable Communities Project
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight animate-fade-up" style={{animationDelay: '400ms'}}>
            Let's keep our communities 
            <span className="text-nature-600 relative">
              <span className="relative z-10">clean</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-nature-200" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,15 C30,5 70,5 100,15 L100,0 L0,0 Z" fill="currentColor" />
              </svg>
            </span>
            together
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '500ms'}}>
            Report illegal waste dumping, track cleanup initiatives, and help build 
            a healthier environment for everyone in Jonnalagadda and Thatireddypalem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{animationDelay: '600ms'}}>
            <Link
              to="/report"
              className="w-full sm:w-auto px-6 py-3 bg-nature-500 text-white font-medium rounded-lg shadow-sm hover:bg-nature-600 transition-all hover-lift"
            >
              Report Waste Dumping
            </Link>
            <Link
              to="/map"
              className="w-full sm:w-auto px-6 py-3 bg-white text-nature-700 font-medium rounded-lg border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all hover-lift"
            >
              Explore Interactive Map
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 animate-fade-up hover-lift",
                feature.color
              )}
              style={{animationDelay: feature.delay}}
            >
              <div className="mb-4 p-2 inline-block rounded-lg bg-white/50">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90 mb-4">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="text-sm font-medium inline-flex items-center space-x-1 opacity-90 hover:opacity-100 transition-opacity"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center animate-fade-up" style={{animationDelay: '800ms'}}>
          <p className="text-sm text-slate-500">
            Working together for a cleaner and healthier environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
