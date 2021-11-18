import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import styled from "styled-components";
import { BlocksList } from "./components";

const App = () => {
  const [latestBlocks, setLatestBlocks] = useState<BlockWithTransactions[]>([]);

  const getLatestBlocks = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);

        const latestBlockNumber = await provider.getBlockNumber();

        const blocks = [];

        for (
          let currentBlock = latestBlockNumber;
          blocks.length < 10;
          currentBlock--
        ) {
          const transactions = await provider.getBlockWithTransactions(
            currentBlock
          );

          blocks.push(transactions);
        }

        setLatestBlocks(blocks);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getLatestBlocks();
  }, [getLatestBlocks]);

  useEffect(() => {
    console.log({ latestBlocks });
  }, [latestBlocks]);

  return (
    <Container>
      <BlocksList blocks={latestBlocks} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
