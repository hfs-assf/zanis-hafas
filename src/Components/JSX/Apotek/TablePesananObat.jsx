import React from "react";
// import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import editPesananObat from "../../../Methods/Apotik/PesananObat/editPesananObat";
import listPesananObatByStatus from "../../../Methods/Apotik/PesananObat/listPesananObat";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import kurangStockObat from "../../../Methods/Apotik/StokObat/kurangStokObat";
import tambahDetailTransaksi from "../../../Methods/Kasir/DetailTransaksi/tambahDetailTransaksi";
import { timeFormat } from "../../../Methods/waktu";
import { Consumer } from "../../../Methods/User/Auth/Store";
import hapusDetailPesanan from "../../../Methods/Apotik/DetailPesananObat/hapusDetailPesanan";

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
    notification: "0",
    id_lokasi: ""
  };

  componentDidMount() {
    listPesananObatByStatus("MENUNGGU")
      .then(({ data }) => {
        this.setState({
          pesanan_obat: data
        });
      })
      .catch(e => console.log("error", e));
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

  hapus = uid => {
    console.log("test", uid);
    const arrays = this.state.detail_pesanan;
    hapusDetailPesanan(uid).then(() => {
      this.setState({
        detail_pesanan: arrays.filter(el => el.uid !== uid)
      });
    });
  };

  tutup = () => {
    this.setState({ showDetail: false });
  };

  handleConf = (uid, id_lokasi) => {
    editPesananObat(uid, "KONFIRMASI").then(() => {
      this.setState(this.state);
    });
    kurangStockObat(uid, id_lokasi).then(() => {
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

  header = value => {
    const { pesanan_obat } = this.state;
    const filterDaftar = pesanan_obat.filter(el => el.id_lokasi === value);
    return filterDaftar.map(e => {
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
            <div className="tefalsext-white">{e.nama_pasien}</div>
            <div className="tefalsext-white">
              {new Date(e.waktu_pesan).toLocaleDateString("en-GB")}
            </div>
          </div>
          <span className="number">
            <span>{timeFormat(e.waktu_pesan)}</span>
          </span>
        </li>
      );
    });
  };

  render() {
    const { detail_pesanan, showDetail } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <div className="container">
              <Consumer>
                {({ state }) => {
                  return <ul>{this.header(state.dataLogin.id_lokasi)}</ul>;
                }}
              </Consumer>
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
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">NAMA OBAT</th>
                        <th className="text-center">JUMLAH</th>
                        <th className="text-center">SATUAN</th>
                        <th className="text-center">HARGA</th>
                        <th className="text-center">KATEGORI</th>
                        <th className="text-center">KETERANGAN</th>
                        <th className="text-center">AKSI</th>
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
                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => this.hapus(subRow.uid)}
                              >
                                Hapus
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
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

                <span className="middle">
                  <Consumer>
                    {({ state }) => {
                      return (
                        <label>
                          <input
                            type="radio"
                            name="radio"
                            onClick={() =>
                              this.handleConf(
                                this.state.uid,
                                state.dataLogin.id_lokasi
                              )
                            }
                          />
                          <div className="front-end box">
                            <span>KONFIRMASI</span>
                          </div>
                        </label>
                      );
                    }}
                  </Consumer>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() => this.cancelPress(this.state.uid)}
                    />
                    <div className="back-end box">
                      <span>BATAL</span>
                    </div>
                  </label>
                </span>
              </div>
            ) : null}

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
