import React, { Component } from "react";
import SVGPencarianPasien from "../../svgfile/pencarianpasien";
import SVGRiwayatPasien from "../../svgfile/SVGhistorypasien";
import RiwayatPasien from "./RiwayatKunjungan";
import pasienList from "../../../JSON/pasien";

class ProfileKiriPasien extends Component {
  calculateAge(date) {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    let namaPasien, deskripsiPasien;
    const pasien = pasienList.filter(antrian => {
      return antrian.id.toString().indexOf(this.props.pasien) !== -1;
    });
    if (pasien.length !== 0) {
      namaPasien = pasien.map(pasien => {
        return (
          <div
            className="thumb-xl member-thumb m-b-10 center-block"
            key={pasien.id}
          >
            <img
              src="https://image.flaticon.com/icons/svg/149/149071.svg"
              className="img-fluid"
              alt="pasien"
              style={{ width: "200px", height: "200px" }}
            />
            <h5 className="header-title">{pasien.nama}</h5>
            <h5 className="header-title indigo-text">{pasien.no_rm}</h5>
            <hr className="hr1" />
          </div>
        );
      });
      deskripsiPasien = pasien.map(pasien => {
        return (
          <ul className="ul" key={pasien.id}>
            <li className="li">
              Tanggal Lahir :{" "}
              <strong>
                {new Date(pasien.tanggal_lahir).toLocaleDateString("en-GB")}
              </strong>
            </li>

            <li className="li">
              Umur :{" "}
              <strong>{this.calculateAge(pasien.tanggal_lahir)} tahun</strong>
            </li>
            <li className="li">
              Jenis Kelamin : <strong>{pasien.jenis_kelamin}</strong>
            </li>

            <li className="li">
              Alamat : <strong>{pasien.alamat}</strong>
            </li>
            <li className="li">
              Nomor Hp : <strong>{pasien.no_hp}</strong>
            </li>
          </ul>
        );
      });
    }
    return (
      <div className="card-box">
        <div className="member-card">{namaPasien}</div>
        <div className="bottommenu">
          <div className="col-md-12">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item warnatab active col-md-6">
                <a
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <div className="svg">
                    <SVGPencarianPasien />
                  </div>
                  Biodata
                </a>
              </li>
              <li className="nav-item warnatab col-md-6">
                <a
                  // className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <div className="svg">
                    <SVGRiwayatPasien />
                  </div>
                  Riwayat Berobat
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane warnacontent fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {deskripsiPasien}
            </div>
            <div
              className="tab-pane warnacontent fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <RiwayatPasien />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileKiriPasien;
