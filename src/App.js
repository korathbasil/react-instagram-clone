import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <Login />
      <Home />
    </div>
  );
}

export default App;
