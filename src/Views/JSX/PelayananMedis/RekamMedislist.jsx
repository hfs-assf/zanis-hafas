import React, { Component } from "react";
import ViewRekamMedisList from "../../../Components/JSX/RekamMedis/ViewRekamMedislist";
class RekamMedisList extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Detail List Rekam Medis Pasien
              </h2>
            </div>

            <div className="box column2" />
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-3">
              <div className="card-box lebar">
                <div className="member-card">
                  <div className="thumb-xl member-thumb m-b-10 center-block">
                    <img
                      src="https://image.flaticon.com/icons/svg/149/149071.svg"
                      className="img-fluid"
                      alt="pasien"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h5 className="header-title">Kurnianto Syaputra</h5>
                    <h5 className="header-title indigo-text">11900091093</h5>
                    <hr className="hr1" />
                  </div>
                </div>
                <div className="tab-content">
                  <ul className="ul">
                    <li className="li">
                      Tanggal Lahir : <strong> 17 Oktober 1993 </strong>
                    </li>

                    <li className="li">
                      Umur : <strong>27 Tahun</strong>
                    </li>
                    <li className="li">
                      Jenis Kelamin : <strong>Laki-Laki</strong>
                    </li>

                    <li className="li">
                      Alamat : <strong>Jl. Kelapa Sawit</strong>
                    </li>
                    <li className="li">
                      Nomor Hp : <strong>085265234851</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="kotak">
                <ViewRekamMedisList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RekamMedisList;
