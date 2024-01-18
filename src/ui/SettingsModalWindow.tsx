import styled from "styled-components";

const StyledSettingsContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 7rem;
  width: 10rem;
  height: 28rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  z-index: 999;
  border: 1px solid #111111;
  box-shadow: 0 0.4rem 1.2rem #111111;
`;

function SettingsModalWindow() {
  return <StyledSettingsContainer></StyledSettingsContainer>;
}

export default SettingsModalWindow;
