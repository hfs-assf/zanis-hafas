import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import listTransaksi from "../../../Methods/Kasir/Transaksi/listTransaksi";
import { timeFormat } from "../../../Methods/waktu";
import { withContext } from "../../../Methods/HOC/withContext";

class TimelinePelayananMedis extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      antrian: [],
      nama: [],
      lAntrian: []
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    listTransaksi(this.props.getValue)
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState({
            lAntrian: data
          });
        }
      })
      .catch(err => err);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  listAntrian = () => {
    const { lAntrian } = this.state;

    return lAntrian.map(e => {
      return (
        <li key={e.uid} className="animated bounceIn">
          <Link to={"/form-pembayaran/" + e.uid + "/" + e.nomor_rekam_medis}>
            <span />
            <div className="menunggu"> {e.status_transaksi} </div>
            <div>
              <div className="title">{e.nomor_rekam_medis}</div>
              <div className="tefalsext-white">{e.nama_pasien}</div>
              <div className="tefalsext-white">
                {new Date(e.waktu_terbit).toLocaleDateString("en-GB")}
              </div>
              <div className="type">{e.penjamin}</div>
            </div>
          </Link>
          <span className="number">
            <span>{timeFormat(e.waktu_terbit)}</span>
            <span />
          </span>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-7">
          <div className="container">
            <ul>{this.listAntrian()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(TimelinePelayananMedis);
