import React from "react";
import "./searchUser.css";

const SearchUser = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <img src="/img/search.png" alt="" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchUser;
