import React, { Component } from "react";
import tambahTindakan from "../../../Methods/Poli/Tindakan/tambahTindakan";

class TambahTindakan extends Component {
  state = {
    showMe: false,
    nama_tindakan: "",
    biaya_tindakan: ""
  };

  tambahTindakan = event => {
    event.preventDefault();
    tambahTindakan({
      nama_tindakan: this.state.nama_tindakan,
      biaya_tindakan: this.state.biaya_tindakan
    });
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
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Tindakan
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
                        name="nama_tindakan"
                        className="form-control"
                        placeholder="Nama Tindakan"
                        onChange={event =>
                          this.setState({
                            nama_tindakan: event.target.value
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
                      <input
                        type="number"
                        name="tarif_tindakan"
                        className="form-control"
                        placeholder="Tarif"
                        onChange={event =>
                          this.setState({
                            biaya_tindakan: event.target.value
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
                className="btn btn-info"
                onClick={event => this.tambahTindakan(event)}
              >
                Simpan
              </button>
              <button
                className="btn btn-outline-info waves-effect"
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
