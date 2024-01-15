import { useTranslation } from "react-i18next";
import styled from "styled-components";

type ModalWindowProps = {
  onClick: () => void;
  header: string;
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

const ModalContainer = styled.div`
  width: 30%;
  height: 50%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  border-radius: 2rem;
  overflow-y: auto;
`;

const RowStyled = styled.div`
  display: flex;
`;

function ModalWindow({ header, onClick }: ModalWindowProps) {
  const { t } = useTranslation();
  const handleModalContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ModalBackground onClick={onClick}>
      <ModalContainer onClick={handleModalContainerClick}>
        <>
          <h2>{header}</h2>
          <RowStyled>
            <p> - {t("mainTarget")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("comandCenter")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("armyBase")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("navalBase")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("airbase")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("militaryFactory")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("researchFacility")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("airfield")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("port")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("energyFacility")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("oilAndGasFacility")}</p>
          </RowStyled>
          <RowStyled>
            <p> - {t("otherTargets")}</p>
          </RowStyled>
        </>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ModalWindow;
