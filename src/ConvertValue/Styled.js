import styled from "styled-components";

export const LabelSelect = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const Select = styled.select`
  margin: 30px 0;
  border: none;
  border-radius: 18px;
  box-shadow: 0px 8px 24px 0 rgba(0, 0, 0, 0.3);
  outline: none;
  padding: 5px;
  display: block;
  width: 100%;
  text-align: center;
`;
