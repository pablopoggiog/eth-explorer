import { FunctionComponent } from "react";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { Container } from "./styles";
import { Transaction } from "src/components";

interface TransactionsListProps {
  transactions: TransactionResponse[];
}

export const TransactionsList: FunctionComponent<TransactionsListProps> = ({
  transactions,
}) => (
  <Container>
    <h3>Transactions:</h3>
    {transactions.map((transaction) => (
      <Transaction key={transaction.hash} transaction={transaction} />
    ))}
  </Container>
);
