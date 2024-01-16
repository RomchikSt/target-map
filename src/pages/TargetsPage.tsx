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
import { mapActions } from "../features/map/mapSlice";
import { LuSettings2 } from "react-icons/lu";
import SearchInput from "../ui/SearchInput";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ModalWindow from "../ui/ModalWindow";
import { useState } from "react";
import GeoLoader from "../ui/GeoLoader";
import { GiNuclearBomb } from "react-icons/gi";

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
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const zoom = useSelector(selectZoom);
  const searchOpen = useSelector(selectFilter);
  const infoOpen = useSelector(selectInfo);
  const settingsOpen = useSelector(selectSettings);
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(false);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(language === "ua" ? "ua" : "en");
    if (language === "ua") dispatch(mapActions.setChangeLanguage("en"));
    else dispatch(mapActions.setChangeLanguage("ua"));
  };

  const handleZoomPlus = () => {
    if (zoom < 18 && zoom >= 3) dispatch(mapActions.setZoom(zoom + 1));
  };

  const handleZoomMinus = () => {
    if (zoom <= 18 && zoom > 3) dispatch(mapActions.setZoom(zoom - 1));
  };

  const handleOpenSearch = () => {
    dispatch(mapActions.setFilter(!searchOpen));
  };

  const handleOpenInfo = () => {
    dispatch(mapActions.setInfo(!infoOpen));
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
        zIndex={settingsOpen || infoOpen ? 9999 : 1000}
        onClick={handleChangeLanguage}
      >
        <StyledImage
          src={language === "ua" ? "img/ukFlag.webp" : "img/uaFlag.webp"}
          alt={language === "ua" ? "UK flag" : "Ukrainina flag"}
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
      {infoOpen && <ModalWindow onClick={handleOpenInfo} header={"Info"} />}
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
          src="https://raw.githubusercontent.com/RomchikSt/full-portfolio/master/Websites/target-map/public/img/mainTarget.png"
          height={"28rem"}
          width={"28rem"}
        ></img>
      </StandartMapButton>
      <StandartMapButton
        zIndex={settingsOpen ? 9999 : 1000}
        bottom={"17rem"}
        right={"2rem"}
        onClick={handleOpenSettings}
      >
        <LuSettings2 size={"2.2rem"} />
      </StandartMapButton>
      {settingsOpen && (
        <ModalWindow onClick={handleOpenSettings} header={t("settings")} />
      )}
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
