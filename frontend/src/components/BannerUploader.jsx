import React, { useRef, useState } from 'react';

function BannerUploader({ onBannerChange }) {
  const [open, setOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleBoxClick = () => {
    inputRef.current?.click();
    // TODO: Trigger banner file picker
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
      onBannerChange?.(e.dataTransfer.files[0]);
      // TODO: Handle banner upload on backend
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onBannerChange?.(e.target.files[0]);
      // TODO: Handle banner upload on backend
    }
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        className="flex items-center text-gray-200 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="banner-upload-section"
      >
        <span className="mr-2 text-lg">🖼</span>
        add banner (optional)
        <span className={`ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div
        id="banner-upload-section"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        style={{ transitionProperty: 'max-height, opacity, padding' }}
      >
        {open && (
          <>
            <div
              className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${dragActive ? 'border-green-400 bg-green-50/10' : 'border-gray-600 bg-gray-900 hover:border-green-400 hover:bg-green-50/5'}`}
              onClick={handleBoxClick}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              tabIndex={0}
              role="button"
              aria-label="Upload banner"
            >
              <span className="text-4xl mb-2">🖼</span>
              <div className="font-bold text-white mb-1">select banner to upload</div>
              <div className="text-gray-400 text-sm mb-4">or drag and drop it here</div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="w-full py-2 px-4 rounded-lg bg-pink-500 text-white font-bold shadow hover:bg-pink-600 transition"
                // TODO: Log in before uploading banner
              >
                log in
              </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4 text-xs text-gray-300 gap-2">
              <div>
                <div className="font-semibold text-gray-200">file size and type</div>
                <div>image → max 4.3mb</div>
                <div>formats: .jpg, .gif, .png</div>
              </div>
              <div>
                <div className="font-semibold text-gray-200">resolution and aspect ratio</div>
                <div>3:1 aspect ratio</div>
                <div>1500x500px recommended</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BannerUploader; 