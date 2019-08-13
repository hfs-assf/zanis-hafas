import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Consumer } from "./Store";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Consumer>
    {({ state }) => (
      <Route
        render={props =>
          state.auth ? <Component {...props} /> : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </Consumer>
);

export default ProtectedRoute;
