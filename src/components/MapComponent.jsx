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

// Define color scale based on count
const getCircleColor = (count) => {
  if (count >= 12) return "#dc2626"; // High prevalence - red
  if (count >= 9) return "#ea580c"; // Medium-high - orange
  if (count >= 6) return "#eab308"; // Medium - yellow
  return "#65a30d"; // Low - green
};

// Define radius scale based on count
const getCircleRadius = (count) => {
  return count * 3000; // Scale radius based on count
};

const GhanaMapComponent = ({ center, zoom, dataPoints, selectedMutant }) => {
  // State for the map instance
  const [map, setMap] = useState(null);

  // Update the map view if center or zoom changes
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
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Data point markers and circles */}
      {dataPoints.map((point, index) => (
        <div key={`marker-${index}`}>
          {/* Circle showing prevalence intensity */}
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

          {/* Marker with popup */}
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
