import React from "react";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  setSearchParams;
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Position : {lat}, {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change
      </button>
    </div>
  );
};
