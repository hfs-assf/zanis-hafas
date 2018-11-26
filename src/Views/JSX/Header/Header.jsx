import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../Components/ASSETS/CSS/TopHeader.css";
// import Logo from "../../../img/zanis.png";
// import NotifikasiHeaderPasien from "../../View/Header/Notifikasi_PasienHeader/Notifikasi_pasienHeader";
// import NotifikasiHeaderPesan from "../../View/Header/Notifikasi_PesanHeader/Notifikasi_PesanHeader";

export default class Header extends Component {
  render() {
    return (
      <nav className="mb-4 navbar navbar-expand-lg sticky-top navbar-dark warna1">
        <Link to="/" className="navbar-brand font-bold" href="#">
          <img
            src={require("../../../Components/ASSETS/IMG/zanis.png")}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            {/* <NotifikasiHeaderPasien />
            <NotifikasiHeaderPesan /> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user" /> Selamat Datang Admin
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
                  <i className="fas fa-sign-out-alt" /> Keluar
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
