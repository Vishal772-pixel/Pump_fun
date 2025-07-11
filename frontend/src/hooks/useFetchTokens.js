// TODO: Connect to backend here to fetch token list
import { useState, useEffect } from 'react';

export function useFetchTokens() {
  // Placeholder for fetching tokens
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    // Fetch tokens from backend
  }, []);
  return tokens;
} 