import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../Components/ASSETS/CSS/TopHeader.css";
import logout from "../../../Methods/User/Auth/logout";
import { Consumer } from "../../../Methods/User/Auth/Store";
// import NotifikasiHeaderPasien from "../../View/Header/Notifikasi_PasienHeader/Notifikasi_pasienHeader";
// import NotifikasiHeaderPesan from "../../View/Header/Notifikasi_PesanHeader/Notifikasi_PesanHeader";

export default class Header extends Component {
  signOut = (e, action) => {
    e.preventDefault();
    logout();
    action.clearAuth();
  };

  render() {
    return (
      <Consumer>
        {({ state, action }) => (
          <div>
            {state.auth ? (
              <nav className="mb-4 navbar navbar-expand-lg sticky-top navbar-dark warna1">
                <Link to="/" className="navbar-brand font-bold" href="#">
                  <img
                    src={require("../../../Components/ASSETS/IMG/teman.jpg")}
                    alt="zanis"
                    height="48px"
                  />
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent-4"
                  aria-controls="navbarSupportedContent-4"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent-4"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink-4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ color: "#333" }}
                      >
                        <i className="fa fa-user" />
                        Selamat Datang Admin
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink-4"
                      >
                        <button
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target="#ubahProfil"
                        >
                          <i className="fa fa-user" /> Ubah Profil
                        </button>
                        <div className="dropdown-item">
                          <button
                            className="dropdown-item"
                            onClick={e => this.signOut(e, action)}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fas fa-sign-out-alt" /> Keluar
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            ) : null}
          </div>
        )}
      </Consumer>
    );
  }
}
