import { motion } from "framer-motion";
import styled from "styled-components";
import { SettingsModalWindowVariants } from "../animations/variants";
import { targetsImgInfo } from "../data/img";
import CheckBox from "./CheckBox";

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

function SettingsModalWindow() {
  return (
    <StyledSettingsContainer
      variants={SettingsModalWindowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {targetsImgInfo.map((target, i) =>
        i % 2 === 0 ? (
          <StyledTargetsRow key={target.text}>
            <CheckBox />
            <StyledImg src={target.src} />
          </StyledTargetsRow>
        ) : null
      )}
      {targetsImgInfo.map((target, i) =>
        i % 2 !== 0 ? (
          <StyledTargetsRow key={target.text}>
            <CheckBox />
            <StyledImg src={target.src}></StyledImg>
          </StyledTargetsRow>
        ) : null
      )}
    </StyledSettingsContainer>
  );
}

export default SettingsModalWindow;
