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

  action = {
    checkSession: () => this.storeCheckSession(),
    setAuth: () => this.setState({ auth: true }),
    clearAuth: () => this.setState({ auth: false })
  };

  componentWillMount = () => {
    this.storeCheckSession();
  };

  storeCheckSession = () => {
    checkSession()
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

  render = () => (
    <Context.Provider value={{ state: this.state, action: this.action }}>
      {this.props.children}
    </Context.Provider>
  );
}
