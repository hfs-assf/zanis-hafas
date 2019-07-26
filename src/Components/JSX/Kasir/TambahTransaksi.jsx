import React, { Component } from "react";
import tambahTransaksi from "../../../Methods/Kasir/Transaksi/tambahTransaksi";
import ModalKonfirmasiTindakan from "../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import { Consumer } from "../../../Methods/User/Auth/Store";

export class TambahTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tambah: {
        jaminan: "",
        jenis_pembayaran: "",
        notification: ""
      }
    };
  }

  handleSave = nik => {
    tambahTransaksi({
      nik_penerbit: nik,
      nomor_rekam_medis: 0,
      penjamin: this.state.jaminan,
      jenis_pembayaran: this.state.jenis_pembayaran
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="addtransaksi"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="heading lead">Tambah Transaksi</p>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <p>Tambahkan Transaksi</p>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="JenisPasien"
                  className="col-sm-4 col-form-label"
                >
                  Jaminan
                  <span className="required">*</span>
                </label>
                <div className="col-sm-5">
                  <select
                    className="form-control"
                    onChange={event =>
                      this.setState({
                        jaminan: event.target.value
                      })
                    }
                    required
                  >
                    <option value="">--- Pilihan ---</option>
                    <option value="Umum">Umum</option>
                    <option value="Asuransi BPJS">Asuransi BPJS</option>
                    <option value="Lain-lain">Lain-lain</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="JenisPembayaran"
                  className="col-sm-4 col-form-label"
                >
                  Jenis Pembayaran
                  <span className="required">*</span>
                </label>
                <div className="col-sm-5">
                  <select
                    className="form-control"
                    onChange={event =>
                      this.setState({
                        jenis_pembayaran: event.target.value
                      })
                    }
                    required
                  >
                    <option value="">--- Pilihan ---</option>
                    <option value="CASH">CASH</option>
                    <option value="KREDIT">KREDIT</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-info"
                data-toggle="modal"
                data-target="#konfirmasiAntrian"
                disabled={this.state.disabled}
              >
                Pesan
              </button>
              <button className="btn btn-outline-info" data-dismiss="modal">
                Kembali
              </button>
            </div>
          </div>
        </div>
        <Consumer>
          {({ state }) => (
            <ModalKonfirmasiTindakan
              passValue={() => this.handleSave(state.dataLogin.nik)}
              modal="konfirmasiAntrian"
            />
          )}
        </Consumer>
        <ModalKonfirmasi notification={this.state.notification} />
      </div>
    );
  }
}

export default TambahTransaksi;
