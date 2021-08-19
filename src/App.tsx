import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "pages/login";
import Home from "pages/home";
// import Home from "./components/Home/Home";
// import Login from "./pages/login/Login";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
