import StandartMapButton from "../ui/StandartMapButton";
import ZoomButton from "../ui/ZoomButton";
import { selectZoom, selectSettings } from "../features/map/mapSelectors";
import { useDispatch, useSelector } from "react-redux";
import { FaLocationArrow } from "react-icons/fa";
import { mapActions } from "../features/map/mapSlice";
import { LuSettings2 } from "react-icons/lu";
import { useState } from "react";
import GeoLoader from "../ui/GeoLoader";
import { GiNuclearBomb } from "react-icons/gi";
import SettingsModalWindow from "../ui/SettingsModalWindow";
import { AnimatePresence } from "framer-motion";

function BottomRightButtons() {
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);
  const settingsOpen = useSelector(selectSettings);
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(false);

  const handleZoomPlus = () => {
    if (zoom < 18 && zoom >= 3) dispatch(mapActions.setZoom(zoom + 1));
  };

  const handleZoomMinus = () => {
    if (zoom <= 18 && zoom > 3) dispatch(mapActions.setZoom(zoom - 1));
  };

  const handleOpenSettings = () => {
    dispatch(mapActions.setSettings(!settingsOpen));
  };

  const handleResetPosition = () => {
    dispatch(mapActions.setResetPosition());
  };

  function handleGetLocation() {
    setIsFetchingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(mapActions.setPosition([latitude, longitude]));
          setIsFetchingLocation(false);
          console.log("Your current location:", [latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          setIsFetchingLocation(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsFetchingLocation(false);
    }
  }

  return (
    <>
      <StandartMapButton zIndex={1000} bottom={"27rem"} right={"2rem"}>
        <GiNuclearBomb size={"2.8rem"} />
      </StandartMapButton>
      <StandartMapButton
        zIndex={1000}
        bottom={"22rem"}
        right={"2rem"}
        onClick={handleResetPosition}
      >
        <img
          src="https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/mainTarget.png"
          height={"28rem"}
          width={"28rem"}
        ></img>
      </StandartMapButton>
      <StandartMapButton
        zIndex={1000}
        bottom={"17rem"}
        right={"2rem"}
        onClick={handleOpenSettings}
      >
        <LuSettings2 size={"2.2rem"} />
      </StandartMapButton>
      <AnimatePresence>
        {settingsOpen && <SettingsModalWindow />}
      </AnimatePresence>
      <StandartMapButton
        bottom={"12rem"}
        right={"2rem"}
        onClick={handleGetLocation}
      >
        {isFetchingLocation ? (
          <GeoLoader />
        ) : (
          <FaLocationArrow
            size={"2.2rem"}
            style={{
              marginTop: "0.2rem",
              marginRight: "0.2rem",
            }}
          />
        )}
      </StandartMapButton>
      <ZoomButton zoomPlus={handleZoomPlus} zoomMinus={handleZoomMinus} />
    </>
  );
}

export default BottomRightButtons;
