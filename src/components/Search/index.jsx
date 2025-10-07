import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="searchBox">
      <div className="field">
        <input
          type="search"
          placeholder="Search for products..."
          autoComplete="off"
        />
        <Button className="searchBtn">
          <FaSearch />
        </Button>
      </div>
    </div>
  );
};

export default Search;
