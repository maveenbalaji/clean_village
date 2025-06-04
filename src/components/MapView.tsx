import { useEffect, useRef, useState } from 'react';
import { MapPin, Trash, Users, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Mock data for demonstration
const MOCK_WASTE_SITES = [
  { id: 1, lat: 16.3067, lng: 80.4365, type: 'household', status: 'reported', reportedAt: '2023-08-15', upvotes: 4 },
  { id: 2, lat: 16.3097, lng: 80.4386, type: 'construction', status: 'cleaning', reportedAt: '2023-09-02', upvotes: 7 },
  { id: 3, lat: 16.3047, lng: 80.4412, type: 'plastic', status: 'cleaned', reportedAt: '2023-07-28', upvotes: 12 },
  { id: 4, lat: 16.3117, lng: 80.4325, type: 'electronics', status: 'reported', reportedAt: '2023-09-10', upvotes: 2 },
  { id: 5, lat: 16.3022, lng: 80.4392, type: 'other', status: 'reported', reportedAt: '2023-09-05', upvotes: 5 },
];

const MOCK_CLEANUP_EVENTS = [
  { id: 101, lat: 16.3067, lng: 80.4365, title: 'Community Cleanup Day', date: '2023-10-15', participants: 15 },
  { id: 102, lat: 16.3022, lng: 80.4392, title: 'School Volunteer Program', date: '2023-10-22', participants: 25 },
];

// Custom marker icons for different status types
const createCustomIcon = (status: string) => {
  const colorMap: Record<string, string> = {
    reported: 'red',
    cleaning: 'orange',
    cleaned: 'green',
    event: 'blue'
  };
  
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${colorMap[status] || 'red'}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Custom component to set the initial view of the map
const MapCenterSetter = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const MapView = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredSite, setHoveredSite] = useState<number | null>(null);
  const [selectedSite, setSelectedSite] = useState<number | null>(null);
  
  // Center coordinates for Guntur, Andhra Pradesh area (522002)
  const mapCenter: [number, number] = [16.3067, 80.4365];
  const mapZoom = 14;
  
  // Fix Leaflet default icon issues
  useEffect(() => {
    // Fix for default marker icons in Leaflet
    // We need to provide URLs for the icon images since Leaflet can't find them in the bundled app
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);
  
  // Status color mapping
  const statusColors = {
    reported: { bg: 'bg-red-500', text: 'text-red-700', border: 'border-red-200', light: 'bg-red-100' },
    cleaning: { bg: 'bg-amber-500', text: 'text-amber-700', border: 'border-amber-200', light: 'bg-amber-100' },
    cleaned: { bg: 'bg-green-500', text: 'text-green-700', border: 'border-green-200', light: 'bg-green-100' },
  };
  
  // Type icon mapping
  const typeIcons = {
    household: '🏠',
    construction: '🏗️',
    electronics: '💻',
    plastic: '🥤',
    other: '📦',
  };

  const filteredSites = MOCK_WASTE_SITES.filter(site => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'reported' && site.status === 'reported') return true;
    if (activeFilter === 'cleaning' && site.status === 'cleaning') return true;
    if (activeFilter === 'cleaned' && site.status === 'cleaned') return true;
    return false;
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden animate-scale-in h-full">
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900">Waste Map</h2>
        
        <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveFilter('all')}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-md transition-all",
              activeFilter === 'all' 
                ? "bg-white text-slate-800 shadow-sm" 
                : "text-slate-600 hover:text-slate-800"
            )}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('reported')}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-md transition-all",
              activeFilter === 'reported' 
                ? "bg-white text-red-600 shadow-sm" 
                : "text-slate-600 hover:text-slate-800"
            )}
          >
            Reported
          </button>
          <button 
            onClick={() => setActiveFilter('cleaning')}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-md transition-all",
              activeFilter === 'cleaning' 
                ? "bg-white text-amber-600 shadow-sm" 
                : "text-slate-600 hover:text-slate-800"
            )}
          >
            In Progress
          </button>
          <button 
            onClick={() => setActiveFilter('cleaned')}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-md transition-all",
              activeFilter === 'cleaned' 
                ? "bg-white text-green-600 shadow-sm" 
                : "text-slate-600 hover:text-slate-800"
            )}
          >
            Cleaned
          </button>
        </div>
      </div>
      
      <div className="relative h-[400px]">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          attributionControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapCenterSetter center={mapCenter} zoom={mapZoom} />
          
          {/* Waste sites markers */}
          {filteredSites.map((site) => (
            <Marker 
              key={site.id}
              position={[site.lat, site.lng]}
              icon={createCustomIcon(site.status)}
              eventHandlers={{
                click: () => {
                  setSelectedSite(site.id === selectedSite ? null : site.id);
                },
                mouseover: () => {
                  setHoveredSite(site.id);
                },
                mouseout: () => {
                  setHoveredSite(null);
                }
              }}
            >
              <Popup>
                <div className="p-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[site.status as keyof typeof statusColors].light} ${statusColors[site.status as keyof typeof statusColors].text}`}>
                      {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                    </span>
                    <span className="text-sm font-medium">{typeIcons[site.type as keyof typeof typeIcons]}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-1">Reported on: {site.reportedAt}</p>
                  <div className="flex items-center text-xs text-slate-600">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>({site.lat.toFixed(4)}, {site.lng.toFixed(4)})</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">
                        <span className="font-medium text-slate-700">{site.upvotes}</span> people reported
                      </span>
                      <button className="text-nature-600 hover:text-nature-700 font-medium transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          
          {/* Cleanup events markers */}
          {MOCK_CLEANUP_EVENTS.map((event) => (
            <Marker
              key={event.id}
              position={[event.lat, event.lng]}
              icon={createCustomIcon('event')}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="text-sm font-medium text-slate-900">{event.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">Date: {event.date}</p>
                  <p className="text-xs text-slate-600 mt-1">
                    <Users className="h-3 w-3 inline mr-1" />
                    Participants: {event.participants}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <button className="text-xs text-sky-600 hover:text-sky-700 font-medium">
                      Join Event
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-xs text-slate-600">Reported</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              <span className="text-xs text-slate-600">In Progress</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-slate-600">Cleaned</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-sky-400 mr-2"></div>
              <span className="text-xs text-slate-600">Cleanup Events</span>
            </div>
          </div>
          
          <button className="text-xs font-medium text-nature-600 hover:text-nature-700 transition-colors">
            View List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
