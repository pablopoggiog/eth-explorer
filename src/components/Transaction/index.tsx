import { FunctionComponent } from "react";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { Container } from "./styles";

interface TransactionProps {
  transaction: TransactionResponse;
}

export const Transaction: FunctionComponent<TransactionProps> = ({
  transaction,
}) => <Container>{transaction.hash}</Container>;
