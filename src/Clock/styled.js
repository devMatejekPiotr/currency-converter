import styled from "styled-components";

export const ClockStyled = styled.p`
  text-align: right;
  font-size: small;
  color: ${({ theme }) => theme.colors.clock};
  margin-top: 10px;
  margin-bottom: 30px;
`;
