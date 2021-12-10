import { Switch } from "react-router-dom";

import PrivateRoute from "utils/PrivateRoute";

import "./App.css";
import Login from "pages/login";
import Signup from "pages/signup";
import Home from "pages/home";
import Messenger from "pages/messenger";
import Explore from "pages/explore";
// import CreatePost from "pages/createPost";

import CreatePost from "components/createPost";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/login" component={Login} />
        <PrivateRoute path="/signup" component={Signup} />
        <PrivateRoute path="/messenger" component={Messenger} />
        <PrivateRoute path="/explore" component={Explore} />
        {/* <PrivateRoute path="/create" component={CreatePost} /> */}
        <PrivateRoute path="/" component={Home} />
      </Switch>
      <CreatePost />
    </div>
  );
};

export default App;
