import React, { Component } from "react";
import "../../ASSETS/CSS/Viewlogin.css";
import login from "../../../../src/Methods/User/Auth/login";
import { Consumer } from "../../../../src/Methods/User/Auth/Store";
class ViewLogin extends Component {
  state = {
    nik: "",
    password: ""
  };

  newLogin = (e, action) => {
    e.preventDefault();
    login({
      nik: this.state.nik,
      password: this.state.password
    }).catch(er => console.log("error", er));
  };

  render = () => {
    return (
      <div className="container1">
        <div className="window">
          <div className="overlay" />
          <div className="content">
            <div className="welcome">
              <img
                src={require("../../ASSETS/IMG/zanis.png")}
                alt="zanis"
                height="100px"
              />
            </div>

            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                className="input-line full-width"
                onChange={event => this.setState({ nik: event.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>
            <div className="spacing">
              Lupa Password ?? <span className="highlight">Klik Disini</span>
              <button
                className="ghost-round full-width mt"
                onClick={e => this.newLogin(e)}
              >
                Masuk
              </button>
              <div className="versi">Versi 1.0</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ViewLogin;
