import React from "react";
import "./Header.css";
// Material UI elements
import Logo from "../../instagram-logo-black.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__image" src={Logo} alt="Instagram" />
        <div className="header__search">
          <SearchIcon />
          <input />
        </div>
        <div className="header__nav">
          <HomeOutlinedIcon />
          <SendOutlinedIcon />
          <ExploreOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
