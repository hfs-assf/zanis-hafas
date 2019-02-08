import React, { Component } from "react";
import tambahStokObat from "../../../Methods/Apotik/StokObat/tambahStokObat";
import editStokObat from "../../../Methods/Apotik/StokObat/editStokObat";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";

class FormTambahDetailObat extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      showMe: false,
      uid: "",
      stok: "",
      kadaluarsa: "",
      nik_penerima: "12121",
      harga_modal: "",
      notification: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.action === "edit") {
      this.setState({
        stok: nextProps.selected.stok,
        kadaluarsa: new Date(nextProps.selected.kadaluarsa).toLocaleDateString(
          "en-GB"
        ),
        harga_modal: nextProps.selected.harga_modal
      });
      React.createElement("input", {
        type: "checkbox",
        id: "showHide",
        defaultChecked: true
      });
    } else {
      this.setState({
        uid: nextProps.uid,
        stok: "",
        kadaluarsa: "",
        harga_modal: ""
      });
    }
  }

  handleSave() {
    if (this.props.action === "add") {
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
    } else {
      editStokObat({
        uid: this.props.selected.uid,
        stok: this.state.stok,
        harga_modal: this.state.harga_modal,
        kadaluarsa: this.state.kadaluarsa
      })
        .then(this.setState({ notification: "1" }))
        .catch(err => {
          console.log(err);
          this.setState({ notification: "0" });
        });
    }
  }

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
                {this.props.action === "add" ? "Tambah" : "Ubah"} Obat
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
                      {this.props.action === "add" ? (
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
                      ) : (
                        <input
                          type="text"
                          name="kadaluarsa"
                          className="form-control"
                          value={this.state.kadaluarsa}
                          onChange={event =>
                            this.setState({
                              kadaluarsa: event.target.value
                            })
                          }
                          required
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        name="stok"
                        className="form-control"
                        placeholder="Jumlah Barang Masuk"
                        value={this.state.stok}
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
                        value={this.state.harga_modal}
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
                onClick={this.handleSave}
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
