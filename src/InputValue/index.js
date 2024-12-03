import { Input, Container } from "./styled";

export const InputValue = ({ onInputValue, value }) => {
  return (
    <Container>
      <Input
        id="convertValue"
        type="number"
        name="value"
        onChange={(e) => onInputValue(e.target.name, e.target.value)}
        value={value}
        min="0"
        step="any"
        placeholder="Enter the amount in PLN"
      />
    </Container>
  );
};
