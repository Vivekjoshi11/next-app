'use client'; // Ensure this file is client-side only
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

// Import Leaflet components dynamically (client-side only)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });

const MapWithNoFlyZone = () => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Initial drone position

  // Define a polygon for the no-fly zone (in this case, a square in a specific area)
  const noFlyZone = [
    [51.51, -0.08], // top-left
    [51.51, -0.1],  // top-right
    [51.49, -0.1],  // bottom-right
    [51.49, -0.08], // bottom-left
  ];

  return (
    <MapContainer
    center={position}
    zoom={13}
    style={{ height: '400px', width: '100%' }}
    {...(MapContainer as any)} // Override props to manually cast
  >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19} // maxZoom is a valid prop in TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         {...(MapContainer as any)} 
      />
      
      {/* Red Polygon for No-Fly Zone */}
      <Polygon positions={noFlyZone} pathOptions={{ color: 'red' }} />

      {/* Simulate a Drone as a Marker */}
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default MapWithNoFlyZone;
