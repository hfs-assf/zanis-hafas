import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import Calender from "../../../Components/ASSETS/SVG/Kalender1";
import listAntrian from "../../../Methods/Pendaftaran/Antrian/listAntrian";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";
import { dateFormat } from "../../../Methods/waktu";

let jumlahAntrian;
class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antrian: [],
      nama: [],
      tanggal: new Date("mm/dd/YYYY"),
      lAntrian: []
    };
  }

  componentDidMount = () => {
    this.getData()
      .then(data => {
        this.setState({
          lAntrian: data
        });
      })
      .catch(err => console.log(err));
  };

  getData = async () => {
    let antrian = await listAntrian().then(data => data.data);
    let namaList = [];

    const listRM = antrian.map(el => el.nomor_rekam_medis);
    for (let i = 0; i < listRM.length; i++) {
      let nama = await detailPasien(listRM[i]).then(data => data.data);
      namaList.push(nama[0].nama_pasien);
    }

    return antrian.map((el, i) => ({ ...el, nama: namaList[i] }));
  };

  antrianList = () => {
    const { lAntrian } = this.state;
    return lAntrian.map(e => {
      return (
        <li key={e.uid} className="animated bounceIn">
          <Link to={"/pelayanan-medis/" + e.uid + "/" + e.nomor_rekam_medis}>
            <span />
            <div className="number"> {e.nomor_antrian} </div>
            <div>
              <div className="title">{e.nomor_rekam_medis}</div>
              <div className="tefalsext-white">{e.nama}</div>
              <div className="type">
                {e.dokter} - {e.poli}
              </div>
            </div>
          </Link>
          <span className="number">
            <span>{dateFormat(e.waktu_daftar)}</span>
            <span />
          </span>
        </li>
      );
    });
  };

  render() {
    jumlahAntrian = this.state.lAntrian.length;

    return (
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <ul>{this.antrianList()}</ul>
          </div>
        </div>
        <div className="col-md-4 tglpasien">
          {/* <div className="form-group" style={{ width: "250px" }}>
            <span>Silahkan Pilih Tanggal :</span>
            <div className="input-group date">
              <input
                type="date"
                className="form-control"
                value={this.state.tanggal}
                style={{ borderRadius: "5px" }}
              />

              <div className="calender">
                <Calender />
              </div>
              <hr />
            </div>
          </div> */}
          <div className="banyakpasien">
            <span className="badge">Jumlah Antrian : {jumlahAntrian}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;
