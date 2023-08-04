import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const position: [number, number] = [44.8178131, 20.4375];
  return (
    <MapContainer center={position} zoom={12} style={{ width: '100%', height: '86vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
