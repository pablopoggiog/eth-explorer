import { FunctionComponent, useState } from "react";
import { Transaction as TransactionInterface } from "src/types";
import { TransactionModal } from "src/components";
import { Container } from "./styles";

interface TransactionProps {
  transaction: TransactionInterface;
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
