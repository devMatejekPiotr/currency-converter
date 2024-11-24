import { useEffect, useState } from "react";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Form } from "./Form/index";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <Container>
      <legend className="container__legend">Currency Converter</legend>
      <Clock date={date} />
      <Form />
    </Container>
  );
}

export default App;
