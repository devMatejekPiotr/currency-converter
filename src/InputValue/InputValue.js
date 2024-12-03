import { Input, InputContainer } from "./Styled";

export const InputValue = ({ onInputValue, value }) => {
  return (
    <InputContainer>
      <Input
        id="convertValue"
        type="number"
        name="value"
        onChange={(e) => onInputValue(e.target.name, e.target.value)}
        value={value}
        min="0"
        step="any"
        placeholder="Enter value"
      />
    </InputContainer>
  );
};
