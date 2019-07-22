import React, { Component } from "react";
// import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import editPesananObat from "../../../Methods/Apotik/PesananObat/editPesananObat";
import listPesananObatByStatus from "../../../Methods/Apotik/PesananObat/listPesananObat";
import TambahPesananObat from "./TambahPesanananObat";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import kurangStockObat from "../../../Methods/Apotik/StokObat/kurangStokObat";
import tambahDetailTransaksi from "../../../Methods/Kasir/DetailTransaksi/tambahDetailTransaksi";
import { dateFormat } from "../../../Methods/waktu";

class TablePesananObat extends React.Component {
  state = {
    pesanan_obat: [],
    detail_pesanan: [],
    uid: "",
    selected: {
      uid: ""
    },
    nomormr: "",
    showDetail: false,
    openModal: false,
    nik: "",
    notification: "0"
  };

  pushDataKePesananObat(data) {
    this.setState({ detail_pesanan: this.state.detail_pesanan.concat(data) });
  }

  componentDidMount() {
    listPesananObatByStatus("MENUNGGU").then(({ data }) => {
      console.log(data);
      this.setState({
        pesanan_obat: data
      });
    });
  }

  handleClick = (el, uid, nomormr) => {
    fetch(el)
      .then(data => data.json())
      .then(data => {
        this.setState({
          detail_pesanan: data.detail_pesanan,
          showDetail: true,
          nomormr: nomormr
        });
      });
    this.setState({ uid });
  };

  tutup = () => {
    this.setState({ showDetail: false });
  };

  finishPress = uid => {
    editPesananObat(uid, "SELESAI").then(() => {
      this.setState(this.state);
    });
    kurangStockObat(uid).then(() => {
      this.setState(this.state);
    });
  };

  cancelPress = uid => {
    editPesananObat(uid, "BATAL").then(() => {
      this.setState(this.state);
    });
  };

  simpanPesanan = () => {
    tambahDetailTransaksi({
      nomor_rekam_medis: this.state.nomormr,
      listDetail: this.state.detail_pesanan.map(
        ({ nama_obat, jumlah_obat, harga_jual }) => ({
          item_transaksi: nama_obat,
          jumlah_item: jumlah_obat,
          biaya: harga_jual
        })
      )
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
  };

  tambahPesanan = uid => {
    this.setState({ openModal: true, selected: { uid } });
  };

  render() {
    let header;
    const { pesanan_obat, detail_pesanan, showDetail } = this.state;
    header = pesanan_obat.map(e => {
      return (
        <li
          key={e.uid}
          className="animated bounceIn"
          onClick={() => this.handleClick(e.detail, e.uid, e.nomor_rekam_medis)}
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
      <React.Fragment>
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
                  <span> Nama : Kurnianto Syahputra </span>
                  <span>Tanggal Lahir : 17 Oktober 1993</span>
                  <div className="table">
                    <thead>
                      <tr>
                        <th className="text-center">NAMA OBAT</th>
                        <th className="text-center">JUMLAH</th>
                        <th className="text-center">SATUAN</th>
                        <th className="text-center">HARGA</th>
                        <th className="text-center">KATEGORI</th>
                        <th className="text-center">KETERANGAN</th>
                      </tr>
                    </thead>
                    {detail_pesanan.map(subRow => {
                      return (
                        <tbody key={subRow.uid}>
                          <tr>
                            <td className="text-center">{subRow.nama_obat}</td>
                            <td className="text-center">
                              {subRow.jumlah_obat}
                            </td>
                            <td className="text-center">{subRow.satuan}</td>
                            <td className="text-center">{subRow.harga_jual}</td>
                            <td className="text-center">{subRow.kategori}</td>
                            <td className="text-center">{subRow.keterangan}</td>
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
                    onClick={() => this.simpanPesanan()}
                    data-toggle="modal"
                    data-target="#konfirmasiTransaksi"
                  >
                    Simpan
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm waves-effect waves-light"
                    onClick={() => this.tambahPesanan()}
                    data-toggle="modal"
                    data-target="#addmedicine"
                    title="Tambah Obat"
                  >
                    Tambah Obat
                  </button>
                </span>

                <div class="middle">
                  <h5>Pilih Status</h5>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() => this.finishPress(this.state.uid)}
                    />
                    <div class="front-end box">
                      <span>SELESAI</span>
                    </div>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() => this.cancelPress(this.state.uid)}
                    />
                    <div class="back-end box">
                      <span>BATAL</span>
                    </div>
                  </label>
                </div>
              </div>
            ) : null}
            <TambahPesananObat
              fnTambahPesananObat={this.pushDataKePesananObat.bind(this)}
              selected={this.state.selected}
            />
            <ModalKonfirmasi
              notification={this.state.notification}
              modal="konfirmasiTransaksi"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TablePesananObat;
