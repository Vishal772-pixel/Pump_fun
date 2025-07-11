// utils/contract.js
import { ethers } from 'ethers';
import FactoryABI from '../abis/TokenFactory.json';

// ✅ 1. Get Provider from MetaMask
export const getProvider = () => {
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    throw new Error('MetaMask not detected');
  }
};

// ✅ 2. Get Signer (wallet address owner)
export const getSigner = () => {
  const provider = getProvider();
  return provider.getSigner();
};

// ✅ 3. Get Factory Contract Instance
export const getFactoryContract = () => {
  const signer = getSigner();
  const factoryAddress = import.meta.env.VITE_FACTORY_ADDRESS;
  return new ethers.Contract(factoryAddress, FactoryABI, signer);
};

// ✅ 4. Connect Wallet (and get address)
export const connectWallet = async () => {
  try {
    if (!window.ethereum) throw new Error('MetaMask not installed');

    // Request accounts from MetaMask
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    // Check chain
    const isCorrectChain = await checkChain();
    if (!isCorrectChain) return null;

    return accounts[0]; // return connected wallet address
  } catch (error) {
    console.error('❌ Wallet connection failed:', error);
    return null;
  }
};

// ✅ 5. Check if current chain is Sepolia
export const checkChain = async () => {
  const provider = getProvider();
  const network = await provider.getNetwork();

  if (network.chainId !== 11155111) {
    alert('⚠️ Please switch to Sepolia Testnet in MetaMask.');
    return false;
  }
  return true;
};
