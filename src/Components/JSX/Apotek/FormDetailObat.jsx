import React, { Component } from "react";
import detailObat from "../../../Methods/Apotik/Obat/detailObat";

class FormDetailObat extends Component {
  state = {
    nama_obat: "",
    jumlah_minimum: "",
    satuan: ""
  };
  componentWillMount() {
    detailObat(this.props.uid).then(({ data }) => {
      // let { nama_obat, jumlah_minimum, satuan } = data.data;
      // this.setState({
      //   nama_obat: nama_obat,
      //   jumlah_minimum: jumlah_minimum,
      //   satuan: satuan
      // });
      console.log(data);
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
                  <div className="col-sm-6">
                    <label>
                      <span>
                        Jumlah Minimum <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="jumlah_minimum"
                        value={this.state.jumlah_minimum}
                        onChange={event =>
                          this.setState({
                            jumlah_minimum: event.target.value
                          })
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    {" "}
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
                <br />
              </fieldset>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="modal-footer justify-content-center">
                  <button className="btn btn-primary">Simpan</button>
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
