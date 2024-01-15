import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { mapButtonVarints } from "../animations/variants";
import { useSelector } from "react-redux";
import { selectZoom } from "../features/map/mapSelectors";

const ButtonContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 3rem;
  right: 2rem;
  z-index: 1000;
  width: 4rem;
  height: 8rem;
  border-radius: 4rem;
  gap: 0.1rem;
  background-color: #111111;
  border: 1px solid #111111;
  box-shadow: 0 0.4rem 1.2rem #111111;
  transition: all 0.3s ease-in-out;
`;

const StyledButton = styled.button`
  height: 3.9rem;
  border: none;
  background-color: ${(props) => (props.$zoom ? "#d3d3d3" : "#fef2f2")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    font-size: 2rem;
  }

  &:active {
    font-size: 1.4rem;
    color: #111111;
    background-color: #fef2f2;
  }
`;

type StandartMapButtonProps = {
  zoomPlus: () => void;
  zoomMinus: () => void;
};

function ZoomButton({ zoomPlus, zoomMinus }: StandartMapButtonProps) {
  const zoom = useSelector(selectZoom);

  return (
    <ButtonContainer
      variants={mapButtonVarints}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "easeInOut", duration: 1 }}
    >
      <StyledButton
        $zoom={zoom === 18}
        onClick={zoomPlus}
        style={{
          borderTopLeftRadius: "4rem",
          borderTopRightRadius: "4rem",
        }}
      >
        <FaPlus />
      </StyledButton>
      <StyledButton
        $zoom={zoom === 3}
        onClick={zoomMinus}
        style={{
          borderBottomLeftRadius: "4rem",
          borderBottomRightRadius: "4rem",
        }}
      >
        <FaMinus />
      </StyledButton>
    </ButtonContainer>
  );
}

export default ZoomButton;
