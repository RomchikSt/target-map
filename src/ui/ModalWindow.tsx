import styled from "styled-components";

type ModalWindowProps = {
  onClick: () => void;
  children?: React.ReactNode;
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
  opacity: 0.9;
  border-radius: 2rem;
  overflow-y: auto;
`;

function ModalWindow({ children, onClick }: ModalWindowProps) {
  const handleModalContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ModalBackground onClick={onClick}>
      <ModalContainer onClick={handleModalContainerClick}>ddd</ModalContainer>
    </ModalBackground>
  );
}

export default ModalWindow;
