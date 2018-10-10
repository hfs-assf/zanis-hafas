import React, { Component } from "react";
import "../../CSS/Viewlogin.css";

class ViewLogin extends Component {
  render() {
    return (
      <div className="container1">
        <div className="window">
          <div className="overlay" />
          <div className="content">
            <div className="welcome">LOGIN ZANIS</div>

            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                className="input-line full-width"
              />
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
              />
            </div>
            <div className="spacing">
              Lupa Password ?? <span className="highlight">Klik Disini</span>
              <button className="ghost-round full-width mt">Masuk</button>
              <div className="versi">Versi 1.0</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewLogin;
