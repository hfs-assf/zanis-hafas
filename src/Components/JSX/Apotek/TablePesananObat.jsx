import React, { Component } from "react";
// import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import editPesananObat from "../../../Methods/Apotik/PesananObat/editPesananObat";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";
import { dateFormat } from "../../../Methods/waktu";

class TablePesananObat extends Component {
  state = {
    pesanan_obat: [],
    detail_pesanan: [],
    selesai: [],
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

  editPesanan = () => {
    console.log;
    // editPesananObat(id,status)
    //   .then(el => console.log("edit", el))
    //   .then(({ data }) => {
    //     this.setState({});
    //   });
    // editPesananObat(nilai).then(data => {
    //   console.log(data);
    // });
  };

  // getDetail(detail_link) {
  //   return fetch(detail_link).then(res => res.json());
  // }

  handleClick = el => {
    fetch(el)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        this.setState({
          detail_pesanan: data.detail_pesanan,
          showDetail: true
        });
      });
  };

  tutup = () => {
    this.setState({ showDetail: false });
  };

  finishPress = () => {
    console.log("selesai");
  };

  cancelPress = () => {
    console.log("cancel");
  };

  render() {
    let header;
    const { pesanan_obat, detail_pesanan, showDetail } = this.state;
    console.log(pesanan_obat);
    // const slicePesanan = pesanan_obat.slice(0, 5);
    header = pesanan_obat.map(e => {
      if (e.status_pesanan === "MENUNGGU") {
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
      }
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

              <div className="table-responsive">
                <span> Nama : Kurnianto Syaputra </span>
                <span>Tanggal Lahir : 17 Oktober 1993</span>
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
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={() => this.editPesanan()}
                >
                  Simpan
                </button>
              </span>
              <span>
                <button type="button" className="btn btn-warning btn-sm">
                  Tambah Obat
                </button>
              </span>

              <div class="middle">
                <h5>Pilih Status</h5>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => this.finishPress()}
                  />
                  <div class="front-end box">
                    <span>SELESAI</span>
                  </div>
                </label>

                <label>
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => this.cancelPress()}
                  />
                  <div class="back-end box">
                    <span>BATAL</span>
                  </div>
                </label>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default TablePesananObat;
