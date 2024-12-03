export const countCurrencyValue = (rates, selectedValue) => {
  const { toCurrency, value } = selectedValue;
  const numberFloatValue = parseFloat(value);
  console.log("vallue", numberFloatValue);
  const resultOfValidation = validateCurrency(value);
  console.log("konwerter", resultOfValidation);
  console.log("rates", rates);
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
