import { FunctionComponent } from "react";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { Field } from "src/components";
import { getBigNumber } from "src/utils";
import {
  Background,
  CloseButton,
  Container,
  Transaction,
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
          <Field text={transaction.hash} />
          <Label>Block Number:</Label>
          <Field text={String(transaction.blockNumber)} />
          <Label>From:</Label>
          <Field text={transaction.from} />
          {transaction.to && (
            <>
              {" "}
              <Label>To:</Label>
              <Field text={transaction.to} />
            </>
          )}
          <Label>ETH Sent:</Label>
          <Field text={getBigNumber(transaction.value)} />
        </Transaction>
      </Container>
    </Background>
  );
};
