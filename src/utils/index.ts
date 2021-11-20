import { ethers } from "ethers";

export const getBigNumber = (value: ethers.BigNumber) =>
  ethers.utils.formatEther(value);

export const copyToClipboard = (
  refEl: HTMLInputElement | null,
  callback: (message: string) => void
): void => {
  try {
    refEl?.select();
    document.execCommand("copy");

    callback("Copied");
  } catch (error) {
    console.error({ error });
    if (typeof error === "string") callback(error);
    else callback("There was an error trying to copy");
  }
};
