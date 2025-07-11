import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import {LoginPopup} from './components/LoginPopup';
import AppRoutes from './routes';
import { SidebarProvider, useSidebar } from './context/SidebarContext';

function MainContent({ children }) {
  const { isOpen } = useSidebar();
  return (
    <main
      className={`flex-1 p-8 transition-all duration-300 ml-20 ${
        isOpen ? 'md:ml-64' : 'ml-20'
      }`}
    >
      {children}
    </main>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false); // For modal
  const [walletAddress, setWalletAddress] = useState(null); // Wallet state

  return (
    <SidebarProvider>
      <BrowserRouter>
        <div>
          <Sidebar />
          <TopNavbar
            onLoginClick={() => setShowLogin(true)}
            walletAddress={walletAddress}
          />
          
          {/* Login Popup Modal */}
          {showLogin && (
            <LoginPopup
              onClose={() => setShowLogin(false)}
              onWalletConnected={(address) => {
                setWalletAddress(address);
                setShowLogin(false); // Close modal
              }}
            />
          )}

          <MainContent>
            <AppRoutes />
          </MainContent>
        </div>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
