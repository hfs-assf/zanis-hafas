import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css"

class FormTambahTransaksi extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      no_rm: "",
      jenis_transaksi: "",
      transaksi: "",
      jumlah: ""
    };
  }

  componentDidMount = () => {
    console.log("ke form tambah transaksi", this.props.no_rm);
    // this.setState({
    //   no_rm: this.this.props.no_rm
    // });
  };

  handleSubmit() {}
  ubahTransaksi(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div
        className="modal fade right"
        id="addtransaction"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-full-height modal-right"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header info-color white-text text-center py-4">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Transaksi
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
            <form className="modal-body" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <span>Jenis Transaksi </span>
                    <select
                      onChange={e =>
                        this.setState({
                          jenis_transaksi: e.target.value
                        })
                      }
                      className="form-control"
                    >
                      <option value="Obat">Obat</option>
                      <option value="Tindakan">Tindakan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <span>Transaksi </span>
                    <select
                      onChange={e =>
                        this.setState({
                          transaksi: e.target.value
                        })
                      }
                      className="form-control"
                    >
                      <option value="" />
                      <option value="" />
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="number"
                      name="jumlah"
                      className="form-control"
                      placeholder="Jumlah"
                      onChange={e =>
                        this.setState({
                          jumlah: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <span>Harga</span>
                    <input
                      type="text"
                      name="harga"
                      className="form-control"
                      value="Rp. 0"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button className="btn btn-info">Tambah</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTambahTransaksi;
