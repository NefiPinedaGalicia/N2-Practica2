import React, { useState } from "react";

const Searcher = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(input);
  };

  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for images..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 text-white bg-black/90 rounded-r-md hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Searcher;
