import { FunctionComponent } from "react";
import { Transaction as TransactionInterface } from "src/types";
import { Container } from "./styles";
import { Transaction } from "src/components";

interface TransactionsListProps {
  transactions: TransactionInterface[];
}

export const TransactionsList: FunctionComponent<TransactionsListProps> = ({
  transactions,
}) => (
  <Container>
    <h3>Transactions:</h3>
    <h5>(only {transactions.length} sending ETH)</h5>
    {transactions.map((transaction) => (
      <Transaction key={transaction.hash} transaction={transaction} />
    ))}
  </Container>
);
