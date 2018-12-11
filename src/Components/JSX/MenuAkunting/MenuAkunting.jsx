import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Akuntasi.css";

class MenuAKunting extends Component {
  render() {
    return (
      <div className="menu">
        <div className="title">Buku Besar</div>
        <ul className="nav">
          <li>
            <Link to="/buku-besar" target="_blank">
              Buku 1
            </Link>
          </li>
          <li>
            <Link to="/buku-besar" target="_blank">
              Buku 2
            </Link>
          </li>
          <li>
            <Link to="/buku-besar" target="_blank">
              Buku 3
            </Link>
          </li>
          <li>
            <Link to="/buku-besar" target="_blank">
              Buku 4
            </Link>
          </li>
          <li>
            <Link to="/buku-besar" target="_blank">
              Buku 5
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuAKunting;
