import React, { useState } from "react";

const SearchComponent = ({ onSearch}) => {
    const [query, setQuery] = useState(' ');

    const handleSubmit = (e) => {
       e.preventDefault();
       onSearch(query);
    };
     
    //returning a search form
    return(
        <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            placeholder="Search for jobs..." 
          />
          <button type="submit">Search</button>
        </form>
        </div>
    );
};


export default SearchComponent;