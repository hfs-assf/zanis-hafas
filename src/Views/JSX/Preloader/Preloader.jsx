import React, { Component } from "react";
import SVGPreloader from "../../../Components/ASSETS/SVG/Preloaders";
import "../../../Components/ASSETS/CSS/Preloaders.css";

class Preloaders extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="loading">
          <div class="dot dot-1" />
          <div class="dot dot-2" />
          <div class="dot dot-3" />
        </div>
        <SVGPreloader />
      </div>
    );
  }
}

export default Preloaders;
