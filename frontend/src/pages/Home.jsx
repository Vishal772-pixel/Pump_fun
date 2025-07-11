import React from 'react';

const trendingTokens = Array.from({ length: 10 }).map((_, i) => ({
  name: 'heavenly',
  ticker: 'ANGELS',
  marketCap: '$992.2K',
  replies: 167,
  description: 'Ominous Angelic Religion Discusses Contacting Higher Beings',
  image: 'https://via.placeholder.com/80',
}));

function Home() {
  return (
    <div className="min-h-screen bg-[rgb(26,32,28)] pb-16">
      {/* Heading */}
      <div className="flex flex-col items-center pt-24 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center tracking-tight">start a new coin</h1>
        {/* Search Section */}
        <div className="flex w-full max-w-xl gap-3 items-center">
          <input
            type="text"
            placeholder="search for token"
            className="flex-1 rounded-lg px-4 py-3 bg-[#000000] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
          />
          
          <button className="px-6 py-3 rounded-lg bg-[#86Efac] text-white font-bold shadow hover:bg-green-600 transition">search</button>
        </div>
      </div>

      {/* Now Trending Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-lg font-bold text-white mb-4">now trending</h2>
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-2 py-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingTokens.map((token, idx) => (
            <div
              key={idx}
              className="snap-center flex min-w-[350px] max-w-[350px] bg-[#111927] text-white p-4 rounded-xl shadow-md flex-shrink-0 hover:shadow-lg transition"
              style={{ width: 350 }}
            >

              <img src={token.image} alt="token" className="rounded-full w-20 h-20 object-cover mr-4 self-center" />
              <div className="flex flex-col justify-center flex-1">
                <div className="font-bold">
                  {token.name} <span className="text-gray-400">({token.ticker})</span>
                </div>
                <div className="text-green-400 text-sm mb-1">market cap: {token.marketCap}</div>
                <div className="text-xs text-gray-400 mb-2">replies: {token.replies}</div>
                <p className="text-sm">{token.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default Home; 