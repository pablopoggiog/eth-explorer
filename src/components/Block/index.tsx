import { FunctionComponent, useState } from "react";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { TransactionsList } from "src/components";
import { getBigNumber } from "src/utils";
import {
  Collapsed,
  Container,
  Expanded,
  Field,
  Label,
  Toggler,
  TogglerContainer,
} from "./styles";

interface BlockProps {
  block: BlockWithTransactions;
}

export const Block: FunctionComponent<BlockProps> = ({ block }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggle = () => setExpanded(!expanded);

  const transactionsSendingETH = block.transactions.filter(
    (transaction) => Number(getBigNumber(transaction.value)) !== 0
  );

  return (
    <Container>
      <TogglerContainer>
        <Toggler onClick={toggle}>{expanded ? "↑" : "↓"}</Toggler>
      </TogglerContainer>
      {expanded ? (
        <Expanded>
          <Label>Hash:</Label>
          <Field>{block.hash}</Field>
          <Label>Number:</Label>
          <Field>{block.number}</Field>
          <Label>Timestamp:</Label>
          <Field>{block.timestamp}</Field>
          <TransactionsList transactions={transactionsSendingETH} />
        </Expanded>
      ) : (
        <Collapsed>{block.hash}</Collapsed>
      )}
    </Container>
  );
};
