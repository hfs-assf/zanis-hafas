import React, { Component } from "react";
import detailObat from "../../../Methods/Apotik/Obat/detailObat";
import editObat from "../../../Methods/Apotik/Obat/editObat";

class FormDetailObat extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      nama_obat: "",
      minimal_stok: "",
      satuan: "",
      kategori: ""
    };
  }
  componentWillMount() {
    detailObat(this.props.uid).then(({ data }) => {
      let { nama_obat, minimal_stok, satuan, kategori } = data[0];
      this.setState({
        nama_obat: nama_obat,
        minimal_stok: minimal_stok,
        satuan: satuan,
        kategori: kategori
      });
    });
  }
  handleSave() {
    editObat({
      uid: this.props.uid,
      nama_obat: this.state.nama_obat,
      minimal_stok: this.state.minimal_stok,
      satuan: this.state.satuan,
      kategori: this.state.kategori
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="form-style">
          <form>
            <div className="col-md-12">
              <fieldset>
                <legend> Deskripsi Obat</legend>
                <div className="row">
                  <div className="col-sm-12">
                    <label>
                      <span>
                        Nama Obat <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="nama_obat"
                        value={this.state.nama_obat}
                        onChange={event =>
                          this.setState({
                            nama_obat: event.target.value
                          })
                        }
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label>
                      <span>
                        Jumlah Minimum <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="minimal_stok"
                        value={this.state.minimal_stok}
                        onChange={event =>
                          this.setState({
                            minimal_stok: event.target.value
                          })
                        }
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label>
                      <span>
                        Satuan <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="satuan"
                        value={this.state.satuan}
                        onChange={event =>
                          this.setState({
                            satuan: event.target.value
                          })
                        }
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label>
                      <span>
                        Kategori <span className="required">*</span>
                      </span>
                      <select
                        onChange={event =>
                          this.setState({
                            kategori: event.target.value
                          })
                        }
                        className="form-control"
                      >
                        <option value={this.state.kategori}>
                          {this.state.kategori}
                        </option>
                        <option value="Minum">Minum</option>
                        <option value="Makan">Makan</option>
                        <option value="Obat Tetes">Obat Tetes</option>
                        <option value="Injeksi">Makan</option>
                        <option value="Sopp">Sopp</option>
                        <option value="Alat Kesehatan">Alat Kesehatan</option>
                      </select>
                    </label>
                  </div>
                </div>
                <br />
              </fieldset>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="modal-footer justify-content-center">
                  <button className="btn btn-primary" onClick={this.handleSave}>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormDetailObat;
