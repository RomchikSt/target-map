import StandartMapButton from "../ui/StandartMapButton";
import styled from "styled-components";
import {
  selectLanguage,
  selectInfo,
  selectSettings,
} from "../features/map/mapSelectors";
import { useDispatch, useSelector } from "react-redux";
import { FaInfo } from "react-icons/fa";
import { mapActions } from "../features/map/mapSlice";
import { useTranslation } from "react-i18next";
import InfoModalWindow from "./InfoModalWindow";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  padding: 0.4rem;
`;

function TopRightsButtons() {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const infoOpen = useSelector(selectInfo);
  const settingsOpen = useSelector(selectSettings);

  useEffect(() => {
    const currentLang = i18n.language;
    dispatch(mapActions.setChangeLanguage(currentLang));
  }, [i18n.language, dispatch]);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(language === "ua" ? "en" : "ua");
    if (language === "ua") dispatch(mapActions.setChangeLanguage("en"));
    else dispatch(mapActions.setChangeLanguage("ua"));
  };

  const handleOpenInfo = () => {
    dispatch(mapActions.setInfo(!infoOpen));
  };

  return (
    <>
      <StandartMapButton
        zIndex={infoOpen ? 9999 : 1000}
        top={"3rem"}
        right={"7.2rem"}
        onClick={handleOpenInfo}
      >
        <FaInfo size={"2.2rem"} />
      </StandartMapButton>
      <AnimatePresence>
        {infoOpen && (
          <InfoModalWindow
            onClick={handleOpenInfo}
            header={t("infoHeader")}
            text={t("infoDesc")}
          />
        )}
      </AnimatePresence>
      <StandartMapButton
        top={"3rem"}
        right={"2rem"}
        zIndex={settingsOpen || infoOpen ? 9999 : 1000}
        onClick={handleChangeLanguage}
      >
        <StyledImage
          src={language === "ua" ? "img/uaFlag.webp" : "img/ukFlag.webp"}
          alt={language === "ua" ? "UK flag" : "Ukrainina flag"}
        />
      </StandartMapButton>
    </>
  );
}

export default TopRightsButtons;
