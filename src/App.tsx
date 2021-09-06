import { Switch } from "react-router-dom";

import PrivateRoute from "utils/PrivateRoute";

import "./App.css";
import Login from "pages/login";
import Home from "pages/home";
import Messenger from "pages/messenger";
import Explore from "pages/explore";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/login" component={Login} />
        <PrivateRoute path="/messenger" component={Messenger} />
        <PrivateRoute path="/explore" component={Explore} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
