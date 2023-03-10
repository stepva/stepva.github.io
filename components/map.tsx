import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Link from "next/link";

const Map = () => {
  return (
    <MapContainer
      center={[50, 16]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "672px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.1569, 17.12192]}>
        <Popup>Good Times Coffee Roasters</Popup>
      </Marker>
      <Marker position={[52.54, 13.40538]}>
        <Popup>
          <Link href="/">Bonanza Coffee Roasters</Link>
        </Popup>
      </Marker>
      <Marker position={[48.85452, 16.04826]}>
        <Popup>Balance coffee & wine</Popup>
      </Marker>
      <Marker position={[54.6823, 25.26538]}>
        <Popup>Taste Map Coffee Roasters</Popup>
      </Marker>
      <Marker position={[48.21486, 16.36189]}>
        <Popup>Jonas Reindl Coffee Roasters</Popup>
      </Marker>
      <Marker position={[48.21729, 16.35114]}>
        <Popup>CoffeePirates</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
