import { ethers } from "ethers";

export const getBigNumber = (value: ethers.BigNumber) =>
  ethers.utils.formatEther(value);
