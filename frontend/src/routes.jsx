import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateCoin from './pages/CreateCoin';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CoinDetail from './pages/CoinDetail';
// import NotFound from './pages/NotFound';
// import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreateCoin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/coin/:id" element={<CoinDetail />} />
      {/* <Route path="*" element={<NotFound />} />
      <Route path ="/login" element={<Login.jsx/>}/> */}
    </Routes>
  );
}

export default AppRoutes; 