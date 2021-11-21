import { ethers } from "ethers";
import {
  BlockWithTransactions as EthersBlockWithTransactions,
  TransactionResponse as EthersTransaction,
} from "@ethersproject/abstract-provider";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export type WebSocketProvider = ethers.providers.WebSocketProvider;

export type Block = EthersBlockWithTransactions;
export type Transaction = EthersTransaction;

export interface EthereumContextReturn {
  latestBlocks: any[];
  userAddress: string;
}

export interface UseBlockDateReturn {
  timeAgo: number;
  getBlockDate: () => string;
}

export type UseBlockDate = (timestamp: number) => UseBlockDateReturn;
