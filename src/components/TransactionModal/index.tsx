import { FunctionComponent } from "react";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { Field } from "src/components";
import closeIcon from "src/assets/close.png";
import { getBigNumber } from "src/utils";
import { Background, CloseButton, Container, Transaction } from "./styles";

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
        <CloseButton src={closeIcon} onClick={onClose} />
        <Transaction>
          <Field label="Hash:" text={transaction.hash} />
          <Field label="Block Number:" text={String(transaction.blockNumber)} />
          <Field label="From:" text={transaction.from} />
          {transaction.to && (
            <>
              {" "}
              <Field label="To:" text={transaction.to} />
            </>
          )}
          <Field label="ETH Sent:" text={getBigNumber(transaction.value)} />
        </Transaction>
      </Container>
    </Background>
  );
};
