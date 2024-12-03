import { useState } from "react";
import { ConvertValue } from "../ConvertValue/ConvertValue";
import { InputValue } from "../InputValue/InputValue";
import { RenderValue } from "../RenderValue";
import { countCurrencyValue } from "../utils/countCaurencyValue";
import { initValue } from "../utils/mockInitValue";
import { rates } from "../exampleRates";
import { FormButton, FormSpacer, StyledForm } from "./Styled";

export const Form = () => {
  const [selectedValue, setSelectValue] = useState(initValue);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (name, value) => {
    setError("");
    setSelectValue((prevSelect) => ({ ...prevSelect, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentedValue = countCurrencyValue(rates, selectedValue);
    typeof currentedValue === "string"
      ? setError(currentedValue)
      : setResult(currentedValue);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ConvertValue
        onSelectValue={handleChange}
        nameDirection="toCurrency"
        value={selectedValue.toCurrency}
      />
      <FormSpacer aria-hidden="true"></FormSpacer>
      <InputValue value={selectedValue.value} onInputValue={handleChange} />
      <FormSpacer aria-hidden="true"></FormSpacer>
      <RenderValue error={error} resultValue={result} />
      <FormButton type="submit">Convert</FormButton>
    </StyledForm>
  );
};
