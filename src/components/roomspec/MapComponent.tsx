// src/components/roomspec/MapComponent.tsx
"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define custom pin icon for marker
const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Use any custom pin URL or import your pin image
  iconSize: [38, 38], // Adjust the size as needed
  iconAnchor: [19, 38], // Adjust the anchor point to be at the bottom of the icon
  popupAnchor: [0, -38], // Adjust the popup anchor to be above the icon
});

type MapComponentProps = {
  coordinates: [number, number] | null;
  setCoordinates: (coords: [number, number]) => void;
  setHomeAddress: (address: string) => void;
};

const LocationMarker: React.FC<MapComponentProps> = ({ coordinates, setCoordinates, setHomeAddress }) => {
  useMapEvents({
    click(e) {
      setCoordinates([e.latlng.lat, e.latlng.lng]);
      setHomeAddress(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
    },
  });

  return coordinates === null ? null : <Marker position={coordinates} icon={icon}></Marker>;
};

const MapComponent: React.FC<MapComponentProps> = ({ coordinates, setCoordinates, setHomeAddress }) => {
  return (
    <MapContainer center={coordinates || [51.505, -0.09]} zoom={13} className="h-64 mb-4">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker coordinates={coordinates} setCoordinates={setCoordinates} setHomeAddress={setHomeAddress} />
    </MapContainer>
  );
};

export default MapComponent;
