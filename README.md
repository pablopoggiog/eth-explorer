# Welcome to Eth Explorer

## Summary

Here, you'll be able to:

- See the latest 10 blocks on the Ethereum blockchain, updated in real time.
- Select a block and see the transactions associated with it (only the ones sending ETH).
- Filter transactions based on your wallet address (whether you are sending or receiving).
- See some relevant details associated with each block and transaction (and easily copy them to the clipboard)

If you don't have Metamask in your browser yet, go get it [here](https://metamask.io/download.html) 💪.

You won't need to connect your wallet to the site (yes to have Metamask installed, but not necessarily connected) to use most of the functions, but you'll need to in order to filter transactions by your address.

## Get started

To run the app, you'll have 2 options:

1. Go to the [deployed website](https://pablopoggiog.github.io/eth-explorer/), this is by far the simplest and fastest option!
2. Run the app locally.

### Run the app locally

### `yarn`

Installs the required dependencies.\

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

## Flow

1. When initializing the app, it'll automatically fetch the latest 10 blocks mined in Ethereum's main net (if Metamask is not installed, it'll show a small alert with a link to download it).
2. It'll also automatically subscribe to the "block" event, listening to each new blocked mined and updating the blocks' list when there's a new one.
3. Clicking on a block's arrow it'll expand and show more data for that block, including:

    - Hash
    - Number
    - Miner
    - Timestamp (transformed to a more readable format)
    - Transactions. By default it displays all the transactions sending ETH, there's a field to enter an address to filter by (whether is the sender or receiver) or if you've connected your Metamask wallet you'll be able to click on the checkbox saying "Only transactions from/to me?", to filter by your wallet's address. Otherwise, if there's not a wallet connected yet, it'll show a button to connect one.

4. Clicking on a transaction, it'll open a modal showing more data for that specific transaction.

### Thank you for making it this far!
If you have suggestions, feel free to open an issue or PR and I'll be glad to review it.