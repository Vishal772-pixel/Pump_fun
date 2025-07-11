import React from 'react';

function CoinPreview() {
  // TODO: Replace static data with live form input
  // TODO: Render uploaded image or banner once available
  return (
    <section className="mt-12">
      <h3 className="text-xl font-bold text-white mb-4">Here’s a preview of how your coin will look like</h3>
      <div className="max-w-md mx-auto bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
        {/* Profile image or uploaded media */}
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
          {/* TODO: Render uploaded image or banner here */}
          <span className="text-4xl text-gray-400">🪙</span>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">My Coin</div>
          <div className="text-green-400 font-mono text-lg mb-2">$TICKER</div>
          <div className="text-gray-300 text-sm mb-2">This is a sample description of your coin. It will appear here.</div>
        </div>
      </div>
    </section>
  );
}

export default CoinPreview; 