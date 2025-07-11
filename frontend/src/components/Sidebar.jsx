import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaVideo,
  FaChartLine,
  FaComments,
  FaUser,
  FaHeadset,
  FaEllipsisH,
} from 'react-icons/fa';

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  const navItems = [
    { label: 'Home', icon: <FaHome size={20} />, key: 'home', to: '/home' },
    { label: 'Livestreams', icon: <FaVideo size={20} />, key: 'livestreams' },
    { label: 'Advanced', icon: <FaChartLine size={20} />, key: 'advanced' },
    { label: 'Chat', icon: <FaComments size={20} />, key: 'chat', badge: 'NEW' },
    { label: 'Profile', icon: <FaUser size={20} />, key: 'profile', to: '/profile' },
    { label: 'Support', icon: <FaHeadset size={20} />, key: 'support' },
    { label: 'More', icon: <FaEllipsisH size={20} />, key: 'more' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 flex flex-col bg-gray-900 text-white transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-20'}
        border-r border-gray-800
      `}
    >
      {/* Toggle button */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={toggleSidebar}
          className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition"
          aria-label="Toggle sidebar"
        >
          {/* TODO: Replace with hamburger/pill icon */}
          <span className="block w-6 h-1 bg-white mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-white mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-white rounded"></span>
        </button>
        {isOpen && <span className="text-xl font-bold ml-2">pump.fun</span>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.key}>
              {item.to ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-800 transition group relative ${isActive ? 'bg-gray-800 font-bold' : ''}`
                  }
                  end={item.to === '/'}
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span
                    className={`ml-3 text-base font-medium transition-opacity duration-200
                      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                  >
                    {item.label}
                  </span>
                  {item.badge && isOpen && (
                    <span className="ml-2 bg-[#86Efac] text-xs px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
                  )}
                </NavLink>
              ) : (
                <button
                  className={`flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-800 transition group relative`}
                  // TODO: Link to routes when added
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span
                    className={`ml-3 text-base font-medium transition-opacity duration-200
                      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                  >
                    {item.label}
                  </span>
                  {item.badge && isOpen && (
                    <span className="ml-2 bg-[#86Efac] text-xs px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom buttons */}
      <div className="p-4 mt-auto flex flex-col gap-2">
        <button
          className="w-full py-2 px-4 rounded-lg bg-[#86Efac] text-white font-bold shadow hover:bg-green-600 transition flex items-center"
          // TODO: Link to create coin route
        >
          {/* TODO: Replace with plus icon */}
          <span className="w-6 h-6 flex items-center justify-center mr-2">+</span>
          <span className={`${isOpen ? 'inline' : 'hidden'}`}>Create Coin</span>
        </button>
        <button
          className="w-full py-2 px-4 rounded-lg border-2 bg-[#86Efac]0 text-[#000000] font-bold hover:bg-green-600 hover:text-white shadow transition flex items-center"
          // TODO: Link to pump app
        >
          {/* TODO: Replace with app icon */}
          <span className="w-6 h-6 flex items-center justify-center mr-2">&#128640;</span>
          <span className={`${isOpen ? 'inline' : 'hidden'}`}>Pump App</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar; 