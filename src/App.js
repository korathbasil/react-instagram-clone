import React from "react";
import "./App.css";
import Logo from "./instagram-logo-black.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import { Avatar } from "@material-ui/core";

import Post from "./comonents/Post/Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="Instagram" />
        <div className="app__headerSearch">
          <SearchIcon />
          <input />
        </div>
        <div className="app__headerNav">
          <HomeOutlinedIcon />
          <SendOutlinedIcon />
          <ExploreOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
      <Post />
    </div>
  );
}

export default App;
