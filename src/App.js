import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./instagram-logo-black.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Post from "./comonents/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerContainer">
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
      </div>
      <div className="app__mainBody">
        <div className="app__mainBodyContainer">
          <div className="app__mainBodyPosts">
            {posts.map((post) => {
              return (
                <Post
                  key={post.postId}
                  avatar=""
                  userName={post.userName}
                  postImage={post.postImage}
                  caption={post.postCaption}
                />
              );
            })}
          </div>
          <div className="app__mainBodywidgets">
            <h2>Iam Widgets</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
