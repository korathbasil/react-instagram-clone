import { Switch } from "react-router-dom";

import "./app.css";
import PrivateApp from "./PrivateApp";
import PublicApp from "./PublicApp";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <PrivateApp />
        <PublicApp />
      </Switch>
    </div>
  );
};

export default App;
