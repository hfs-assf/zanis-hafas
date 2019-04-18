import React, { Component } from "react";
// import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";
import { dateFormat } from "../../../Methods/waktu";

class TablePesananObat extends Component {
  state = {
    pesanan_obat: [],
    detail_pesanan: [],
    uid: "",
    showDetail: false
  };

  componentDidMount() {
    listPesananObat("", "MENUNGGU")
      // .then(el => console.log("ini yah", el))
      .then(({ data }) => {
        this.setState({
          pesanan_obat: data
        });
      });
  }

  // getDetail(detail_link) {
  //   return fetch(detail_link).then(res => res.json());
  // }

  handleClick = el => {
    fetch(el)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          detail_pesanan: data.detail_pesanan,
          showDetail: true
        });
      });
  };

  tutup() {
    this.setState({ showDetail: false });
  }

  render() {
    let header;
    const { pesanan_obat, detail_pesanan, showDetail } = this.state;
    // const slicePesanan = pesanan_obat.slice(0, 5);
    header = pesanan_obat.map(e => {
      return (
        <li
          key={e.uid}
          className="animated bounceIn"
          onClick={() => this.handleClick(e.detail)}
        >
          <span />
          <div className="menunggu"> {e.status_pesanan} </div>
          <div>
            <div className="title">{e.nomor_rekam_medis}</div>
            <div className="tefalsext-white">
              {new Date(e.waktu_pesan).toLocaleDateString("en-GB")}
            </div>
          </div>
          <span className="number">
            <span>{dateFormat(e.waktu_pesan)}</span>
          </span>
        </li>
      );
    });

    return (
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <ul>{header}</ul>
          </div>
        </div>
        <div className="col-md-8">
          {showDetail ? (
            <div className="boxdaftar">
              <button
                type="button"
                className="btn btn-circle"
                onClick={() => this.tutup()}
              >
                x
              </button>
              {/* <button type="button" class="btn btn-default btn-circle">
                X
              </button> */}
              <div className="table-responsive">
                <div className="table">
                  <thead>
                    <tr>
                      <th className="text-center">NAMA OBAT</th>
                      <th className="text-center">JUMLAH</th>
                      <th className="text-center">SATUAN</th>
                      <th className="text-center">KATEGORI</th>
                      <th className="text-center">KETERANGAN</th>
                      <th className="text-center">ACTION</th>
                    </tr>
                  </thead>
                  {detail_pesanan.map(subRow => {
                    return (
                      <tbody key={subRow.uid}>
                        <tr>
                          <td className="text-center">{subRow.nama_obat}</td>
                          <td className="text-center">{subRow.jumlah_obat}</td>
                          <td className="text-center">{subRow.satuan}</td>
                          <td className="text-center">{subRow.kategori}</td>
                          <td className="text-center">{subRow.keterangan}</td>
                          <td className="td-actions text-center">
                            <button
                              type="button"
                              className="btn btn-warning btn-sm"
                            >
                              Cetak
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </div>
              </div>
              <span>
                <button type="button" className="btn btn-success btn-sm">
                  Selesai
                </button>
              </span>
              <span>
                <button type="button" className="btn btn-warning btn-sm">
                  Tambah Obat
                </button>
              </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default TablePesananObat;
