import React, { Component } from "react";
import ListDetailPesananObat from "../../../Methods/Apotik/DetailPesananObat/ListDetailPesanan";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import { Consumer } from "../../../Methods/User/Auth/Store";
import hapusDetailPesanan from "../../../Methods/Apotik/DetailPesananObat/hapusDetailPesanan";
import editPesananObat from "../../../Methods/Apotik/PesananObat/editPesananObat";
import kurangStokObat from "../../../Methods/Apotik/StokObat/kurangStokObat";
import tambahDetailTransaksi from "../../../Methods/Kasir/DetailTransaksi/tambahDetailTransaksi";

export class PesananObat extends Component {
  constructor() {
    super();
    this.state = {
      detail_pesanan: []
    };
  }

  componentDidMount = () => {
    ListDetailPesananObat(this.props.uid).then(({ data }) => {
      this.setState({
        detail_pesanan: data
      });
    });
  };

  handleDelete = uid => {
    console.log("dapat uid", uid);
    const arrays = this.state.detail_pesanan;
    hapusDetailPesanan(uid).then(() => {
      this.setState({
        detail_pesanan: arrays.filter(el => el.uid !== uid)
      });
    });
  };

  handleConfirm = (uid, id_lokasi, nik) => {
    editPesananObat(uid, "KONFIRMASI")
      .then(() => {
        this.setState(this.state);
      })
      .catch(err => console.log(err));
    kurangStokObat(uid, id_lokasi, nik)
      .then(() => {
        this.setState(this.state);
      })
      .catch(err => console.log(err));
  };

  handleCancle = uid => {
    editPesananObat(uid, "BATAL")
      .then(() => {
        this.setState(this.state);
      })
      .catch(err => console.log(err));
  };

  handleSave = () => {
    tambahDetailTransaksi({
      nomor_rekam_medis: this.props.no_rm,
      listDetail: this.state.detail_pesanan.map(
        ({ nama_obat, jumlah_obat, harga_jual }) => ({
          item_transaksi: nama_obat,
          jumlah_item: jumlah_obat,
          biaya: harga_jual
        })
      )
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Nama Obat</th>
                <th className="text-center">Jumlah</th>
                <th className="text-center">Satuan</th>
                <th className="text-center">Kategori</th>
                <th className="text-center">Keterangan</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            {this.state.detail_pesanan.map(e => {
              return (
                <tbody key={e.uid}>
                  <tr>
                    <td className="text-center">{e.nama_obat}</td>
                    <td className="text-center">{e.jumlah_obat}</td>
                    <td className="text-center">{e.satuan}</td>
                    <td className="text-center">{e.kategori}</td>
                    <td className="text-center">{e.keterangan}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(e.uid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        <div className="flex-button">
          <div>
            <button
              style={{ margin: "10px" }}
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => this.handleSave()}
            >
              Simpan
            </button>
          </div>

          <div className="middle ">
            <Consumer>
              {({ state }) => {
                return (
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() =>
                        this.handleConfirm(
                          this.props.uid,
                          state.dataLogin.id_lokasi,
                          state.dataLogin.nik
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
                onClick={() => this.handleCancle(this.props.uid)}
              />
              <div className="back-end box">
                <span>BATAL</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default PesananObat;
