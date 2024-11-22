import { Container } from "./Container";
import { Form } from "./Form/Form";

function App() {
  return (
    <Container>
      <legend className="container__legend">Currency Converter</legend>
      <Form />
    </Container>
  );
}

export default App;
