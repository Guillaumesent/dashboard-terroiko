// src/components/Mapbox.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapbox = ({ accessToken, styleId }) => {
  if (!accessToken || !styleId) {
    console.error('Mapbox access token or style ID is missing!');
    return <div>Map configuration error</div>;
  }

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${styleId}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & Mapbox'
        tileSize={512}
        zoomOffset={-1}
        accessToken={accessToken}
      />
    </MapContainer>
  );
};

export default Mapbox;
