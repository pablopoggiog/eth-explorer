import { FunctionComponent, useState } from "react";
import { Transaction as TransactionInterface } from "src/types";
import { TransactionModal } from "src/components";
import { Hash, Container } from "./styles";

interface TransactionProps {
  transaction: TransactionInterface;
}

export const Transaction: FunctionComponent<TransactionProps> = ({
  transaction,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Container>
      <Hash onClick={toggleModal}>{transaction.hash}</Hash>
      <TransactionModal
        isOpen={modalOpen}
        onClose={toggleModal}
        transaction={transaction}
      />
    </Container>
  );
};
