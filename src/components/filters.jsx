import React from "react";

const Filters = ({ setFilter }) => {
  const filters = ["Mountain", "People", "Food", "Animals", "Sports", "Beach"];

  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      {filters.map((filter) => (
        <div key={filter} className="relative group">
          <button
            onClick={() => setFilter(filter)}
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <span className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  {filter}
                </span>
              </span>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filters;
