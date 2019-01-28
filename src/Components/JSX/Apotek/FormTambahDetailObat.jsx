import React, { Component } from "react";
import tambahStokObat from "../../../Methods/Apotik/StokObat/tambahStokObat";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";

class FormTambahDetailObat extends Component {
  state = {
    showMe: false,
    uid: "",
    stok: "",
    kadaluarsa: "",
    nik_penerima: "12121",
    harga_modal: "",
    notification: ""
  };

  tambahStokObat = event => {
    event.preventDefault();
    tambahStokObat({
      uid: this.props.uid,
      stok: this.state.stok,
      kadaluarsa: this.state.kadaluarsa,
      nik_penerima: this.state.nik_penerima,
      harga_modal: this.state.harga_modal
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
        className="modal fade right"
        id="tambahObatMasuk"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Form Tambah Obat
              </h4>

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
              <form method="POST">
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Kadaluarsa</span>
                      <input
                        type="date"
                        name="kadaluarsa"
                        className="form-control"
                        onChange={event =>
                          this.setState({
                            kadaluarsa: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        name="stok"
                        className="form-control"
                        placeholder="Jumlah Barang Masuk"
                        onChange={event =>
                          this.setState({
                            stok: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        name="harga_modal"
                        className="form-control"
                        placeholder="Harga Modal"
                        onChange={event =>
                          this.setState({
                            harga_modal: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#notification"
                onClick={event => this.tambahStokObat(event)}
              >
                Simpan
              </button>
              <button
                className="btn btn-outline-primary waves-effect"
                data-dismiss="modal"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
        <ModalKonfirmasi notification={this.state.notification} />
      </div>
    );
  }
}

export default FormTambahDetailObat;
