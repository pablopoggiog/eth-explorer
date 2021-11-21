import { ethers } from "ethers";

export const getBigNumber = (value: ethers.BigNumber) =>
  ethers.utils.formatEther(value);

export const copyToClipboard = (
  text: string,
  callback: (message: string) => void
): void => {
  const copy = async () => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }
  };
  
  try {
    copy();
    callback("Copied");
  } catch (error) {
    console.error({ error });
    if (typeof error === "string") callback(error);
    else callback("There was an error trying to copy");
  }
};
