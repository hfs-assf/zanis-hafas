import React from "react";
import "../../CSS/Pendaftaran.css";

const Pencarianpasien = props => (
  <div className="mainsearch">
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input type="text" className="form-control" placeholder="Cari Pasien" />
    </div>

    <div className="kotakhasil">
      <div className="hasilpencarian">
        <div className="detailpasien">
          <div className="row">
            <div className="col">
              <ul>
                <li>Kurnianto Syaputra</li>
                <li>17 Oktober 1990</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>11153103190</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hasilpencarian">
        <div className="detailpasien">
          <div className="row">
            <div className="col">
              <ul>
                <li>Kurnianto Syaputra</li>
                <li>17 Oktober 1993</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>11153103187</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pencarianpasien;
