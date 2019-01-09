import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Akuntasi.css";

class MenuAKunting extends Component {
  render() {
    return (
      <div className="menu">
        <div className="title">Pembukuan</div>
        <ul className="nav">
          <li>
            <Link to="/daftar-akun" target="_blank">
              Daftar Akun
            </Link>
          </li>
          <li>
            <Link to="/saldo-awal" target="_blank">
              Saldo Awal
            </Link>
          </li>

          <li>
            <Link to="/jurnal-umum" target="_blank">
              Jurnal Umum
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuAKunting;
