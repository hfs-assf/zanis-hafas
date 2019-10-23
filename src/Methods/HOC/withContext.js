import React from "react";
import { Consumer } from "../User/Auth/Store";

export const withContext = Component => {
  return props => (
    <Consumer>
      {({ state }) => {
        return <Component {...props} getValue={state.dataLogin.id_lokasi} />;
      }}
    </Consumer>
  );
};
