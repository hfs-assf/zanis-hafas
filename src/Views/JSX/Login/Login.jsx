import React, { Component } from "react";
import LoginView from "../../../Components/JSX/Login/Viewlogin";
import "../../../Components/ASSETS/CSS/Login.css";

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
