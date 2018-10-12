import React from "react";
import "../../CSS/Pendaftaran.css";

const Pencarianpasien = props => (
  <div className="mainsearch">
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input type="text" className="form-control" placeholder="Cari Pasien" />
    </div>
  </div>
);

export default Pencarianpasien;
