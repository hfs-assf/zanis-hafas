import React, { Component } from "react";
import tambahObat from "../../../Methods/Apotik/Obat/tambahObat";

class FormObat extends Component {
  state = {
    nama_obat: "",
    minimal_stok: "10",
    satuan: "",
    kategori: "Minum"
  };

  tambahObat = event => {
    event.preventDefault();
    tambahObat({
      nama_obat: this.state.nama_obat,
      minimal_stok: this.state.minimal_stok,
      satuan: this.state.satuan,
      kategori: this.state.kategori
    });
  };
  render() {
    return (
      <div
        className="modal fade right"
        id="addmedicine"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color white-text text-center py-4">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Daftar Obat
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
                      <input
                        type="text"
                        name="nama_obat"
                        className="form-control"
                        placeholder="Nama Obat"
                        onChange={event =>
                          this.setState({
                            nama_obat: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="minimal_stok"
                        className="form-control"
                        placeholder="Batas Minimum"
                        onChange={event =>
                          this.setState({
                            minimal_stok: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="satuan"
                        className="form-control"
                        placeholder="Satuan"
                        onChange={event =>
                          this.setState({
                            satuan: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Kategori</span>
                      <select
                        onChange={e =>
                          this.setState({ kategori: e.target.value })
                        }
                        className="form-control"
                      >
                        <option value="Minum">Minum</option>
                        <option value="Makan">Makan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-info"
                onClick={event => this.tambahObat(event)}
              >
                Simpan
              </button>
              <button className="btn btn-outline-info" data-dismiss="modal">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormObat;
