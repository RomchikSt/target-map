import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { selectPosition, selectZoom } from "../features/map/mapSelectors";
import MapUpdater from "./MapUpdater";
import ZoomUpdater from "./ZoomUpdater";

function Map() {
  const zoom = useSelector(selectZoom);
  const position = useSelector(selectPosition);
  const deathZoneIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/RomchikSt/full-portfolio/master/Websites/target-map/public/img/mainTarget.png",
    iconSize: [35, 35],
  });

  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      zoom={zoom}
      center={position}
      scrollWheelZoom={true}
      zoomControl={false}
      minZoom={3}
      maxZoom={18}
    >
      <MapUpdater />
      <ZoomUpdater />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[55.751244, 37.618423]} icon={deathZoneIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
