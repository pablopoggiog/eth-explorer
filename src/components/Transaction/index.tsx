import { FunctionComponent, useState } from "react";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { TransactionModal } from "src/components";
import { Container } from "./styles";

interface TransactionProps {
  transaction: TransactionResponse;
}

export const Transaction: FunctionComponent<TransactionProps> = ({
  transaction,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <Container onClick={toggleModal}>{transaction.hash}</Container>
      <TransactionModal
        isOpen={modalOpen}
        onClose={toggleModal}
        transaction={transaction}
      />
    </>
  );
};
