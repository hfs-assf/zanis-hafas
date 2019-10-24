import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import { listAntrian } from "../../../Methods/Pendaftaran/Antrian/listAntrian";
import { timeFormat } from "../../../Methods/waktu";
import { withContext } from "../../../Methods/HOC/withContext";

class TimelinePelayananMedis extends Component {
  _isMounted = false;
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
    this._isMounted = true;
    listAntrian(this.props.getValue)
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState({
            lAntrian: data
          });
        }
      })
      .catch(err => err);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  antrianList = () => {
    const { lAntrian } = this.state;

    return lAntrian.map(e => (
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

  cariNilai = status => {
    const filterStatus = this.state.lAntrian.filter(
      e => e.status_antrian === status
    ).length;
    return filterStatus;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <ul>{this.antrianList()}</ul>
          </div>
        </div>

        <div className="col-md-4 tglpasien">
          <div className="banyakpasien">
            <span className="badge">
              Jumlah Antrian :{this.cariNilai("menunggu")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(TimelinePelayananMedis);
