import { FunctionComponent, useState } from "react";
import { TransactionsList, Field } from "src/components";
import { getBigNumber } from "src/utils";
import { Block as BlockInterface } from "src/types";
import { useBlockDate, useEthereum } from "src/hooks";
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
  Hash,
} from "./styles";

interface BlockProps {
  block: BlockInterface;
}

export const Block: FunctionComponent<BlockProps> = ({ block }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [onlyOwnTransactions, setOnlyOwnTransactions] =
    useState<boolean>(false);

  const { timeAgo, getBlockDate } = useBlockDate(block.timestamp);
  const { userAddress } = useEthereum();

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
          <Field label="Hash:" text={block.hash} />
          <Field label="Number:" text={String(block.number)} />
          <Field label="Miner:" text={block.miner} />
          <Field label="Timestamp:" text={String(getBlockDate())} />
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
