import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";

class TablePesananObat extends Component {
  state = {
    pesanan_obat: [],
    detail_pesanan: [],
    uid: ""
  };

  componentWillMount = () => {
    listPesananObat("", "MENUNGGU")
      // .then(el => console.log("ini yah", el))
      .then(({ data }) => {
        this.setState({
          pesanan_obat: data
        });
      });
  };

  getDetail(detail_link) {
    return fetch(detail_link).then(res => res.json());
  }

  render = () => {
    let header;
    const { pesanan_obat } = this.state;
    // console.log(pesanan_obat, "lis obat");
    header = (
      <div className="table" style={{ borderCollapse: "collapse" }}>
        <div className="row1" />
        {pesanan_obat.map((e, index) => {
          return (
            <div className="row1" key={index}>
              <div className="cell">
                {new Date(e.waktu_pesan).toLocaleDateString("en-GB")} //
                <strong>{e.nomor_rekam_medis}</strong>
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  style={{ float: "right" }}
                  data-toggle="collapse"
                  data-target={"#collapse".concat(index)}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() =>
                    this.getDetail(e.detail).then(el =>
                      this.setState({ detail_pesanan: el.detail_pesanan })
                    )
                  }
                >
                  lihat
                </button>
                <div className="collapse" id={"collapse".concat(index)}>
                  <div className="table">
                    <div className="row1 header">
                      <div className="cell">Nama Obat</div>
                      <div className="cell">Jumlah</div>
                      <div className="cell">Satuan</div>
                      <div className="cell">Kategori</div>
                      <div className="cell">Keterangan</div>
                    </div>
                    {this.state.detail_pesanan.map((subRow, k) => {
                      return (
                        <div className="row1" key={k}>
                          <div className="cell text-center">
                            {subRow.nama_obat}
                          </div>
                          <div className="cell text-center">
                            {subRow.jumlah_obat}
                          </div>
                          <div className="cell text-center">
                            {subRow.satuan}
                          </div>
                          <div className="cell text-center">
                            {subRow.kategori}
                          </div>
                          <div className="cell text-center">
                            {subRow.keterangan}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );

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
  };
}

export default TablePesananObat;
