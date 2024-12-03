import { Clock } from "../Clock/index";
import { Container } from "../Container/index";
import { Form } from "../Form/index";
import { useCurrentDate } from "../hook/useCurrentDate";
import { Legend } from "./Styled";

function App() {
  const date = useCurrentDate();

  return (
    <Container>
      <Legend>Currency Converter</Legend>
      <Clock date={date} />
      <Form />
    </Container>
  );
}

export default App;
