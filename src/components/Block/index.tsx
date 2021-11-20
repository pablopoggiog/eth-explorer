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
  ExpandButtonContainer,
  ExpandButton,
  Input,
  CheckboxContainer,
} from "./styles";

interface BlockProps {
  block: BlockWithTransactions;
  userAddress: string;
}

export const Block: FunctionComponent<BlockProps> = ({
  block,
  userAddress,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [onlyOwnTransactions, setOnlyOwnTransactions] =
    useState<boolean>(false);

  const toggle = () => setExpanded(!expanded);

  const transactionsSendingETH = block.transactions.filter(
    (transaction) => Number(getBigNumber(transaction.value)) !== 0
  );

  const ownTransactions = transactionsSendingETH.filter(
    (transaction) =>
      transaction.from === userAddress || transaction.to === userAddress
  );

  const toggleOwnTransactions = () =>
    setOnlyOwnTransactions(!onlyOwnTransactions);

  return (
    <Container>
      {expanded ? (
        <Expanded>
          <Label>Hash:</Label>
          <Field>{block.hash}</Field>
          <Label>Number:</Label>
          <Field>{block.number}</Field>
          <Label>Timestamp:</Label>
          <Field>{block.timestamp}</Field>
          <CheckboxContainer>
            <Label>Only transactions from/to me?</Label>
            <Input
              type="checkbox"
              onClick={toggleOwnTransactions}
              defaultChecked={onlyOwnTransactions}
            />
          </CheckboxContainer>
          <TransactionsList
            transactions={
              onlyOwnTransactions ? ownTransactions : transactionsSendingETH
            }
          />
        </Expanded>
      ) : (
        <Collapsed>{block.hash}</Collapsed>
      )}

      <ExpandButtonContainer>
        <ExpandButton onClick={toggle}>{expanded ? "↑" : "↓"}</ExpandButton>
      </ExpandButtonContainer>
    </Container>
  );
};
