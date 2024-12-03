import styled from "styled-components";

export const ClockStyled = styled.p`
  text-align: ${({ isExchange }) => (isExchange ? "center" : "center")};
  font-size: small;
  color: ${({ theme }) => theme.colors.clock};
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Bold = styled.span`
  font-weight: 600;
`;
