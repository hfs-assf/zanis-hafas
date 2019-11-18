import React, { Component } from "react";
import tambahObat from "../../../Methods/Apotik/Obat/tambahObat";
import Sukses from "../Animasi/Sukses";
import Gagal from "../Animasi/Gagal";
import { Consumer } from "../../../Methods/User/Auth/Store";

class FormObat extends Component {
  state = {
    nama_obat: "",
    minimal_stok: "",
    satuan: "",
    kategori: "Minum",
    notification: "",
    id_lokasi: ""
  };

  componentWillMount() {
    this.setState({
      nama_obat: "",
      minimal_stok: "",
      satuan: "",
      notification: ""
    });
  }
  tambahObat = (event, id_lokasi) => {
    event.preventDefault();
    tambahObat({
      id_lokasi: id_lokasi,
      nama_obat: this.state.nama_obat,
      minimal_stok: this.state.minimal_stok,
      satuan: this.state.satuan,
      kategori: this.state.kategori
    })
      .then(() => {
        this.setState({
          nama_obat: "",
          minimal_stok: "",
          satuan: "",
          kategori: "Minum",
          notification: <Sukses />
        });
      })
      .then(() => this.setState({ notification: "" }))
      .catch(err => {
        console.log(err);
        this.setState({ notification: <Gagal /> });
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
                        value={this.state.nama_obat}
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
                        value={this.state.minimal_stok}
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
                        value={this.state.satuan}
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
                          this.setState({
                            kategori: e.target.value
                          })
                        }
                        className="form-control"
                      >
                        <option value="Minum">Minum</option>
                        <option value="Makan">Makan</option>
                        <option value="Obat Tetes">Obat Tetes</option>
                        <option value="Injeksi">Injeksi</option>
                        <option value="Supp">Supp</option>
                        <option value="Alat Kesehatan">Alat Kesehatan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>

              {this.state.notification}
            </div>
            <Consumer>
              {({ state }) => {
                return (
                  <div className="modal-footer justify-content-center">
                    <button
                      className="btn btn-info"
                      onClick={event =>
                        this.tambahObat(event, state.dataLogin.id_lokasi)
                      }
                      // disabled={
                      //   !this.state.nama_obat ||
                      //   !this.state.minimal_stok ||
                      //   !this.state.satuan
                      // }
                    >
                      Simpan
                    </button>
                    <button
                      className="btn btn-outline-info"
                      data-dismiss="modal"
                    >
                      Kembali
                    </button>
                  </div>
                );
              }}
            </Consumer>
          </div>
        </div>
      </div>
    );
  }
}
export default FormObat;
