import { Route, Redirect } from "react-router-dom";

import { useAppSelector } from "state";

const PrivateRoute: React.FC<{ component: any }> = ({
  component: RouteComponent,
  ...rest
}) => {
  const user = useAppSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
