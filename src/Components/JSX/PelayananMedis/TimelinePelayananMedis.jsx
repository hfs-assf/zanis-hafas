import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import listAntrian from "../../../Methods/Pendaftaran/Antrian/listAntrian";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";
import { dateFormat } from "../../../Methods/waktu";
import { Consumer } from "../../../Methods/User/Auth/Store";

let jumlahAntrian;

class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antrian: [],
      nama: [],
      tanggal: new Date("mm/dd/YYYY"),
      lAntrian: [],
      dapatID: ""
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

  antrianList = value => {
    const { lAntrian } = this.state;
    const saringData = lAntrian.filter(el => el.id_lokasi === value);

    return saringData.map(e => (
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
    ));
  };

  render() {
    jumlahAntrian = this.state.lAntrian.length;

    return (
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <Consumer>
              {({ state }) => {
                return <ul>{this.antrianList(state.dataLogin.id_lokasi)}</ul>;
              }}
            </Consumer>
          </div>
        </div>
        ;
        {/* <div className="col-md-7">
          <div className="container">
            <ul>{this.antrianList()}</ul>
          </div>
        </div> */}
        <div className="col-md-4 tglpasien">
          <div className="banyakpasien">
            <span className="badge">Jumlah Antrian : {jumlahAntrian}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;
