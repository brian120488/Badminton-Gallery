'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchModal({ showSearch, setShowSearch }: {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() !== '') {
      // Navigate to /collections?s=query
      router.push(`/collections?s=${encodeURIComponent(query.trim())}`);
      setShowSearch(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      {showSearch && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 rounded-md focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Search
              </button>
              <button
                onClick={() => setShowSearch(false)}
                className="text-sm text-blue-600 underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
