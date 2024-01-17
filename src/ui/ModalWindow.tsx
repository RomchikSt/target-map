import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
  width: 30%;
  height: 50%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  border-radius: 2rem;
  overflow-y: auto;
`;

const StyledModalContainer = styled.div`
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
const StyledModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RowStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function ModalWindow({ header, onClick, text }: ModalWindowProps) {
  const { t } = useTranslation();
  const handleModalContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const targets = [
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/mainTarget.png",
      text: "mainTarget",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/commandCenter.png",
      text: "comandCenter",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/armyBase.png",
      text: "armyBase",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/navalBase.webp",
      text: "navalBase",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/airBase.png",
      text: "airbase",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/militaryFactory.png",
      text: "militaryFactory",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/researchFacility.png",
      text: "researchFacility",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/airField.png",
      text: "airfield",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/port.png",
      text: "port",
    },
    {
      src: "https://raw.githubusercontent.com/RomchikSt/target-map/master/public/img/oilAndGasFacilities.png",
      text: "oilAndGasFacility",
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
          <StyledModalHeader>
            <h2>{header}</h2>
            <p>{text}</p>
          </StyledModalHeader>
          <StyledModalText>
            {targets.map((target) => (
              <RowStyled>
                <img src={target.src} height={"24rem"} width={"24rem"}></img>
                <p> - {t(target.text)}</p>
              </RowStyled>
            ))}
          </StyledModalText>
        </StyledModalContainer>
      </ModalBox>
    </ModalBackground>
  );
}

export default ModalWindow;
