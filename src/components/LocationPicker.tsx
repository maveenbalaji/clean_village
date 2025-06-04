
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LocationPickerProps {
  location: { lat: number; lng: number } | null;
  onLocationSelect: (location: { lat: number; lng: number }) => void;
  isLocating: boolean;
}

// Component to handle map center updates
const MapCenterSetter = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

// Component to handle map clicks
const MapClickHandler = ({ onLocationSelect }: { onLocationSelect: (location: { lat: number; lng: number }) => void }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelect({ lat, lng });
    },
  });
  return null;
};

const LocationPicker = ({ location, onLocationSelect, isLocating }: LocationPickerProps) => {
  // Guntur, Andhra Pradesh (pincode 522002) coordinates
  const defaultCenter: [number, number] = [16.3067, 80.4365];
  const mapZoom = 15;
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  // Fix Leaflet default icon issues
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  // Get user's location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // Create custom icon for user location
  const userLocationIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Create custom icon for selected location
  const selectedLocationIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer
      center={defaultCenter}
      zoom={mapZoom}
      style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <MapClickHandler onLocationSelect={onLocationSelect} />
      
      {location && (
        <Marker
          position={[location.lat, location.lng]}
          draggable={true}
          icon={selectedLocationIcon}
          eventHandlers={{
            dragend: (e) => {
              const marker = e.target;
              const position = marker.getLatLng();
              onLocationSelect({ lat: position.lat, lng: position.lng });
            },
          }}
        >
        </Marker>
      )}

      {userLocation && (
        <Marker
          position={[userLocation.lat, userLocation.lng]}
          icon={userLocationIcon}
        >
        </Marker>
      )}
      
      <MapCenterSetter center={location ? [location.lat, location.lng] : userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter} zoom={mapZoom} />
    </MapContainer>
  );
};

export default LocationPicker;
