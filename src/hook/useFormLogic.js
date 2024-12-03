import { useState } from "react";
import { useFetchData } from "./useFetchData";
import { countCurrencyValue } from "../utils/countCaurencyValue";
import { initValue } from "../utils/mockInitValue";

export const useFormLogic = () => {
  const [selectedValue, setSelectValue] = useState(initValue);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isShown, setIsShown] = useState(false);

  const { currencyData, errorMessage } = useFetchData();

  const handleChange = (name, value) => {
    setIsShown(false);
    setError("");
    setSelectValue((prevSelect) => ({ ...prevSelect, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(currencyData);
    console.log(selectedValue);
    const currentedValue = countCurrencyValue(
      currencyData.rates,
      selectedValue
    );

    typeof currentedValue === "string"
      ? setError(currentedValue)
      : setResult(currentedValue);

    setIsShown(true);
  };

  return {
    selectedValue,
    handleChange,
    handleSubmit,
    result,
    error,
    isShown,
    errorMessage,
    currencyData,
  };
};
