import { render, screen } from "@testing-library/react";
import { getBigNumber } from "src/utils";
import { TransactionModal } from "..";
import { fakeTransaction } from "./data";

jest.mock("react-alert");

describe("TransactionModal", () => {
  it("correctly displays the metadata for a provided transaction", () => {
    const { hash, blockNumber, from, to } = fakeTransaction;
    const value = getBigNumber(fakeTransaction.value);
    const fields = [hash, blockNumber, from, to, value];

    render(
      <TransactionModal
        isOpen={true}
        onClose={jest.fn()}
        transaction={fakeTransaction}
      />
    );

    fields.forEach((field) => {
      const renderedField = screen.getByDisplayValue(String(field));
      expect(renderedField).toBeInTheDocument();
    });
  });
});
