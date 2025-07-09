import React from 'react';
import Sidebar from './components/Sidebar';
import { SidebarProvider, useSidebar } from './context/SidebarContext';
import TopNavbar from './components/TopNavbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function MainContent({ children }) {
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
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div>
          <Sidebar />
          <TopNavbar />
          <MainContent>
            <AppRoutes />
          </MainContent>
        </div>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App; 