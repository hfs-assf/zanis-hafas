import React, { Component } from "react";
import detailPasien from "../../../../Methods/RekamMedis/Pasien/detailPasien";
import "../../../ASSETS/CSS/Dashboard.css";

class ProfileRM extends Component {
  state = {
    pasien: []
  };

  componentDidMount() {
    detailPasien(this.props.pasien).then(({ data }) => {
      this.setState({ pasien: this.state.pasien.concat(data) });
    });
  }

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
    const { pasien } = this.state;
    let namaPasien, deskripsiPasien;
    const detailPasien = pasien.filter(antrian => {
      return (
        antrian.nomor_rekam_medis.toString().indexOf(this.props.pasien) !== -1
      );
    });
    if (detailPasien.length !== 0) {
      namaPasien = detailPasien.map(e => {
        return (
          <div
            className="thumb-xl member-thumb m-b-10 center-block"
            key={e.nomor_rekam_medis}
          >
            <img
              src="https://image.flaticon.com/icons/svg/149/149071.svg"
              className="img-fluid"
              alt="pasien"
              style={{ width: "100px", height: "100px" }}
            />
            <h5 className="header-title">{e.nama_pasien}</h5>
            <h5 className="header-title indigo-text">{e.nomor_rekam_medis}</h5>
          </div>
        );
      });
      deskripsiPasien = detailPasien.map(e => {
        return (
          <ul
            key={e.nomor_rekam_medis}
            style={{ listStyle: "none", lineHeight: "2.0" }}
          >
            <li>
              Tanggal Lahir :
              <strong>
                {new Date(e.tanggal_lahir).toLocaleDateString("en-GB")}
              </strong>
            </li>

            <li>
              Umur : <strong>{this.calculateAge(e.tanggal_lahir)} tahun</strong>
            </li>
            <li>
              Jenis Kelamin : <strong>{e.jenis_kelamin}</strong>
            </li>

            <li>
              Alamat : <strong>{e.alamat}</strong>
            </li>
            <li>
              Nomor Hp : <strong>{e.handphone}</strong>
            </li>
          </ul>
        );
      });
    }
    return (
      <div className="card-group card-rm">
        <div className=" card gradien card-profile col-md-6 hidden-sm hidden-xs">
          <div className="card-body">{namaPasien}</div>
        </div>
        <div className=" card gradien col-md-6 hidden-sm hidden-xs">
          <div className="card-body">{deskripsiPasien}</div>
        </div>
      </div>
    );
  }
}
export default ProfileRM;
