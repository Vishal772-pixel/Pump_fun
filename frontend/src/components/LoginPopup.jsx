// import React from 'react';
// import { ethers } from 'ethers';
// import GoogleLoginButton from './GoogleLoginButton';

// function LoginPopup({ onClose }) {
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         console.log("Wallet Connected:", address);
//         onClose();
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       alert("MetaMask not found");
//     }
//   };

//   // const handleGoogleLogin = (credentialResponse) => {
//   //   console.log("Google Credential:", credentialResponse);
//   //   // You can now send `credentialResponse.credential` to backend if needed
//   //   onClose();
//   // };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
//       <div className="bg-white p-6 rounded shadow-md w-80 text-center">
//         <h2 className="text-xl font-semibold mb-4">Login</h2>

//         <button
//           onClick={connectWallet}
//           className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full mb-4"
//         >
//           Connect with MetaMask
//         </button>
// {/* 
//         <GoogleLoginButton onSuccess={handleGoogleLogin} />

//         <button
//           onClick={onClose}
//           className="text-gray-500 text-sm mt-3 hover:underline"
//         >
//           Cancel
//         </button> */}
//       </div>
//     </div>
//   );
// }

// export default LoginPopup;




import React from 'react';
import { connectWallet } from './ConnectWallet'; 
import { getProvider,getFactoryContract,checkChain} from "../utils/contract";

export default function LoginPopup({ onClose }) {
  const handleMetaMaskLogin = async () => {
    const address = await connectWallet();
    if (address) {
      localStorage.setItem('walletAddress', address); // ✅ Optional
      onClose(); // Close modal after success
    }
  };

  return (
    <div className="popup">
      <button onClick={handleMetaMaskLogin}>Connect with MetaMask</button>
    </div>
  );
}


