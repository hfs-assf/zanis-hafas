import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import { listAntrian } from "../../../Methods/Pendaftaran/Antrian/listAntrian";

import { timeFormat } from "../../../Methods/waktu";
import { Consumer } from "../../../Methods/User/Auth/Store";

class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antrian: [],
      nama: [],
      lAntrian: [],
      dapatID: ""
    };
  }

  componentDidMount() {
    listAntrian().then(({ data }) => {
      this.setState({
        lAntrian: data
      });
    });
  }

  antrianList = value => {
    const { lAntrian } = this.state;
    console.log("ayo check", lAntrian);
    const filterData = lAntrian.filter(el => el.id_lokasi === value);

    return filterData.map(e => (
      <li key={e.uid} className="animated bounceIn">
        <Link to={"/pelayanan-medis/" + e.uid + "/" + e.nomor_rekam_medis}>
          <span />
          <div className="number"> {e.nomor_antrian} </div>
          <div>
            <div className="title">{e.nomor_rekam_medis}</div>
            <div className="tefalsext-white">{e.nama_pasien}</div>
            <div className="type">
              {e.dokter} - {e.poli}
            </div>
          </div>
        </Link>
        <span className="number">
          <span>{timeFormat(e.waktu_daftar)}</span>
          <span />
        </span>
      </li>
    ));
  };

  cariNilai = value => {
    const filter = this.state.lAntrian.filter(e => e.status_antrian === value)
      .length;
    return filter;
  };

  render() {
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

        <div className="col-md-4 tglpasien">
          <div className="banyakpasien">
            <span className="badge">
              Jumlah Antrian : {this.cariNilai("menunggu")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;
