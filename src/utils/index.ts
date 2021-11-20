import { ethers } from "ethers";

export const getBigNumber = (value: ethers.BigNumber) =>
  ethers.utils.formatEther(value);

export const copyToClipboard = (refEl: HTMLInputElement | null): void => {
  try {
    refEl?.select();
    document.execCommand("copy");
  } catch (error) {
    console.error({ error });
  }
};
