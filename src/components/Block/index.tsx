import { FunctionComponent, useState } from "react";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";
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

  const getBigNumber = (value: ethers.BigNumber) =>
    ethers.utils.formatEther(value);

  return (
    <Container>
      <TogglerContainer>
        <Toggler onClick={toggle}>{expanded ? "↑" : "↓"}</Toggler>
      </TogglerContainer>
      {expanded ? (
        <Expanded>
          <h3>Hash:</h3>
          <div>{block.hash}</div>
          <h3>Number:</h3>
          <div>{block.number}</div>
          <h3>Gas Used:</h3>
          <div>{getBigNumber(block.gasUsed)}</div>
          <h3>Timestamp:</h3>
          <div>{block.timestamp}</div>
        </Expanded>
      ) : (
        <Collapsed>{block.hash}</Collapsed>
      )}
    </Container>
  );
};
