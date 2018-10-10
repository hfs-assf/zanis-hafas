import React, { Component } from "react";
import LoginView from "../../View/Login/Viewlogin";
import "../../CSS/Login.css";

class Login extends Component {
  render() {
    return (
      <section className="login-block ">
        <div className="container topmodal">
          <LoginView />
        </div>
      </section>
    );
  }
}

export default Login;
