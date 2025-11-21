import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange, className = '' }) => {
  return (
    <div className={`search-bar ${className}`}>
      <div className="search-input-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search contacts by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;

