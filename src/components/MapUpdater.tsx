import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { selectPosition } from "../features/map/mapSelectors";

function MapUpdater() {
  const map = useMap();
  const position = useSelector(selectPosition);
  const zoom = 10;

  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom);
    }
  }, [position, map]);

  return null;
}

export default MapUpdater;
