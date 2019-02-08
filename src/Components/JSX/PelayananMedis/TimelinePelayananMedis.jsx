import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import Calender from "../../../Components/ASSETS/SVG/Kalender1";
import listAntrian from "../../../Methods/Pendaftaran/Antrian/listAntrian";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";

class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.searchName = this.searchName.bind(this);
    this.state = { antrian: [], nama: [], tanggal: new Date("mm/dd/YYYY") };
  }

  componentWillMount() {
    var array = [...this.state.nama];
    listAntrian().then(({ data }) => {
      for (var i = 0; i < data.length; i++) {
        this.searchName(data[i].nomor_rekam_medis).then(data => {
          this.setState({ nama: this.state.nama.concat(data) });
        });

        this.setState({
          antrian: this.state.antrian.concat(data[i]),
          nama: array
        });
      }
    });
  }

  searchName(nomor_rekam_medis) {
    return detailPasien(nomor_rekam_medis).then(({ data }) => {
      return data[0].nama_pasien;
    });
  }

  dateFormat(x) {
    var date = new Date(x);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes;
    return strTime;
  }

  render() {
    let deskripsiPasien, jumlahAntrian;
    const { antrian, nama } = this.state;
    deskripsiPasien = antrian.map((e, index) => {
      return (
        <li key={e.uid} className="animated bounceIn">
          <Link to={"/pelayanan-medis/" + e.uid + "/" + e.nomor_rekam_medis}>
            <span />
            <div className="number"> {e.nomor_antrian} </div>
            <div>
              <div className="title">{e.nomor_rekam_medis}</div>

              <div className="tefalsext-white">{nama[index]}</div>
              <div className="type">
                {e.dokter} - {e.poli}
              </div>
            </div>
          </Link>
          <span className="number">
            <span>{this.dateFormat(e.waktu_daftar)}</span>
            <span />
          </span>
        </li>
      );
    });
    jumlahAntrian = antrian.length;
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <ul>{deskripsiPasien}</ul>
          </div>
        </div>
        <div className="col-md-4 tglpasien">
          <div className="form-group" style={{ width: "250px" }}>
            <span>Silahkan Pilih Tanggal :</span>
            <div className="input-group date">
              <input
                type="date"
                className="form-control"
                // value={this.state.tanggal}
                style={{ borderRadius: "5px" }}
              />

              <div className="calender">
                <Calender />
              </div>
              <hr />
            </div>
          </div>
          <div className="banyakpasien">
            <span className="badge">Jumlah Antrian : {jumlahAntrian}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;
