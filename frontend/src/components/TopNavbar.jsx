import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TopNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreateCoinClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const section = document.getElementById('create-coin-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 py-4 px-6 flex items-center justify-end z-40 border-b border-[#1f1f1f]">
      <button
        className="px-4 py-2 rounded-md bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
        onClick={handleCreateCoinClick}
      >
        create coin
      </button>
      <button
        className="px-4 py-2 rounded-md bg-pink-500 text-white font-bold hover:bg-pink-600 transition ml-2"
        // TODO: Handle wallet login functionality
      >
        log in
      </button>
    </nav>
  );
}

export default TopNavbar; 