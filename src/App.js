import { Container } from "./Container";
import { Form } from "./Form/index";

function App() {
  return (
    <Container>
      <legend className="container__legend">Currency Converter</legend>
      <Form />
    </Container>
  );
}

export default App;
