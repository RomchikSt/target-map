import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
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
      "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/mainTarget.png",
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
  attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &amp; the <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
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
