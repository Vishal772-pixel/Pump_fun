import React, { useState } from 'react';
import { FaRegCopy, FaExternalLinkAlt, FaUserCircle } from 'react-icons/fa';

const mockBalances = [
  {
    icon: '🪙',
    name: 'Solana balance',
    amount: '1.3723 SOL',
    marketCap: '–',
    value: '$211',
  },
  {
    icon: '🪙',
    name: 'pi5',
    amount: '5,550 pi5',
    marketCap: '$27.6K',
    value: '$0',
  },
];

const whoToFollow = [
  { name: 'Wanna_FCK', followers: 1672 },
  { name: 'cgzdda', followers: 1670 },
  { name: 'bmgcy46bmw', followers: 1668 },
  { name: 'solana_guy', followers: 1665 },
  { name: 'pumpking', followers: 1662 },
  { name: 'coinqueen', followers: 1660 },
];

function Profile() {
  const [activeTab, setActiveTab] = useState('balances');
  // TODO: Fetch actual profile data from backend in future

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-24 pb-12 overflow-y-auto">
        {/* Profile Header */}
        <div className="w-full max-w-2xl mx-auto bg-[#000000] rounded-2xl shadow-lg p-6 flex flex-col items-center mb-8 border-b border-gray-800">
          <div className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
            {/* TODO: Replace with user avatar */}
            <FaUserCircle className="text-gray-400" size={90} />
          </div>
          <div className="text-2xl font-bold text-white mb-1">undefined</div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-300 font-mono text-sm">8kQrJ...FNUo</span>
            <FaRegCopy className="text-gray-400 cursor-pointer" title="Copy address" />
            <a
              href="https://solscan.io/address/8kQrJ...FNUo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 flex items-center gap-1 text-xs"
            >
              view on solscan <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <button className="mt-2 px-6 py-2 rounded-lg bg-[#1a2943] text-white font-bold shadow hover:bg-[#22304a] transition">
            log in to follow
          </button>
        </div>

        {/* User Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">112</span>
            <span className="text-xs text-gray-400 lowercase">followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">0</span>
            <span className="text-xs text-gray-400 lowercase">following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">0</span>
            <span className="text-xs text-gray-400 lowercase">created coins</span>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div className="flex border-b bg-[#000000]">
            <button
              className={`flex-1 py-3 text-white font-bold text-center transition border-b-2 ${activeTab === 'balances' ? 'border-green-400' : 'border-transparent'} focus:outline-none`}
              onClick={() => setActiveTab('balances')}
            >
              balances
            </button>
            <button
              className={`flex-1 py-3 text-white font-bold text-center transition border-b-2 ${activeTab === 'followers' ? 'border-green-400' : 'border-transparent'} focus:outline-none`}
              onClick={() => setActiveTab('followers')}
            >
              followers
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full max-w-2xl mx-auto">
          {activeTab === 'balances' && (
            <div className="bg-[#111927] rounded-xl shadow p-4 divide-y divide-gray-800">
              {mockBalances.map((bal, i) => (
                <div key={i} className="flex items-center py-4 gap-4">
                  <span className="text-2xl">{bal.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-white">{bal.name}</div>
                    <div className="text-gray-400 text-xs">{bal.amount}</div>
                  </div>
                  <div className="w-24 text-green-400 text-sm font-mono">{bal.marketCap}</div>
                  <div className="w-24 text-right text-white font-mono">{bal.value}</div>
                </div>
              ))}
              {/* TODO: Replace placeholder coins with actual user balances */}
            </div>
          )}
          {activeTab === 'followers' && (
            <div className="bg-[#111927] rounded-xl shadow p-8 text-center text-gray-400">
              {/* TODO: Show followers list */}
              No followers yet.
            </div>
          )}
        </div>
      </div>

      {/* Who to Follow (Right Side Panel) */}
      <div className="hidden lg:flex flex-col w-80 min-w-[320px] px-4 pt-28 pb-12 border-l border-gray-800 bg-[#0d1117]">
        <h3 className="text-lg font-bold text-white mb-4">who to follow</h3>
        <div className="flex flex-col gap-4">
          {whoToFollow.map((user, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#111927] rounded-xl p-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <FaUserCircle className="text-gray-400" size={28} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">{user.name}</div>
                <div className="text-xs text-gray-400">{user.followers} followers</div>
              </div>
              {/* TODO: Add follow button */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile; 