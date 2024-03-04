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
            <Link href="https://maps.app.goo.gl/pg6f4oqygBCvYHxW9">
              🇸🇰 Good Times Coffee Roasters <br />
            </Link>
            My first specialty coffee...
          </Popup>
        </Marker>
        <Marker position={[52.54, 13.40538]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/q7y9M8ssauXtakKT9">
              🇩🇪 Bonanza Coffee Roasters <br />
            </Link>
            Great roastery in Berlin, introduced to me by Amelie
          </Popup>
        </Marker>
        <Marker position={[48.85452, 16.04826]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/EFoKWYejW8pZ7wJp8">
              🇨🇿 BALANCE coffee & wine <br />
            </Link>
            Amazing place with brunches in Znojmo, owned by my friend&apos;s
            sister
          </Popup>
        </Marker>
        <Marker position={[54.6823, 25.26538]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/myYHuUopQ6VRHJBC6">
              🇱🇹 Taste Map Coffee Roasters <br />
            </Link>
            Never visited, but Kacka brought me delicious coffee from them
          </Popup>
        </Marker>
        <Marker position={[48.21486, 16.36189]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/KPQWe3F8yQGdj1di7">
              🇦🇹 Jonas Reindl Coffee Roasters <br />
            </Link>
            My top favourite coffee in Vienna
          </Popup>
        </Marker>
        <Marker position={[48.21729, 16.35114]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/e2wcLD9DfjBtktDV8">
              🇦🇹 CoffeePirates <br />
            </Link>
            Had a really special coffee from them
          </Popup>
        </Marker>
        <Marker position={[46.20298, 6.16009]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/Eud9FPgLkVvFNqkq8">
              🇨🇭 Corde Coffee <br />
            </Link>
            Amazing memories from my trip to Geneva, friendly owner and staff
          </Popup>
        </Marker>
        <Marker position={[36.04503, 14.23905]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/twS2cDhonJPpEBF87">
              🇲🇹 Victoria Central (Vicky Coffee) <br />
            </Link>
            Treasure discovered on Malta, friendly staff and great coffee
          </Popup>
        </Marker>
        <Marker position={[48.21449, 16.40304]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/jJT6RUgyQLSdNkBK7">
              🇦🇹 Wiener Rösthaus <br />
            </Link>
            Touristy location, but insanely good selection of great coffee, I
            was a regular for a year
          </Popup>
        </Marker>
        <Marker position={[52.62944, 1.29287]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/FBFRP2o57Jb2o7YL7">
              🇬🇧 Strangers Coffee Company <br />
            </Link>
            Not visited yet, but Jordan has always brought me great espresso
            roasts
          </Popup>
        </Marker>
        <Marker position={[48.2124, 16.37077]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/uSPkdeU7WReZZLfc9">
              🇦🇹 Kaffein <br />
            </Link>
            My flatmate worked there, fancy place and a lot of coffee
          </Popup>
        </Marker>
        <Marker position={[50.08877, 14.43348]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/4BydMYZVUUCv1pEc8">
              🇨🇿 EMA espresso bar <br />
            </Link>
            A classic in Prague, great coffee, multiple locations and regular
            cuppings!
          </Popup>
        </Marker>
        <Marker position={[50.03403, 15.76249]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/yYLYMrJV5Z1i9LJi7">
              🇨🇿 Putovní Pražírna <br />
            </Link>
            My regular bike stop, lots of coffee and great cakes
          </Popup>
        </Marker>
        <Marker position={[37.1762263, -3.6001362]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/84EXo7netcK5X48h8">
              🇪🇸 La Finca <br />
            </Link>
            Best café in Granada, also met Casper Pedrsen there
          </Popup>
        </Marker>
        <Marker position={[50.03403, 15.76249]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/7EveJnCycAJMii1u5">
              🇨🇿 Zrníčko <br />
            </Link>
            My parents got me plenty of coffee from there, nice Christmas
            specials
          </Popup>
        </Marker>
        <Marker position={[48.28783, 17.26955]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/nYDgoDYKki5R59V96">
              🇸🇰 Bozin Roastery <br />
            </Link>
            My parents visited it and brought home a lot of coffee from this
            small Slovak roastery
          </Popup>
        </Marker>
        <Marker position={[46.0469803, 14.5042002]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/E6Xh3eRrxKQj7GHe7">
              🇸🇮 Stow <br />
            </Link>
            We stopped there on a roadtrip from Istria, hidden location under a
            museum, but really good coffee
          </Popup>
        </Marker>
        <Marker position={[52.4936763, 13.4271241]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/FKgU8m7tCL7ZWAkh8">
              🇩🇪 Populus Coffee <br />
            </Link>
            Haven&apos;t been but got a really funky coffee from them at a
            cupping in EMA
          </Popup>
        </Marker>
        <Marker position={[49.1897945, 16.6164859]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/j5Wsuy96DDvjfPBHA">
              🇨🇿 Rebelbean <br />
            </Link>
            Christmas present from my parents, tried some really good roasts
            from them
          </Popup>
        </Marker>
        <Marker position={[52.4936763, 13.4271241]}>
          <Popup>
            <Link href="https://maps.app.goo.gl/NU6EsA8wbC3D5yqm8">
              🇪🇸 Syra Coffee <br />
            </Link>
            My favourite Spanish roastery, really enjoying them
          </Popup>
        </Marker>
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
