import React, { Component } from "react";
// import SVGPencarianPasien from "../../SVG/pencarianpasien";
// import SVGRiwayatPasien from "../../SVG/SVGhistorypasien";
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
            <div className="main">
              <input id="tab1" type="radio" name="tabs" />
              <label htmlFor="tab1" className="dua">
                Data Diri
              </label>
              <input id="tab2" type="radio" name="tabs" />
              <label htmlFor="tab2" className="dua">
                Rekam Medis
              </label>
              <section id="content1" className="dua">
                {deskripsiPasien}
              </section>
              <section id="content2" className="dua">
                <RiwayatPasien />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileKiriPasien;
