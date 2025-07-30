import { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../context/CitiesContext";
// eslint-disable-next-line no-unused-vars

export const Map = () => {
  const navigate = useNavigate();
  /* eslint-disable no-unused-vars */
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();

  const [mapPosition, setMapPosition] = useState([19, 19]);
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(() => {
    setMapPosition([mapLat || 19, mapLng || 19]);
  }, [mapLat, mapLng]);
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <MapContainer
        center={mapPosition} // center={[mapLat || 19, mapLng || 19]}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          <Marker position={[city.lat, city.lng]} key={city.id}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>;
        })}
        <ChangeCenter position={[mapLat || 19, mapLng || 19]} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent("click", (e) => {
    navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
  });
}
