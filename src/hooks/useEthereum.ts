import { useContext } from "react";
import { EthereumContext } from "src/contexts";
import { EthereumContextReturn } from "src/types";

export const useEthereum = (): EthereumContextReturn =>
  useContext(EthereumContext);
