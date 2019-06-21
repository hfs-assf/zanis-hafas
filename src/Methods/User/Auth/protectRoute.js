import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Consumer } from "./Store";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Consumer>
    {({ state }) => (
      <React.Fragment>
        <Route
          render={props =>
            state.auth ? <Component {...props} /> : <Redirect to="/" />
          }
          {...rest}
        />
      </React.Fragment>
    )}
  </Consumer>
);

export default ProtectedRoute;
