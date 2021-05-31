import styled from "styled-components";

const Modal = styled.div`
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, 0.7);
  transition: all 0.4s;
`;

const ModalContent = styled.div`
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  padding: 1rem 2rem;
  background: #fff;
  img {
    margin: 10px auto;
    display: block;
    width: auto;
    height: 100px;
    border-radius: 10px;
    object-fit: contain;
  }
  p {
    padding: 5px;
  }
  .header {
    margin: 10px 0;
    h1 {
      font-size: 25px;
      font-weight: 500;
    }
  }
`;

const ModalClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export { Modal, ModalClose, ModalContent };
