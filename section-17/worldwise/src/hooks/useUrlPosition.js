/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  return [mapLat || 19, mapLng || 19];
};
