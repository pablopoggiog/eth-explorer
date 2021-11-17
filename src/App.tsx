import styled from "styled-components";
import { BlocksList } from "./components";

const App = () => {
  return (
    <Container>
      <BlocksList />
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  background-color: #282c34;
  color: white;
`;
