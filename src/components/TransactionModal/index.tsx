import { FunctionComponent } from "react";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { getBigNumber } from "src/utils";
import {
  Background,
  CloseButton,
  Container,
  Transaction,
  Field,
  Label,
} from "./styles";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: TransactionResponse;
}

export const TransactionModal: FunctionComponent<TransactionModalProps> = ({
  isOpen,
  onClose,
  transaction,
}) => {
  return (
    <Background isOpen={isOpen}>
      <Container>
        <CloseButton onClick={onClose}>x</CloseButton>
        <Transaction>
          <Label>Hash:</Label>
          <Field>{transaction.hash}</Field>
          <Label>Number:</Label>
          <Field>{transaction.blockNumber}</Field>
          <Label>From:</Label>
          <Field>{transaction.from}</Field>
          {transaction.to && (
            <>
              {" "}
              <Label>To:</Label>
              <Field>{transaction.to}</Field>
            </>
          )}
          <Label>ETH Sent:</Label>
          <Field>{getBigNumber(transaction.value)}</Field>
        </Transaction>
      </Container>
    </Background>
  );
};
