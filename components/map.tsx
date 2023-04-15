import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Link from "next/link";
// @ts-ignore
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
require("@changey/react-leaflet-markercluster/dist/styles.min.css"); // inside .js file

const Map = () => {
  return (
    <MapContainer
      center={[50, 16]}
      zoom={4}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "672px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        <Marker position={[48.1569, 17.12192]}>
          <Popup>
            🇸🇰 Good Times Coffee Roasters <br />
            <Link href="/coffee/good-times-coffee-finca-potosi">
              <div className="text-center mt-1">🇨🇴 Finca Potosí</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[52.54, 13.40538]}>
          <Popup>
            🇩🇪 Bonanza Coffee Roasters <br />
            <Link href="/coffee/bonanza-sasaba">
              <div className="text-center mt-1">🇪🇹 Sasaba</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[48.85452, 16.04826]}>
          <Popup>
            🇨🇿 BALANCE coffee & wine <br />
            <Link href="/coffee/balance-agaro-jimma">
              <div className="text-center mt-1">🇪🇹 Agaro & Jimma</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[54.6823, 25.26538]}>
          <Popup>
            🇱🇹 Taste Map Coffee Roasters <br />
            <Link href="/coffee/masira-taste-map">
              <div className="text-center mt-1">🇺🇬 Masira</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[48.21486, 16.36189]}>
          <Popup>
            🇦🇹 Jonas Reindl Coffee Roasters <br />
            <Link href="/coffee/dumtu-village-jonas-reindl">
              <div className="text-center mt-1">🇪🇹 Dimtu Village</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[48.21729, 16.35114]}>
          <Popup>
            🇦🇹 CoffeePirates <br />
            <Link href="/coffee/coffeepirates-las-lajas">
              <div className="text-center mt-1">🇨🇷 Las Lajas</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[46.20298, 6.16009]}>
          <Popup>
            🇨🇭 Corde Coffee <br />
            <Link href="/coffee/corde-serrano">
              <div className="text-center mt-1">🇨🇺 Serrano</div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={[36.04503, 14.23905]}>
          <Popup>
            🇲🇹 Victoria Central (Vicky Coffee) <br />
            <Link href="/coffee/microlot-vicky-coffee">
              <div className="text-center mt-1">🇷🇼 Microlot #3</div>
            </Link>
          </Popup>
        </Marker>
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
