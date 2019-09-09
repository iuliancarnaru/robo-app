import React from "react";

function SearchBox({ onSearchChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        style={{
          padding: "5px",
          marginBottom: "20px"
        }}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
