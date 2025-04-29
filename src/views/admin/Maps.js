import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icone personnalisée
const customIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/?size=100&id=Nt1D465bTSVD&format=png&color=000000",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Fonction utilitaire pour générer une coordonnée proche
const randomNearby = (lat, lng, offset = 0.05) => {
  return [
    lat + (Math.random() - 0.5) * offset,
    lng + (Math.random() - 0.5) * offset,
  ];
};

export default function Maps() {
  const center = [43.599928855874126, 2.0081230764533737];

  // Génération de 163 positions proches aléatoires
  const nearbyMarkers = Array.from({ length: 163 }, () =>
    randomNearby(center[0], center[1])
  );

  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <MapContainer center={center} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marqueur principal */}
            <Marker position={center} icon={customIcon}>
              <Popup>Position principale</Popup>
            </Marker>

            {/* Marqueurs aléatoires proches */}
            {nearbyMarkers.map((pos, index) => (
              <Marker key={index} position={pos} icon={customIcon}>
                <Popup>Observation #{index + 1}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
