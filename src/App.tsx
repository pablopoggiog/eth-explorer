import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import styled from "styled-components";
import { BlocksList } from "./components";
import {
  INFURA_WEBSOCKETS_URL,
  INFURA_PROJECT_ID,
  INFURA_NETWORK,
} from "./constants";

type WebSocketProvider = ethers.providers.WebSocketProvider;

const App = () => {
  const [latestBlocks, setLatestBlocks] = useState<BlockWithTransactions[]>([]);
  const [provider, setProvider] = useState<WebSocketProvider | null>(null);
  const [userAddress, setUserAddress] = useState<string>("");

  const getLatestBlocks = useCallback(async () => {
    try {
      if (provider) {
        const latestBlockNumber = await provider.getBlockNumber();

        const blocks = [];

        for (
          let currentBlock = latestBlockNumber;
          blocks.length < 10;
          currentBlock--
        ) {
          const newBlock = await provider.getBlockWithTransactions(
            currentBlock
          );

          blocks.push(newBlock);
        }

        setLatestBlocks(blocks);
      }
    } catch (error) {
      console.log(error);
    }
  }, [provider]);

  const subscribeToNewBlocks = useCallback(async () => {
    if (provider && latestBlocks.length) {
      provider.on("block", async (blockNumber) => {
        const newBlock = await provider.getBlockWithTransactions(blockNumber);

        // Update the blocks leaving in first place the new block, followed by the rest of pre-existing blocks and removing the oldest one.
        setLatestBlocks((blocks) => {
          // I've been testing for a while and there seems to be an issue with this subscription, from time to time it receives
          // an event for the same block twice, duplicating the block in the list.
          // Usually I'd have this validation outside of the setState, but if I used directly latestBlocks (outside of setLatestBlocks) I'd have to include
          // it as dependency of the useCallback, causing subscribeToNewBlocks to be re-created and re-run in its useEffect every time a new block is added.
          const existingNumbers = blocks.map((block) => block.number);

          if (!existingNumbers.includes(blockNumber))
            return [newBlock, ...blocks.slice(0, -1)];
          else return [...blocks];
        });
      });
    }
  }, [provider, latestBlocks.length]);

  const connectWithProvider = useCallback(() => {
    const { ethereum } = window;

    if (ethereum) {
      setProvider(
        new ethers.providers.WebSocketProvider(
          `${INFURA_WEBSOCKETS_URL}${INFURA_PROJECT_ID}`,
          INFURA_NETWORK
        )
      );
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  }, []);

  const connectWallet = useCallback(async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setUserAddress(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  useEffect(() => {
    connectWithProvider();
  }, [connectWithProvider]);

  // Fetch the initial 10 blocks, only if there's already a provider connected (verified internally)
  useEffect(() => {
    getLatestBlocks();
  }, [getLatestBlocks]);

  // Listen to new blocks, to update the list each time a new block is mined
  useEffect(() => {
    subscribeToNewBlocks();
  }, [subscribeToNewBlocks]);

  return (
    <Container>
      {latestBlocks.length && <BlocksList blocks={latestBlocks} userAddress={userAddress} />}
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
