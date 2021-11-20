import { ethers } from "ethers";
import { BlockWithTransactions as EthersBlockWithTransactions } from "@ethersproject/abstract-provider";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export type WebSocketProvider = ethers.providers.WebSocketProvider;

export type BlockWithTransactions = EthersBlockWithTransactions;

export interface EthereumContextReturn {
  latestBlocks: any[];
  userAddress: string;
}
