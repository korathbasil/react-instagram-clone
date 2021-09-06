import { Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "pages/login";
import Home from "pages/home";
import Messenger from "pages/messenger";
import Explore from "pages/explore";

const App = () => {
  return (
    <div className="app">
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
  );
};

export default App;
