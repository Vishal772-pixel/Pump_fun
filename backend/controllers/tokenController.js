import { mint as contractMint } from '../services/contractService.js';

const mint = async (req, res) => {
  try {
    const { to, amount } = req.body;
    if (!to || !amount) {
      return res.status(400).json({ message: 'Recipient and amount are required.' });
    }
    const tx = await contractMint(to, amount);
    res.json({ txHash: tx.hash });
  } catch (err) {
    res.status(500).json({ message: 'Minting failed', error: err.message });
  }
};

export { mint };