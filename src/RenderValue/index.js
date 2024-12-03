import { Result, Error, Container, Bold } from "./styled";

export const RenderValue = ({
  resultValue,
  error,
  currencyData,
  selectedValue,
  isShown,
}) => {
  if (error) {
    return <Error>{error}</Error>;
  }

  if (currencyData.rates && resultValue && isShown) {
    const { toCurrency, value } = selectedValue;

    return (
      <Container>
        <Result>
          {value} PLN = <Bold>{`${resultValue} ${toCurrency}`}</Bold>
        </Result>
      </Container>
    );
  }
};
