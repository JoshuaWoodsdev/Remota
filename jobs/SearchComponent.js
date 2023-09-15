import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
    const [query, setQuery] = useState(' ');

    const handleSubmit = (e) => {
       e.preventDefault();
       onSearch(query);
    };
     
    return (
      <div className="pa3 bg-lightest-blue navy">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for jobs..."
            className="pa2 mr2 ba b--navy bg-white"
          />
          <button type="submit" className="pa2 bg-navy white pointer">
            Search
          </button>
        </form>
      </div>
    );
  };

export default SearchComponent;