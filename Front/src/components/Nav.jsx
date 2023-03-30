import style from "./Nav.module.css";
import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <Link to="/home" className={style.Links}>
        Home
      </Link>
      <Link to="/about" className={style.Links}>
        About
      </Link>
      <Link to="/favorites" className={style.Links}>
        Favorites
      </Link>
      <SearchBar className={style.searchBar} onSearch={onSearch} />
      <Link to="/" className={style.Links}>
        LOGOUT
      </Link>
    </div>
  );
}
