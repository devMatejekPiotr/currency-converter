export const countCurrencyValue = (rates, choosenValue) => {
  const { toCurrency, value } = choosenValue;
  const numberFloatValue = parseFloat(value);
  const resultOfValidation = validateCurrency(value);

  if (!resultOfValidation) {
    const result = Number(
      (numberFloatValue / rates[toCurrency].value).toFixed(3)
    );
    return result;
  }

  return resultOfValidation;
};

const validateCurrency = (value) => {
  if (value === "" || value === null) {
    return "You should give a value";
  }
};
