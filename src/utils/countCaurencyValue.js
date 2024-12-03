export const countCurrencyValue = (rates, choosenValue) => {
  const { toCurrency, value } = choosenValue;
  const numberFloatValue = parseFloat(value);
  const resultOfValidation = validateCurrency(value);

  if (!resultOfValidation) {
    const result = (numberFloatValue / rates[toCurrency]).toFixed(2);
    return result;
  }

  return resultOfValidation;
};

const validateCurrency = (value) => {
  if (value === "" || value === null) {
    return "You should give a value";
  }
};