import React, { Component } from "react";
import tambahPoliklinik from "../../../Methods/Admin/tambahPoliknlik";

class TambahPoliklinik extends Component {
  // tambahPoli = event => {
  //   event.preventDefault();
  //   let { nama_poli } = this.refs;
  //   tambahPoliklinik({ nama_poli: nama_poli.value })
  //     .then(response => console.log(response))
  //     .catch(() => alert("error"));
  // };
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      id: "",
      nama: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === "edit") {
      this.setState({
        id: nextProps.selected.idTeam,
        nama: nextProps.selected.strTeam
      });
    }
  }

  handleSave() {
    if (this.props.action === "add") {
      tambahPoliklinik({
        id: this.state.id,
        nama: this.state.nama
      });
      // } else {
      //   editUser({ id: this.state.id, nama: this.state.nama });
    }
  }

  render() {
    return (
      <div
        className="modal fade right"
        id="tambahPoliklinik"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Poliklinik
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
                        className="form-control"
                        placeholder="Masukkan Nama Poliklinik"
                        value={this.state.nama}
                        onChange={event =>
                          this.setState({
                            nama: event.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary" onClick={this.handleSave}>
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
      </div>
    );
  }
}

export default TambahPoliklinik;
