import styled from "styled-components";

export const Result = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  padding: 0;
`;

export const Error = styled.p`
  color: red;
`;

export const Container = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bold = styled.span`
  font-weight: 600;
`;
