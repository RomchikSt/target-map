import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { mapActions } from "../features/map/mapSlice";
import { useDispatch } from "react-redux";

type ModalWindowProps = {
  onClick: () => void;
  header: string;
  text?: string;
};

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2222;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBox = styled.div`
  width: 60rem;
  height: 45rem;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  border-radius: 2rem;
  overflow-y: auto;
`;

const StyledModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem;
  height: 100%;
`;

const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;
const StyledMainTargetContainer = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 1rem;
  width: 20rem;
  transition: all 0.3s;

  &:hover {
    scale: 1.05;
    border: 1px solid #ff0000;
  }
  &:active {
    scale: 0.95;
    border: 1px solid #ff0000;
  }
`;
const StyledTargetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const StyledTargetsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCloseButton = styled(IoIosCloseCircleOutline)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 3rem;
  color: #000;
  transition: all 0.3s;
  &:hover {
    color: #ff0000;
    scale: 1.1;
  }
  &:active {
    color: #ff0000;
    scale: 0.9;
  }
`;

function InfoModalWindow({ header, onClick, text }: ModalWindowProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleModalContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleMainPosition = () => {
    dispatch(mapActions.setResetPosition());
    onClick();
  };

  const targets = [
    {
      //1
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/commandCenter.png",
      text: "comandCenter",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/researchFacility.png",
      text: "researchFacility",
    },
    {
      //2
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/armyBase.png",
      text: "armyBase",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/airField.png",
      text: "airfield",
    },
    {
      //3
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/navalBase.webp",
      text: "navalBase",
    },

    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/port.png",
      text: "port",
    },
    {
      //4
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/airBase.png",
      text: "airbase",
    },

    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/oilAndGasFacilities.png",
      text: "oilAndGasFacility",
    },
    {
      //5
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/militaryFactory.png",
      text: "militaryFactory",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/otherTarget.png",
      text: "otherTargets",
    },
  ];

  return (
    <ModalBackground onClick={onClick}>
      <ModalBox onClick={handleModalContainerClick}>
        <StyledModalContainer>
          <StyledCloseButton onClick={onClick} />
          <StyledModalHeader>
            <h2>{header}</h2>
            <p>{text}</p>
          </StyledModalHeader>
          <StyledMainTargetContainer>
            <StyledTargetsRow onClick={handleMainPosition}>
              <img
                src="https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/mainTarget.png"
                height={"24rem"}
                width={"24rem"}
              ></img>
              <p> - {t("mainTarget")}</p>
            </StyledTargetsRow>
          </StyledMainTargetContainer>
          <StyledTargetContainer>
            {targets.map((target) => (
              <StyledTargetsRow key={target.text}>
                <img src={target.src} height={"24rem"} width={"24rem"}></img>
                <p> - {t(target.text)}</p>
              </StyledTargetsRow>
            ))}
          </StyledTargetContainer>
        </StyledModalContainer>
      </ModalBox>
    </ModalBackground>
  );
}

export default InfoModalWindow;
