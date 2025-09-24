import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="searchBox w-full">
      <div className="relative bg-gray-100 border border-gray-200 rounded-md h-11">
        <input
          type="search"
          placeholder="Search for products..."
          autoComplete="off"
          className="w-full h-full bg-transparent pl-4 pr-12 text-[14px] placeholder:text-gray-500 focus:outline-none"
        />
        <Button className="!absolute top-1/2 -translate-y-1/2 right-2 !w-9 !min-w-9 h-9 !rounded-full !p-0 !bg-white !shadow-sm !border !border-gray-200 hover:!bg-gray-50">
          <FaSearch className="text-[#4e4e4e] text-[18px]" />
        </Button>
      </div>
    </div>
  );
};

export default Search;
