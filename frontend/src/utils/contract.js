import { ethers } from 'ethers';
import FactoryABI from "../abis/TokenFactory.json";

// ✅ 1. Get Metamask Provider
export const getProvider = () => {
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    throw new Error("MetaMask not detected");
  }
};

// ✅ 2. Get Factory Contract Instance
export const getFactoryContract = () => {
  const provider = getProvider();
  const signer = provider.getSigner();
  const factoryAddress = import.meta.env.VITE_FACTORY_ADDRESS;
  return new ethers.Contract(factoryAddress, FactoryABI, signer);
};

// ✅ 3. Check if user is on Sepolia network
export const checkChain = async () => {
  const provider = getProvider();
  const network = await provider.getNetwork();
  if (network.chainId !== 11155111) {
    alert("⚠️ Please switch to Sepolia Testnet in MetaMask.");
    return false;
  }
  return true;
};
