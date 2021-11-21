import { FunctionComponent, useState, FormEvent, useEffect } from "react";
import { Transaction as TransactionInterface } from "src/types";
import { getBigNumber } from "src/utils";
import { useEthereum } from "src/hooks";
import { Transaction, Field } from "src/components";
import {
  Container,
  Label,
  Note,
  Input,
  CheckboxContainer,
  AddressFilterContainer,
} from "./styles";

interface TransactionsListProps {
  transactions: TransactionInterface[];
}

export const TransactionsList: FunctionComponent<TransactionsListProps> = ({
  transactions,
}) => {
  const [inputAddress, setInputAddress] = useState("");
  const [onlyConnectedWallet, setOnlyConnectedWallet] =
    useState<boolean>(false);
  const [addressToFilterBy, setAddressToFilterBy] = useState("");

  const { userAddress } = useEthereum();

  useEffect(() => {
    setAddressToFilterBy(onlyConnectedWallet ? userAddress : inputAddress);
  }, [onlyConnectedWallet, inputAddress, userAddress]);

  const updateInputAddress = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInputAddress(value);
  };

  const transactionsSendingETH = transactions.filter(
    (transaction) => Number(getBigNumber(transaction.value)) !== 0
  );

  const toggleOwnTransactions = () =>
    setOnlyConnectedWallet(!onlyConnectedWallet);

  const filteredTransactions = addressToFilterBy
    ? transactionsSendingETH.filter(
        (transaction) =>
          transaction.from === addressToFilterBy ||
          transaction.to === addressToFilterBy
      )
    : transactionsSendingETH;

  return (
    <Container>
      <Label>Transactions:</Label>
      <Note>(only {transactions.length} sending ETH)</Note>
      <AddressFilterContainer>
        <Field
          label="Filter by address:"
          text={inputAddress}
          disabled={onlyConnectedWallet}
          onChange={updateInputAddress}
          readOnly={false}
        />
      </AddressFilterContainer>
      <CheckboxContainer>
        <Label>Only from/to connected wallet?</Label>
        <Input
          type="checkbox"
          onClick={toggleOwnTransactions}
          defaultChecked={onlyConnectedWallet}
        />
      </CheckboxContainer>
      {filteredTransactions.map((transaction) => (
        <Transaction key={transaction.hash} transaction={transaction} />
      ))}
    </Container>
  );
};
