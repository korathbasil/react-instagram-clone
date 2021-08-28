import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "components/header";
import Login from "pages/login";
import Home from "pages/home";
import Messenger from "pages/messenger";
import Explore from "pages/explore";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/messenger">
            <Messenger />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
