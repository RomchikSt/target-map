import { motion } from "framer-motion";
import styled from "styled-components";
import { SettingsModalWindowVariants } from "../animations/variants";
import { targetsImgInfo } from "../data/img";
import CheckBox from "../ui/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../features/map/mapSlice";
import {
  selectAirBases,
  selectAirFields,
  selectArmyBases,
  selectComandCenters,
  selectMilitaryFactories,
  selectNavalBases,
  selectOilAndGasFacilities,
  selectOtherTargets,
  selectPorts,
  selectResearchFacilities,
} from "../features/map/mapSelectors";

const StyledSettingsContainer = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  right: 7rem;
  width: 10rem;
  height: 30rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  z-index: 999;
  border: 1px solid #111111;
  box-shadow: 0 0.4rem 1.2rem #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.3rem;
`;

const StyledTargetsRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s;

  &:hover {
    scale: 1.5;
  }
`;

type TargetSetting = {
  cheacker: boolean;
  handler: () => void;
};

type TargetSettings = Record<string, TargetSetting>;

function SettingsModalWindow() {
  const dispatch = useDispatch();
  const commandCenters = useSelector(selectComandCenters);
  const armyBases = useSelector(selectArmyBases);
  const navalBases = useSelector(selectNavalBases);
  const airBases = useSelector(selectAirBases);
  const militaryFactories = useSelector(selectMilitaryFactories);
  const researchFacilities = useSelector(selectResearchFacilities);
  const airFields = useSelector(selectAirFields);
  const ports = useSelector(selectPorts);
  const oilAndGasFacilities = useSelector(selectOilAndGasFacilities);
  const otherTargets = useSelector(selectOtherTargets);

  const targetSettings: TargetSettings = {
    commandCenter: {
      cheacker: commandCenters,
      handler: () => dispatch(mapActions.setComandCenters(!commandCenters)),
    },
    armyBase: {
      cheacker: armyBases,
      handler: () => dispatch(mapActions.setArmyBases(!armyBases)),
    },
    navalBase: {
      cheacker: navalBases,
      handler: () => dispatch(mapActions.setNavalBases(!navalBases)),
    },
    airBase: {
      cheacker: airBases,
      handler: () => dispatch(mapActions.setAirBases(!airBases)),
    },
    militaryFactory: {
      cheacker: militaryFactories,
      handler: () =>
        dispatch(mapActions.setMilitaryFactories(!militaryFactories)),
    },
    researchFacility: {
      cheacker: researchFacilities,
      handler: () =>
        dispatch(mapActions.setResearchFacilities(!researchFacilities)),
    },
    airfield: {
      cheacker: airFields,
      handler: () => dispatch(mapActions.setAirFields(!airFields)),
    },
    port: {
      cheacker: ports,
      handler: () => dispatch(mapActions.setPorts(!ports)),
    },
    oilAndGasFacility: {
      cheacker: oilAndGasFacilities,
      handler: () =>
        dispatch(mapActions.setOilAndGasFacilities(!oilAndGasFacilities)),
    },
    otherTargets: {
      cheacker: otherTargets,
      handler: () => dispatch(mapActions.setOtherTargets(!otherTargets)),
    },
  };

  return (
    <StyledSettingsContainer
      variants={SettingsModalWindowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {targetsImgInfo.map((target, i) => {
        const setting =
          targetSettings[target.text as keyof typeof targetSettings];
        return i % 2 === 0 ? (
          <StyledTargetsRow key={target.text}>
            {setting && (
              <CheckBox
                onChange={setting.handler}
                isChecked={setting.cheacker}
              />
            )}
            <StyledImg src={target.src} />
          </StyledTargetsRow>
        ) : null;
      })}
      {targetsImgInfo.map((target, i) => {
        const setting =
          targetSettings[target.text as keyof typeof targetSettings];
        return i % 2 !== 0 ? (
          <StyledTargetsRow key={target.text}>
            {setting && (
              <CheckBox
                onChange={setting.handler}
                isChecked={setting.cheacker}
              />
            )}
            <StyledImg src={target.src} />
          </StyledTargetsRow>
        ) : null;
      })}
    </StyledSettingsContainer>
  );
}

export default SettingsModalWindow;
