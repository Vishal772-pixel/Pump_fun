import React, { useState } from 'react';
import { useFormState } from '../hooks/useFormState';
import MediaUploader from './MediaUploader';
import BannerUploader from './BannerUploader';
import CoinPreview from './CoinPreview';

function CreateCoinForm() {
  const [form, setForm] = useFormState({
    name: '',
    ticker: '',
    description: '',
    twitter: '',
    telegram: '',
    discord: '',
    media: null,
    banner: '',
    website: '',
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  // TODO: Handle coin creation form submission
  // TODO: Upload media and link to backend

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8 mt-8 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Create a New Coin</h2>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Coin Name</label>
            <input type="text" className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="e.g. Pump Coin" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Ticker</label>
            <input type="text" className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="e.g. PUMP" value={form.ticker} onChange={e => setForm(f => ({ ...f, ticker: e.target.value }))} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Description</label>
          <textarea className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" rows={3} placeholder="Describe your coin..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        </div>
        {/* Social Links Toggle */}
        <div className="border border-gray-700 rounded-lg bg-gray-900">
          <button
            type="button"
            className="w-full py-2 px-4 rounded-lg bg-pink-500 text-white font-bold shadow hover:bg-pink-600 transition"
            onClick={() => setShowSocial((v) => !v)}
            aria-expanded={showSocial}
            aria-controls="social-links-section"
          >
            <span className="mr-2 text-lg">🔗</span>
            Add Social Links (optional)
            <span className={`ml-auto transition-transform duration-200 ${showSocial ? 'rotate-180' : ''}`}>▼</span>
          </button>
          <div
            id="social-links-section"
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-4 overflow-hidden transition-all duration-300 ease-in-out ${showSocial ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            style={{
              transitionProperty: 'max-height, opacity, padding',
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Twitter URL</label>
              <input type="text" className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none" placeholder="https://twitter.com/yourcoin" value={form.twitter} onChange={e => setForm(f => ({ ...f, twitter: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Telegram URL</label>
              <input type="text" className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none" placeholder="https://t.me/yourcoin" value={form.telegram} onChange={e => setForm(f => ({ ...f, telegram: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Discord URL</label>
              <input type="text" className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none" placeholder="https://discord.gg/yourcoin" value={form.discord} onChange={e => setForm(f => ({ ...f, discord: e.target.value }))} />
            </div>
          </div>
        </div>
        {/* Media Uploader */}
        <MediaUploader
          onFileChange={file => setForm(f => ({ ...f, media: file }))}
        />
        {/* Banner Uploader */}
        <BannerUploader
          onBannerChange={file => setForm(f => ({ ...f, banner: file }))}
        />
        <button
          type="button"
          className="w-full py-2 px-4 rounded-lg bg-pink-500 text-white font-bold shadow hover:bg-pink-600 transition"
          onClick={() => setShowAdvanced(v => !v)}
        >
          {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
        </button>
        {showAdvanced && (
          <div className="space-y-4 bg-gray-900 rounded-lg p-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Website (optional)</label>
              <input type="text" className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none" placeholder="https://..." value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))} />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-pink-500 text-white font-bold shadow hover:bg-pink-600 transition mt-2"
          // TODO: Handle coin creation form submission
        >
          Create Coin
        </button>
      </form>
      {/* Coin Preview Section */}
      <CoinPreview />
    </div>
  );
}

export default CreateCoinForm; 