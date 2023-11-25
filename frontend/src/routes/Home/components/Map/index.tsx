import { useLoaderData } from "react-router-dom";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const devices = useLoaderData();

  let devicesWithCoords = [];
  if (Array.isArray(devices)) {
    devicesWithCoords = devices.filter(device => device.latitude && device.longitude);
  }

  return (
    <MapContainer center={[55.733842, 37.588144]} zoom={10} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {devicesWithCoords.map((device) => <Marker key={device.number} position={[device.longitude, device.latitude]} />)}
      <ZoomControl position="topright" />
    </MapContainer>
  );
}
