import React, { createContext } from 'react';

// TODO: Add wallet, user, or theme context here

export const AppContext = createContext();

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
} 