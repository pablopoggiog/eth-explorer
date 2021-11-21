import { FunctionComponent } from "react";
import { Block as BlockInterface } from "src/types";
import { Container } from "./styles";
import { Block } from "src/components";

interface BlocksListProps {
  blocks: BlockInterface[];
}

export const BlocksList: FunctionComponent<BlocksListProps> = ({ blocks }) => (
  <Container>
    {blocks.map((block) => (
      <Block key={block.hash} block={block} />
    ))}
  </Container>
);
