import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  outline: none;
  border: none;
  margin: 20px 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.35)
  );
  border-radius: 18px;
  box-shadow: 0px 8px 24px 0 rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 16px;
  font-size: 14px;
  transition: box-shadow 0.3s, outline 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.3s;
    text-align: left;
    font-style: italic;
    padding-left: 10px;
  }

  &:hover {
    box-shadow: 0px 8px 12px 0 rgba(0, 0, 0, 0.3);
  }

  &:focus::placeholder {
    transform: translateX(150px);
    opacity: 0;
  }

  &:not(:placeholder-shown)::placeholder {
    transform: translateX(150px);
    opacity: 0;
  }
`;
