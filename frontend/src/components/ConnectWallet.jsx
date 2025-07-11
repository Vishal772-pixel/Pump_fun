import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask.");
    return null;
  }

  try {
    // Request account access from MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    console.log("✅ Connected Wallet:", address);
    return address;
  } catch (error) {
    console.error("❌ Wallet connection failed:", error);
    return null;
  }
};
