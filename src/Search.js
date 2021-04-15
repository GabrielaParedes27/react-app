import React from 'react';
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="searching-bar">
          <input
            id="search-bar"
            type="search"
            placeholder="Search another city"
          />
          <button id="search-button">Search</button>
          <button id="current-button">Current</button>
        </div>
      </form>
    </div>
  );
}