import styled from "styled-components";

export const StyledForm = styled.form`
  text-align: center;
`;

export const Spacer = styled.div`
  background: rgba(255, 255, 255, 0.55);
  height: 2px;
  margin: 0 auto;
  width: 90%;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.35)
  );
  border: none;
  border-radius: 18px;
  box-shadow: 0px 8px 24px 0 rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 16px;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s, outline 0.3s;

  &:after {
    content: "";
    background-color: rgb(255, 255, 255, 0.5);
    display: block;
    height: 100px;
    width: 50px;
    position: absolute;
    left: -70px;
    top: -50%;
    transform: skewX(-15deg);
    transition: left 0.15s linear;
  }

  &:hover::after {
    left: 110%;
  }

  &:hover {
    box-shadow: 0px 8px 12px 0 rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: solid 3px rgba(255, 255, 255, 0.8);
  }
`;
