import { FunctionComponent, useState } from "react";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import {
  Collapsed,
  Container,
  Expanded,
  Toggler,
  TogglerContainer,
} from "./styles";

interface BlockProps {
  block: BlockWithTransactions;
}

export const Block: FunctionComponent<BlockProps> = ({ block }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <Container>
      <TogglerContainer>
        <Toggler onClick={toggle}>{expanded ? "↑" : "↓"}</Toggler>
      </TogglerContainer>
      {expanded ? (
        <Expanded>
          <h3>Hash:</h3>
          <div>{block.hash}</div>
        </Expanded>
      ) : (
        <Collapsed>{block.hash}</Collapsed>
      )}
    </Container>
  );
};
