import React from "react";
import { MdSearch } from "react-icons/md";
import "./index.css"

export default function SearchComponent() {
  return (
    <div className="SearchComponent">
      <input
        type="text"
        placeholder="Pesquisar"
        className="inputSearch"
        style={{ FontFamily: "Arial, FontAwesome" }}
      />
      <button>
        <MdSearch />
      </button>
    </div>
  );
}
