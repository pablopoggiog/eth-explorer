import { FunctionComponent } from "react";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { Container } from "./styles";
import { Block } from "src/components";

interface BlocksListProps {
  blocks: BlockWithTransactions[];
  userAddress: string;
}

export const BlocksList: FunctionComponent<BlocksListProps> = ({
  blocks,
  userAddress,
}) => (
  <Container>
    {blocks.map((block) => (
      <Block key={block.hash} block={block} userAddress={userAddress} />
    ))}
  </Container>
);
