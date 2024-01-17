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

const RowStyled = styled.div`
  display: flex;
`;

function ModalWindow({ header, onClick, text }: ModalWindowProps) {
  const { t } = useTranslation();
  const handleModalContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ModalBackground onClick={onClick}>
      <ModalBox onClick={handleModalContainerClick}>
        <StyledModalContainer>
          <StyledModalHeader>
            <h2>{header}</h2>
            <p>{text}</p>
          </StyledModalHeader>
          <div>
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
              <p> - {t("oilAndGasFacility")}</p>
            </RowStyled>
            <RowStyled>
              <p> - {t("otherTargets")}</p>
            </RowStyled>
          </div>
        </StyledModalContainer>
      </ModalBox>
    </ModalBackground>
  );
}

export default ModalWindow;
