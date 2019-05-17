import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import listTransaksi from "../../../Methods/Kasir/listTransaksi";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";
import { dateFormat } from "../../../Methods/waktu";

class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antrian: [],
      nama: [],
      lAntrian: []
    };
  }

  async getData() {
    let antrian = await listTransaksi("", "PENDING").then(data => data.data);
    let namaList = [];

    let listRM = antrian.map(el => el.nomor_rekam_medis);
    for (let i = 0; i < listRM.length; i++) {
      let nama = await detailPasien(listRM[i]).then(data => data.data);
      // console.log("cari nama", nama);
      namaList.push(nama[0].nama_pasien);
    }

    return antrian.map((el, i) => ({ ...el, nama: namaList[i] }));
  }

  componentDidMount = () => {
    this.getData().then(data => {
      this.setState({
        lAntrian: data
      });
    });
  };

  render() {
    let deskripsiPasien;
    const { lAntrian } = this.state;
    console.log("loha", lAntrian);
    deskripsiPasien = lAntrian.map(e => {
      if (e.status_transaksi === "PENDING") {
        return (
          <li key={e.uid} className="animated bounceIn">
            <Link to={"/form-pembayaran/" + e.uid + "/" + e.nomor_rekam_medis}>
              <span />
              <div className="menunggu"> {e.status_transaksi} </div>
              <div>
                <div className="title">{e.nomor_rekam_medis}</div>
                <div className="tefalsext-white">
                  {new Date(e.waktu_transaksi).toLocaleDateString("en-GB")}
                </div>
                <div className="tefalsext-white">{e.nama}</div>
                <div className="type">{e.penjamin}</div>
              </div>
            </Link>
            <span className="number">
              <span>{dateFormat(e.waktu_terbit)}</span>
              <span />
            </span>
          </li>
        );
      }
    });
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <ul>{deskripsiPasien}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;
