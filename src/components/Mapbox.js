// src/components/Mapbox.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapbox = ({ accessToken, styleId }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!accessToken || !styleId) {
      console.error('Mapbox access token or style ID is missing!');
      return;
    }

    // Créez une carte Mapbox via React-Leaflet
    const map = new window.L.Map(mapContainer.current, {
      center: [51.505, -0.09],
      zoom: 13,
    });

    // Ajouter le fond de carte Mapbox avec l'URL appropriée et le style
    L.tileLayer(`https://api.mapbox.com/styles/v1/${styleId}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, [accessToken, styleId]);

  return <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />;
};

export default Mapbox;
