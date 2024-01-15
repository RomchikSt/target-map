import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setZoom } from "../features/map/mapSlice";
import { selectZoom } from "../features/map/mapSelectors";

function ZoomUpdater() {
  const map = useMap();
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);

  useEffect(() => {
    const updateZoomInRedux = () => {
      const newZoom = map.getZoom();
      dispatch(setZoom(newZoom));
    };
    map.setZoom(zoom);
    map.on("zoomend", updateZoomInRedux);

    return () => {
      map.off("zoomend", updateZoomInRedux);
    };
  }, [map, dispatch, zoom]);

  return null;
}

export default ZoomUpdater;
