import Map from "../components/Map";
import StandartMapButton from "../ui/StandartMapButton";
import ZoomButton from "../ui/ZoomButton";
import styled from "styled-components";
import {
  selectLanguage,
  selectFilter,
  selectZoom,
  selectInfo,
  selectSettings,
} from "../features/map/mapSelectors";
import { useDispatch, useSelector } from "react-redux";
import { FaInfo, FaLocationArrow } from "react-icons/fa";
import {
  setChangeLanguage,
  setFilter,
  setInfo,
  setSettings,
  setZoom,
  setPosition,
} from "../features/map/mapSlice";
import { LuSettings2 } from "react-icons/lu";
import SearchInput from "../ui/SearchInput";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ModalWindow from "../ui/ModalWindow";
import { useState } from "react";
import GeoLoader from "../ui/GeoLoader";

const PageContainer = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  padding: 0.4rem;
`;

function TargetsPage() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const zoom = useSelector(selectZoom);
  const searchOpen = useSelector(selectFilter);
  const infoOpen = useSelector(selectInfo);
  const settingsOpen = useSelector(selectSettings);
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(false);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(language === "ua" ? "en" : "ua");
    if (language === "ua") dispatch(setChangeLanguage("en"));
    else dispatch(setChangeLanguage("ua"));
  };

  const handleZoomPlus = () => {
    if (zoom < 18 && zoom >= 3) dispatch(setZoom(zoom + 1));
  };

  const handleZoomMinus = () => {
    if (zoom <= 18 && zoom > 3) dispatch(setZoom(zoom - 1));
  };

  const handleOpenSearch = () => {
    dispatch(setFilter(!searchOpen));
  };

  const handleOpenInfo = () => {
    dispatch(setInfo(!infoOpen));
  };

  const handleOpenSettings = () => {
    dispatch(setSettings(!settingsOpen));
  };

  function handleGetLocation() {
    setIsFetchingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setPosition([latitude, longitude]));
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
    <PageContainer>
      <Map />
      <StandartMapButton top={"3rem"} left={"2rem"} onClick={handleOpenSearch}>
        <FaSearch size={"2rem"} />
      </StandartMapButton>
      <AnimatePresence>
        {searchOpen && <SearchInput top={"3.1rem"} left={"2rem"} />}
      </AnimatePresence>
      <StandartMapButton
        top={"3rem"}
        right={"2rem"}
        onClick={handleChangeLanguage}
      >
        <StyledImage
          src={language === "ua" ? "img/uaFlag.webp" : "img/ukFlag.webp"}
          alt={language === "ua" ? "Ukrainina flag" : "UK flag"}
        />
      </StandartMapButton>
      <StandartMapButton
        zIndex={infoOpen ? 9999 : 1000}
        top={"3rem"}
        right={"7.2rem"}
        onClick={handleOpenInfo}
      >
        <FaInfo size={"2.2rem"} />
      </StandartMapButton>
      {infoOpen && <ModalWindow onClick={handleOpenInfo} />}
      <StandartMapButton
        zIndex={settingsOpen ? 9999 : 1000}
        bottom={"17rem"}
        right={"2rem"}
        onClick={handleOpenSettings}
      >
        <LuSettings2 size={"2.2rem"} />
      </StandartMapButton>
      {settingsOpen && <ModalWindow onClick={handleOpenSettings} />}
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
    </PageContainer>
  );
}

export default TargetsPage;
