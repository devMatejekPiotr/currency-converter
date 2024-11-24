import { useState } from "react";
import { ConvertValue } from "../ConvertValue/ConvertValue";
import { InputValue } from "../InputValue/InputValue";
import { RenderValue } from "../RenderValue";
import "./style.css";
import { countCurrencyValue } from "../utils/countCaurencyValue";
import { initValue } from "../utils/mockInitValue";
import { rates } from "../exampleRates";

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
    <form onSubmit={handleSubmit} className="form">
      <ConvertValue
        onSelectValue={handleChange}
        nameDirection="fromCurrency"
        value={selectedValue.fromCurrency}
        title="Convert from:"
      />
      <ConvertValue
        onSelectValue={handleChange}
        nameDirection="toCurrency"
        value={selectedValue.toCurrency}
        title="Convert to:"
      />
      <div className="form__spacer" aria-hidden="true"></div>
      <InputValue value={selectedValue.value} onInputValue={handleChange} />
      <div className="form__spacer" aria-hidden="true"></div>
      <RenderValue error={error} resultValue={result} />
      <button className="form__button" type="submit">
        Convert
      </button>
    </form>
  );
};
