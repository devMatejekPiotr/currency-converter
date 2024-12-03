import { ConvertValue } from "../ConvertValue/index";
import { InputValue } from "../InputValue/index";
import { RenderValue } from "../RenderValue/index";
import { Clock } from "../Clock/index";
import { useFormLogic } from "../hook/useFormLogic";
import { Button, Spacer, StyledForm, Error } from "./styled";

export const Form = () => {
  const {
    selectedValue,
    handleChange,
    handleSubmit,
    result,
    error,
    isShown,
    errorMessage,
    currencyData,
  } = useFormLogic();

  return errorMessage ? (
    <Error>{errorMessage}</Error>
  ) : (
    <StyledForm onSubmit={handleSubmit}>
      <ConvertValue
        onSelectValue={handleChange}
        nameDirection="toCurrency"
        value={selectedValue.toCurrency}
        currencyData={currencyData}
      />
      <Spacer aria-hidden="true" />
      <InputValue value={selectedValue.value} onInputValue={handleChange} />
      <Spacer aria-hidden="true" />
      <RenderValue
        error={error}
        resultValue={result}
        currencyData={currencyData}
        selectedValue={selectedValue}
        isShown={isShown}
      />
      <Button type="submit">Convert</Button>
      <Clock date={currencyData.data} isExchange={true} />
    </StyledForm>
  );
};
