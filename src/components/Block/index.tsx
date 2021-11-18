import { FunctionComponent } from "react";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { Container } from "./styles";

interface BlockProps {
  block: BlockWithTransactions;
}

export const Block: FunctionComponent<BlockProps> = ({ block }) => (
  <Container>{block.hash}</Container>
);
