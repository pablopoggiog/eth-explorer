import { render, screen } from "@testing-library/react";
import { Block as BlockInterface } from "src/types";
import userEvent from "@testing-library/user-event";
import { Block } from "..";

jest.mock("react-alert");

describe("Block", () => {
  beforeAll(() => {
    render(<Block block={fakeBlock} />);
  });

  it("displays the correct hash when a block is provided", () => {
    const renderedHash = screen.getByText(fakeBlock.hash);

    expect(renderedHash).toBeInTheDocument();
  });

  it("expands the component to show more details for the block, when clicking on the expand button (↓)", () => {
    const { hash, number, miner } = fakeBlock;
    const fields = [hash, number, miner];

    render(<Block block={fakeBlock} />);

    const expandButton = screen.getByText("↓");

    userEvent.click(expandButton);

    fields.forEach((field) => {
      const fieldInExpandedBlock = screen.getByDisplayValue(String(field));
      expect(fieldInExpandedBlock).toBeInTheDocument();
    });
  });
});

export const fakeBlock = {
  hash: "0x21ded2301b908af2c80f20f93837667e616ebe6845f3726853ab95d462584cd1",
  parentHash:
    "0xadab976bdc2780631a6f7bb56917ac45f97286d78fbde4d263e330d46e727f02",
  number: 13659075,
  timestamp: 1637509852,
  nonce: "0x97c6381487c23bf8",
  difficulty: null,
  gasLimit: {
    type: "BigNumber",
    hex: "0x01c9c380",
  },
  gasUsed: {
    type: "BigNumber",
    hex: "0x604c14",
  },
  miner: "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec4",
  extraData: "0x6575726f70652d63656e7472616c322d31",
  transactions: [
    {
      hash: "0xb71f7a0619de5e761da7edc27abf61b66fa8b26137bd9a35646d55756b35cfc1",
      type: 0,
      accessList: null,
      blockHash:
        "0x6ebe6845f3726853ab95d462584cd121ded2301b908af2c80f20f93837667e61",
      blockNumber: 13659073,
      transactionIndex: 10,
      confirmations: 1,
      from: "0xbc53B706B165D2B7E98F254095D9d342E845e5aC",
      gasPrice: {
        type: "BigNumber",
        hex: "0x22ecb25c00",
      },
      gasLimit: {
        type: "BigNumber",
        hex: "0x01348f",
      },
      to: "0xA929022c9107643515F5c777cE9a910F0D1e490C",
      value: {
        type: "BigNumber",
        hex: "0x038d7ea4c68000",
      },
      nonce: 3840,
      data: "0xdd9b86c10000000000000000000000000000000000085d4780b73119b644ae5ecd22b376000000000000000000000000000000000000000000002243cab914944c6c0000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000286139633032303462313062626131306666636534383864636536666666663163616364626262313000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000046865636f00000000000000000000000000000000000000000000000000000000",
      r: "0xc36c4ec9f00b534f4b89ef7b53c5f22fbfcdf471075917ad0c450ed220eedcc8",
      s: "0x6e25cdee80d6fcd45480e67b17f04beed8010b7c4663e70d7be5ab7810756fd7",
      v: 37,
      creates: null,
      chainId: 1,
    },
  ],
  baseFeePerGas: {
    type: "BigNumber",
    hex: "0x187bea4b1f",
  },
  _difficulty: {
    type: "BigNumber",
    hex: "0x272555a30aab24",
  },
} as unknown as BlockInterface;
