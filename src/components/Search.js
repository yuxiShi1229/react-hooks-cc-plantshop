import React from "react";

function Search({ setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;