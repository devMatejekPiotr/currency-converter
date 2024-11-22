export const initValue = {
  fromCurrency: "PL",
  toCurrency: "PL",
  value: "",
};

export const countCurrencyValue = (rates, choosenValue) => {
  const { fromCurrency, toCurrency, value } = choosenValue;
  const numberFloatValue = parseFloat(value);
  const resultOfValidation = validateCurrency(fromCurrency, toCurrency, value);

  if (!resultOfValidation) {
    const result = (
      (numberFloatValue / rates[fromCurrency]) *
      rates[toCurrency]
    ).toFixed(2);

    return result;
  }

  return resultOfValidation;
};

const validateCurrency = (fromCurrency, toCurrency, value) => {
  if (value === "" || value === null) {
    return "You should give a value";
  }

  if (fromCurrency === toCurrency) {
    return "The currences should be diffrent from each other";
  }
};
