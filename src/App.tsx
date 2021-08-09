import { useState } from "react";

import "./App.css";
import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

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
