import React from "react";
import { Route, Redirect } from "react-router-dom";

// uses same API as Route
// it renders the Route and passes the props through
// checks if user is authenticated, if so renders component
// if no redirects to login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
