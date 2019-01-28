import React, { Component } from "react";
import RiwayatPasien from "./RiwayatKunjungan";
import detailPasien from "../../../../Methods/RekamMedis/Pasien/detailPasien";

class ProfileKiriPasien extends Component {
  state = {
    pasien: []
  };

  componentWillMount() {
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
              style={{ width: "200px", height: "200px" }}
            />
            <h5 className="header-title">{e.nama_pasien}</h5>
            <h5 className="header-title indigo-text">{e.nomor_rekam_medis}</h5>
            <hr className="hr1" />
          </div>
        );
      });
      deskripsiPasien = detailPasien.map(e => {
        return (
          <ul className="ul" key={e.nomor_rekam_medis}>
            <li className="li">
              Tanggal Lahir :{" "}
              <strong>
                {new Date(e.tanggal_lahir).toLocaleDateString("en-GB")}
              </strong>
            </li>

            <li className="li">
              Umur : <strong>{this.calculateAge(e.tanggal_lahir)} tahun</strong>
            </li>
            <li className="li">
              Jenis Kelamin : <strong>{e.jenis_kelamin}</strong>
            </li>

            <li className="li">
              Alamat : <strong>{e.alamat}</strong>
            </li>
            <li className="li">
              Nomor Hp : <strong>{e.handphone}</strong>
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
              <input id="tab1" type="radio" name="tabs" defaultChecked />
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
                <RiwayatPasien id={this.props.pasien} />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileKiriPasien;
