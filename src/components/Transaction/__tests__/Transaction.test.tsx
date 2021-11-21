import { render, screen } from "@testing-library/react";
import { Transaction as TransactionInterface } from "src/types";
import userEvent from "@testing-library/user-event";
import { Transaction } from "..";

jest.mock("react-alert");

describe("Transaction", () => {
  it("displays the correct hash a transaction when is provided", () => {
    render(<Transaction transaction={fakeTransaction} />);

    const renderedHash = screen.getByText(fakeTransaction.hash);

    expect(renderedHash).toBeInTheDocument();
  });

  it("opens TransactionModal with the transaction details, when clicking on the transaction item", () => {
    render(<Transaction transaction={fakeTransaction} />);

    const renderedHash = screen.getByText(fakeTransaction.hash);

    userEvent.click(renderedHash);

    const transactionModal = screen.getByText("Block Number:");

    expect(transactionModal).toBeInTheDocument();
  });
});

export const fakeTransaction = {
  hash: "0xc3b647e61d501884f59724",
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
} as unknown as TransactionInterface;
