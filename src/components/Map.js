// src/components/Map.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Créer la carte Leaflet
    const map = L.map(mapContainer.current).setView([51.505, -0.09], 13);

    // Ajouter un fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Ajouter un marqueur à la position initiale
    L.marker([51.505, -0.09]).addTo(map).bindPopup('A simple marker').openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />;
};

export default Map;
