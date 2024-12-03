import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  box-shadow: 0px 8px 24px 0 rgba(0, 0, 0, 0.3);
  background-color: white;
  top: 59px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border-radius: 15px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const colorChange = keyframes`
  0% {
    border-top-color: #3498db;
  }
  50% {
    border-top-color: #f1c40f;
  }
   100% {
    border-top-color: #3498db;
  }
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid transparent;
  border-top: 10px solid #3498db;
  animation: ${spin} 2s linear infinite, ${colorChange} 2s ease infinite;
`;
