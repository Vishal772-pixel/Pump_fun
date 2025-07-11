import React, { useRef, useState } from 'react';

function MediaUploader({ onFileChange }) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current?.click();
    // TODO: Trigger file picker and handle upload
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange?.(e.dataTransfer.files[0]);
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange?.(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${dragActive ? 'border-green-400 bg-green-50/10' : 'border-gray-600 bg-gray-900 hover:border-green-400 hover:bg-green-50/5'}`}
        onClick={handleBoxClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        tabIndex={0}
        role="button"
        aria-label="Upload media"
      >
        <span className="text-4xl mb-2">📷</span>
        <div className="font-bold text-white mb-1">select video or image to upload</div>
        <div className="text-gray-400 text-sm mb-4">or drag and drop it here</div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          type="button"
          className="w-full py-2 px-4 rounded-lg bg-pink-500 text-white font-bold shadow hover:bg-pink-600 transition"
          // TODO: Log in before uploading media
        >
          log in
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 text-xs text-gray-300 gap-2">
        <div>
          <div className="font-semibold text-gray-200">file size and type</div>
          <div>image → max 15mb, jpg/gif/png</div>
          <div>video → max 30mb, mp4</div>
        </div>
        <div>
          <div className="font-semibold text-gray-200">resolution and aspect ratio</div>
          <div>image → min 1000x1000, 1:1</div>
          <div>video → 16:9 or 9:16, 1080p+</div>
        </div>
      </div>
    </div>
  );
}

export default MediaUploader; 