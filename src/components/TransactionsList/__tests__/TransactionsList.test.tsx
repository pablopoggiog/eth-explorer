import { render, screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { Transaction as TransactionInterface } from "src/types";
import { TransactionsList } from "..";

const userAddress = "0x1Ac6A0B503B51f8B56871c61a6D1aba2e25372b1";

jest.mock("src/components/Field", () => ({
  Field: () => <></>,
}));

jest.mock("src/hooks", () => ({
  useEthereum: () => ({ userAddress }),
}));

describe("TransactionsList", () => {
  it("displays correctly the list of hashes, for a provided array of transactions", () => {
    render(<TransactionsList transactions={fakeTransactions} />);

    fakeTransactions.forEach(({ hash }) => {
      const renderedHash = screen.getByText(hash);
      expect(renderedHash).toBeInTheDocument();
    });
  });

  it("only shows transactions coming from/going to the user's connected wallet address, when checking 'Only from/to connected wallet?'", () => {
    render(<TransactionsList transactions={fakeTransactions} />);

    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);

    const transactionFromUser = screen.getByText(fakeTransactions[0].hash);
    const otherTransaction = screen.queryByText(fakeTransactions[1].hash);

    expect(transactionFromUser).toBeInTheDocument();
    expect(otherTransaction).not.toBeInTheDocument();
  });

  // TO DO: make this work 😢 either by placeholder, htmlFor, aria-labelledby, etc

  // it("only shows transactions coming from/going to an address that the user enters in the input with label 'Filter by address:'", () => {
  //   render(<TransactionsList transactions={fakeTransactions} />);
  //   screen.debug();

  //   const input = screen.queryByPlaceholderText(/Enter an address.../i);
  //   if (input) userEvent.type(input, userAddress);

  //   const transactionFromUser = screen.getByText(fakeTransactions[0].hash);
  //   const otherTransaction = screen.queryByText(fakeTransactions[1].hash);

  //   expect(transactionFromUser).toBeInTheDocument();
  //   expect(otherTransaction).not.toBeInTheDocument();
  // });
});

export const fakeTransactions = [
  {
    hash: "0xd12276252be5200749a44c933a21077efc5569f76bc8e22e83fd1f6621f307b3",
    type: 0,
    accessList: null,
    blockHash:
      "0x50e6d664ab57f71c71a026c53fb996d3faaeeb54dc04955af3ae6493f087c8dd",
    blockNumber: 13659211,
    transactionIndex: 8,
    confirmations: 2,
    from: "0x1Ac6A0B503B51f8B56871c61a6D1aba2e25372b1",
    gasPrice: {
      type: "BigNumber",
      hex: "0x2822a60f00",
    },
    gasLimit: {
      type: "BigNumber",
      hex: "0x5208",
    },
    to: "0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2",
    value: {
      type: "BigNumber",
      hex: "0x0187a02337e4e93c",
    },
    nonce: 1,
    data: "0x",
    r: "0x0808c2ebe1806d6f1a7372b111148d619fc5d81bd4ebc54320080c693b581729",
    s: "0x0c06cdf801d2543a6544ab3fe1cbff70d21729aa227b38f681080ea3955e2e5f",
    v: 38,
    creates: null,
    chainId: 1,
    wait: jest.fn(),
  },
  {
    hash: "0xde39cc72d3a85c91ed6bfed1ea4973c3b647e61d501884f59724",
    type: 2,
    accessList: [],
    blockHash:
      "0x9402b1df38b0b547ab3eccb4df5072ad4ede39cc72d3a85c91ed6bfed1ea4973",
    blockNumber: 13658448,
    transactionIndex: 100,
    confirmations: 1,
    from: "0x096ce2A5A114e45a8c2f4F40231129dBBF8C0C0f",
    gasPrice: {
      type: "BigNumber",
      hex: "0x17ec665712",
    },
    maxPriorityFeePerGas: {
      type: "BigNumber",
      hex: "0x59682f00",
    },
    maxFeePerGas: {
      type: "BigNumber",
      hex: "0x19e38c1f4d",
    },
    gasLimit: {
      _isBigNumber: true,
      hex: "0x5208",
    },
    to: "0x1c7B307CC027ec9163B1D4AE9d771c16F65598c2",
    nonce: 1,
    data: "0x",
    r: "0xd0f8a2022ebdf279958e5cc5cf935b1848a0998982cd5245a6a2b5b7bbd0d6e1",
    s: "0x01b8d29f2901133ee44a6675b2ee531fe05fc5d73b8f05dec1ec733e04f5b0ea",
    v: 1,
    creates: null,
    chainId: 1,
    value: { _hex: "0x2f2f39fc6c540000", _isBigNumber: true },
    wait: jest.fn(),
  },
] as unknown as TransactionInterface[];
