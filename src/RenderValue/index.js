import { Result } from "./Styled";

export const RenderValue = ({ resultValue, error }) => {
  return <Result>{error || resultValue}</Result>;
};
