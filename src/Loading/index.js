import { Loader, Container } from "./styled";

export const Loading = ({ isLoading }) => {
  return (
    <Container isLoading={isLoading}>
      <p> Wait. Loading...</p>
      <Loader></Loader>
    </Container>
  );
};
