import { FunctionComponent, useState } from "react";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { TransactionsList, Field } from "src/components";
import { getBigNumber } from "src/utils";
import { useBlockDate } from "src/hooks";
import {
  Collapsed,
  Container,
  Expanded,
  Label,
  ExpandButtonContainer,
  ExpandButton,
  Input,
  CheckboxContainer,
  TimeAgo,
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

  const { timeAgo, getBlockDate } = useBlockDate(block.timestamp);

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
          <Field text={block.hash} />
          <Label>Number:</Label>
          <Field text={String(block.number)} />
          <Label>Timestamp:</Label>
          <Field text={String(getBlockDate())} />
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
        <Collapsed>
          <span>{block.hash}</span>
          <TimeAgo> {timeAgo} seconds ago</TimeAgo>
        </Collapsed>
      )}

      <ExpandButtonContainer>
        <ExpandButton onClick={toggle}>{expanded ? "↑" : "↓"}</ExpandButton>
      </ExpandButtonContainer>
    </Container>
  );
};
