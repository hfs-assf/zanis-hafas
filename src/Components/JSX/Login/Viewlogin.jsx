import React, { Component } from "react";
import "../../ASSETS/CSS/Viewlogin.css";
import login from "../../../../src/Methods/User/Auth/login";
import Logo from "../../ASSETS/IMG/teman.jpg";
import { Consumer } from "../../../../src/Methods/User/Auth/Store";

class ViewLogin extends Component {
  state = {
    nik: "",
    password: ""
  };

  newLogin = (event, action) => {
    event.preventDefault();
    login({
      nik: this.state.nik,
      password: this.state.password
    })
      .then(() => action.checkSession())
      .catch(() => {
        let input = document.querySelectorAll("input");
        input.forEach(el => (el.value = ""));
        this.setState({ error: true });
        setTimeout(() => {
          this.setState({ error: false, pesan: "Gagal Masuk" });
        }, 4000);
      });
  };

  render = () => (
    <Consumer>
      {({ state, action }) => (
        <div className="wrapper fadeInDown">
          <div id="formContent">
            {/* <div className="loginFonts"> Login </div> */}
            <div className="fadeIn first">
              <img src={Logo} id="icon" alt="User Icon" />
            </div>
            <div className="field">
              {this.state.error ? (
                <h4 style={{ textAlign: "center", color: "red" }}>
                  {this.state.pesan}
                </h4>
              ) : null}
              <input
                type="text"
                id="nik"
                className="input"
                onChange={event => this.setState({ nik: event.target.value })}
              />
              <label htmlFor="nik" className="form-control-placeholder">
                Nik
              </label>
            </div>
            <div className="field">
              <input
                type="password"
                className="input"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
              <label htmlFor="password" className="form-control-placeholder">
                Sandi
              </label>
            </div>
            <input
              style={{
                width: "75%",
                letterSpacing: "2.5px",
                fontWeight: "600"
              }}
              type="button"
              className="fadeIn fourth"
              value="Masuk"
              onClick={event => this.newLogin(event, action)}
            />
            <div id="formFooter">
              <h5 className="underlineHover">Teman Klinik V.Alpha</h5>
              <h6 className="underlineHover2"> Team IT PT Senang</h6>
            </div>
          </div>
        </div>
      )}
    </Consumer>
  );
}

export default ViewLogin;
