import { Clock } from "../Clock/index";
import { Container } from "../Container/index";
import { Form } from "../Form/index";
import { Loading } from "../Loading";
import { useCurrentDate } from "../hook/useCurrentDate";
import { useLoader } from "../hook/useLoader";
import { Legend } from "./styled";

function App() {
  const date = useCurrentDate();
  const loading = useLoader();

  return (
    <Container>
      {loading && <Loading isloading={loading} />}
      <Legend>Currency Converter</Legend>
      <Clock date={date} />
      <Form />
    </Container>
  );
}

export default App;
