
import { useEffect } from 'react';
import MapView from '@/components/MapView';
import { MapPin, Filter, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Map = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Reported Sites', value: '37', color: 'text-red-600' },
    { label: 'In Progress', value: '15', color: 'text-amber-600' },
    { label: 'Cleaned Up', value: '22', color: 'text-green-600' },
    { label: 'Clean-up Events', value: '8', color: 'text-sky-600' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-block bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-sm font-medium mb-3 animate-fade-in">
            Interactive Map
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 animate-fade-up" style={{animationDelay: '100ms'}}>
            Explore waste dumping sites and cleanup initiatives
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '200ms'}}>
            View reported waste sites, ongoing cleanups, and community events in Jonnalagadda and Thatireddypalem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-9 animate-fade-up" style={{animationDelay: '300ms'}}>
            <MapView />
          </div>
          
          <div className="md:col-span-3 space-y-6 animate-fade-up" style={{animationDelay: '400ms'}}>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                  <p className={cn("text-2xl font-bold", stat.color)}>{stat.value}</p>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-semibold flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                  Upcoming Clean-up Events
                </h3>
              </div>
              <div className="p-3">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <p className="text-sm font-medium text-slate-900">Community Cleanup Day</p>
                    <p className="text-xs text-slate-500 mt-1">Oct 15, 2023 • 9:00 AM</p>
                    <div className="flex items-center mt-2">
                      <MapPin className="h-3 w-3 text-slate-400 mr-1" />
                      <p className="text-xs text-slate-500">Jonnalagadda Central Park</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <p className="text-sm font-medium text-slate-900">School Volunteer Program</p>
                    <p className="text-xs text-slate-500 mt-1">Oct 22, 2023 • 10:00 AM</p>
                    <div className="flex items-center mt-2">
                      <MapPin className="h-3 w-3 text-slate-400 mr-1" />
                      <p className="text-xs text-slate-500">Thatireddypalem School</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-3 text-xs font-medium text-sky-600 hover:text-sky-700 py-2 transition-colors">
                  View All Events
                </button>
              </div>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-semibold flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-nature-500" />
                  Filter Options
                </h3>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Waste Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-2 py-1 rounded text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                        All
                      </button>
                      <button className="px-2 py-1 rounded text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                        Household
                      </button>
                      <button className="px-2 py-1 rounded text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                        Construction
                      </button>
                      <button className="px-2 py-1 rounded text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                        Plastic
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Date Range
                    </label>
                    <select className="w-full text-xs rounded-md border border-slate-300 py-1.5 px-2">
                      <option>All Time</option>
                      <option>Last Week</option>
                      <option>Last Month</option>
                      <option>Last 3 Months</option>
                      <option>Custom Range</option>
                    </select>
                  </div>
                  
                  <button className="w-full px-3 py-1.5 mt-2 rounded-md bg-nature-100 text-nature-700 text-xs font-medium hover:bg-nature-200 transition-colors">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
