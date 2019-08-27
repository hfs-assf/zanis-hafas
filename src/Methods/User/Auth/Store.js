import React from "react";
import checkSession from "./checkSession";

// const RootContext = createContext();
// const Provider = RootContext.Provider;

// const GlobalProvider = Children => {
//   return class ParentComp extends Component {
//     state = {
//       auth: false,
//       dataLogin: {}
//     };

//     action = {
//       checkSession: () => this.storeCheckSession(),
//       setAuth: () => this.setState({ auth: true }),
//       clearAuth: () => this.setState({ auth: false })
//     };

//     componentWillMount = () => {
//       this.storeCheckSession();
//     };

//     storeCheckSession = () => {
//       checkSession()
//         // .then(data => console.log("check datat", data))
//         .then(({ data }) =>
//           this.setState({
//             auth: true,
//             dataLogin: data
//           })
//         )
//         .catch(err => {
//           localStorage.clear();
//         });
//     };

//     render() {
//       return (
//         <Provider
//           value={{
//             state: this.state,
//             componentWillMount: this.state
//           }}
//         >
//           <Children {...this.props} />
//         </Provider>
//       );
//     }
//   };
// };

// export default GlobalProvider;

// const Consumer = RootContext.Consumer;

// export const GlobalConsumer = Children => {
//   return class ParentConsumer extends Component {
//     render() {
//       <Consumer>
//         {value => {
//           return <Children {...this.props} {...value} />;
//         }}
//       </Consumer>;
//     }
//   };
// };

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

  render = () => (
    <Context.Provider value={{ state: this.state, action: this.action }}>
      {this.props.children}
    </Context.Provider>
  );
}
