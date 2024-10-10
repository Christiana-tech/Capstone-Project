import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-2 pb-100 mb-20">
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="border rounded p-2 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-black-500 text-white rounded"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
