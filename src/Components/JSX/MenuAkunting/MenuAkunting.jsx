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
            <Link to="/buku-coa" target="_blank">
              Chart Of Account
            </Link>
          </li>
          <li>
            <Link to="/list-asuransi" target="_blank">
              List Asuransi
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuAKunting;
