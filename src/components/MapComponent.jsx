"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Leaflet with Next.js
const markerIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Ghana bounds
const ghanaBounds = [
  [4.5, -3.3], // Southwest
  [11.2, 1.2], // Northeast
];

// Define color scale based on count
const getCircleColor = (count) => {
  if (count >= 12) return "#dc2626";
  if (count >= 9) return "#ea580c";
  if (count >= 6) return "#eab308";
  return "#65a30d";
};

// Define radius scale based on count
const getCircleRadius = (count) => {
  return count * 1000;
};

const GhanaMapComponent = ({ center, zoom, dataPoints, selectedMutant }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.setView(center, zoom);
    }
  }, [map, center, zoom]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      whenCreated={setMap}
      maxBounds={ghanaBounds}
      maxBoundsViscosity={1.0}
      minZoom={6}
      maxZoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {dataPoints.map((point, index) => (
        <div key={`marker-${index}`}>
          <Circle
            center={[point.lat, point.lng]}
            radius={getCircleRadius(point.count)}
            pathOptions={{
              fillColor: getCircleColor(point.count),
              fillOpacity: 0.5,
              color: getCircleColor(point.count),
              weight: 1,
            }}
          />
          <Marker position={[point.lat, point.lng]} icon={markerIcon}>
            <Popup>
              <div>
                <h3 className="font-medium">{point.region}</h3>
                <p>
                  {selectedMutant === "All"
                    ? `Total Mutants: ${point.count}`
                    : `${selectedMutant} Frequency: ${point.count}`}
                </p>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
};

export default GhanaMapComponent;
