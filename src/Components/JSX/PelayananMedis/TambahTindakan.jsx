import React, { Component } from "react";
import tambahTindakan from "../../../Methods/Poli/Tindakan/tambahTindakan";
import { Consumer } from "../../../Methods/User/Auth/Store";

class TambahTindakan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
      nama_tindakan: "",
      biaya_tindakan: "",
      jenis: "",
      id_lokasi: ""
    };
  }

  showHide = value => {
    this.setState({ showMe: value });
  };

  handleSave = id_lokasi => {
    tambahTindakan({
      id_lokasi: id_lokasi,
      nama_tindakan: this.state.nama_tindakan,
      biaya_tindakan: this.state.biaya_tindakan,
      jenis: this.state.jenis
    })
      .then(el => console.log(el, "berhasil"))
      .catch(err => console.log("err", err));
    // console.log(
    //   "cuma",
    //   id_lokasi,
    //   this.state.nama_tindakan,
    //   this.state.biaya_tindakan,
    //   this.state.jenis
    // );
  };

  render() {
    return (
      <div
        className="modal fade right"
        id="tambahTindakan"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
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
              <form method="post">
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="nama_tindakan"
                        className="form-control"
                        placeholder="tindakan"
                        value={this.state.nama_tindakan}
                        onChange={e =>
                          this.setState({
                            nama_tindakan: e.target.value
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
                        name="biaya_tindakan"
                        className="form-control"
                        placeholder="biaya"
                        value={this.state.biaya_tindakan}
                        onChange={e =>
                          this.setState({
                            biaya_tindakan: e.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="jenis"
                        className="form-control"
                        placeholder="jenis"
                        value={this.state.jenis}
                        onChange={e =>
                          this.setState({
                            jenis: e.target.value
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
              <Consumer>
                {({ state }) => {
                  return (
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      onClick={() => this.handleSave(state.dataLogin.id_lokasi)}
                    >
                      Simpan
                    </button>
                  );
                }}
              </Consumer>
              <button
                className="btn btn-outline-primary waves-effect"
                data-dismiss="modal"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TambahTindakan;
