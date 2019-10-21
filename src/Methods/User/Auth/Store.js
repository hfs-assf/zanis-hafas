import React from "react";
import checkSession from "./checkSession";

const Context = React.createContext();

export const Consumer = props => (
  <Context.Consumer>{props.children}</Context.Consumer>
);

export class Store extends React.Component {
  state = {
    auth: false,
    dataLogin: {}
  };

  storeCheckSession = () => {
    checkSession()
      // .then(data => console.log("check datat", data))
      .then(({ data }) =>
        this.setState({
          auth: true,
          dataLogin: data
        })
      )
      .catch(err => {
        localStorage.clear();
      });
  };

  componentWillMount = () => {
    this.storeCheckSession();
  };

  action = {
    checkSession: () => this.storeCheckSession(),
    setAuth: () => this.setState({ auth: true }),
    clearAuth: () => this.setState({ auth: false })
  };

  render = () => (
    <Context.Provider value={{ state: this.state, action: this.action }}>
      {this.props.children}
    </Context.Provider>
  );
}
