import React from 'react';
import Sidebar from './components/Sidebar';
import { SidebarProvider, useSidebar } from './context/SidebarContext';
import TopNavbar from './components/TopNavbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import {useState} from "react";
import LoginPopup from './components/LoginPopup';

function MainContent({ children }) {
  const [showLogin,setShowLogin]= useState(false);
  const { isOpen } = useSidebar();
  return (
    <main
      className={`flex-1 p-8 transition-all duration-300 ml-20 ${isOpen ? 'md:ml-64' : 'ml-20'}`}
    >
      {children}
    </main>
  );
}

function App() {
    const [showLogin,setShowLogin]= useState(true);
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div>
          <Sidebar />
          {/* <TopNavbar/> */}
          <TopNavbar onLoginClick={()=> setShowLogin(true)} />
            {showLogin && <LoginPopup onClose={()=> setShowLogin(false)}/>}
            {}
          <MainContent>
            <AppRoutes />
          </MainContent>
        </div>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App; 