import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Preloaders.css";

class Preloaders extends Component {
  render() {
    return (
      <div>
        <div className="loading">
          <div className="berjalan" />
        </div>
      </div>
    );
  }
}

export default Preloaders;
