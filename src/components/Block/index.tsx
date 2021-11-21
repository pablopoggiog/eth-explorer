import { FunctionComponent, useState } from "react";
import { TransactionsList, Field } from "src/components";
import { Block as BlockInterface } from "src/types";
import { useBlockDate } from "src/hooks";
import {
  Collapsed,
  Container,
  Expanded,
  ExpandButtonContainer,
  ExpandButton,
  TimeAgo,
  Hash,
} from "./styles";

interface BlockProps {
  block: BlockInterface;
}

export const Block: FunctionComponent<BlockProps> = ({ block }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { timeAgo, getBlockDate } = useBlockDate(block.timestamp);

  const toggle = () => setExpanded(!expanded);

  return (
    <Container>
      {expanded ? (
        <Expanded>
          <Field label="Hash:" text={block.hash} />
          <Field label="Number:" text={String(block.number)} />
          <Field label="Miner:" text={block.miner} />
          <Field label="Timestamp:" text={getBlockDate()} />
          <TransactionsList transactions={block.transactions} />
        </Expanded>
      ) : (
        <Collapsed>
          <Hash>{block.hash}</Hash>
          <TimeAgo> {timeAgo} seconds ago</TimeAgo>
        </Collapsed>
      )}

      <ExpandButtonContainer>
        <ExpandButton onClick={toggle}>{expanded ? "↑" : "↓"}</ExpandButton>
      </ExpandButtonContainer>
    </Container>
  );
};
