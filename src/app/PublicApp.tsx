import { Route, Switch } from "react-router-dom";

import { Login, Signup } from "pages";

const PublicApp = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
};

export default PublicApp;
