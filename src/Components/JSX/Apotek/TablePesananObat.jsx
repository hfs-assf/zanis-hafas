import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";

class TablePesananObat extends Component {
  state = {
    pesanan_obat: [],
    detail_pesanan: []
  };

  componentWillMount = () => {
    listPesananObat("", "MENUNGGU").then(({ data }) => {
      this.setState({
        pesanan_obat: data
      });
    });
  }


  showDetail = (uid) => {
    listPesananObat(uid, "").then(({ data }) => {
      this.setState({
        detail_pesanan: data.detail_pesanan
      });
    });
  }

  renderPesananObat = (
    index,
    { uid, nomor_rekam_medis, waktu_pesan, status }
  ) => {
    return (
      <div className="row1" key={index}>
        <div className="cell">
          {new Date(waktu_pesan).toLocaleDateString("en-GB")}{" "}
          <strong>{nomor_rekam_medis}</strong>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            style={{ float: "right" }}
            data-toggle="collapse"
            data-target={"#collapse".concat(index)}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            lihat
          </button>
          <div className="collapse" id={"collapse".concat(index)}>
            <div className="card card-body">
              {/* {this.showDetail(uid)} */}Pesanan
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let header;
    const { pesanan_obat } = this.state;
    const filteredTransaksi = pesanan_obat;
    if (filteredTransaksi.length !== 0) {
      header = (
        <div className="table" style={{ borderCollapse: "collapse" }}>
          <div className="row1 header">
            <div className="cell">Pemesanan Obat</div>
          </div>
          {filteredTransaksi.map((obat, index) => {
            return this.renderPesananObat(index, obat);
          })}
        </div>
      );
    } else if (filteredTransaksi.length === 0) {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Pesanan obat tidak ada</div>
          </div>
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Pesanan Obat</h2>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TablePesananObat;
