import banner from "src/assets/banner.png";
import { useEthereum } from "src/hooks";
import { BlocksList, Spinner } from "./components";
import { Container, HeaderContainer, Image, Text, Body } from "./styles";

const App = () => {
  const { latestBlocks } = useEthereum();

  return (
    <Container>
      <HeaderContainer>
        <Image src={banner} />
        <Text>Eth Explorer</Text>
      </HeaderContainer>
      <Body>
        {latestBlocks.length ? (
          <BlocksList blocks={latestBlocks} />
        ) : (
          <Spinner />
        )}
      </Body>
    </Container>
  );
};

export default App;
