import React, { Component } from "react";
import tambahItemLaboratorium from "../../../Methods/Admin/tambahItemLabor";
import editItemLabor from "../../../Methods/Admin/editItemLabor";
import SuksesModal from "../../../Views/JSX/Animasi/Sukses";

class TambahLaboratorium extends Component {
  constructor(props) {
    super(props);
    this.tambahItem = this.tambahItem.bind(this);
    this.state = {
      body: "",
      title: "",
      id: "",
      pesan: false
    };
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.action === "edit") {
      this.setState({
        id: nexProps.selected.id,
        title: nexProps.selected.title,
        body: nexProps.selected.body
      });
    }
  }

  tambahItem() {
    if (this.props.action === "add") {
      tambahItemLaboratorium({
        title: this.state.title,
        body: this.state.body
      })
        .then(response => console.log(response))
        .then(() => this.setState({ pesan: true }));
    } else {
      editItemLabor({
        id: this.state.id,
        title: this.state.title,
        body: this.state.body
      })
        .then(response => console.log(response))
        .then(() => alert("Edit Data Berhasil"));
    }
  }

  render() {
    return (
      <div
        className="modal fade right"
        id="tambahItem"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Peralatan Laboratorium
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
                        value={this.state.title}
                        className="form-control"
                        placeholder="Nama Peralatan"
                        onChange={event =>
                          this.setState({
                            title: event.target.value
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
                        type="text"
                        value={this.state.body}
                        className="form-control"
                        placeholder="Tarif"
                        onChange={event =>
                          this.setState({
                            body: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {this.state.pesan ? <SuksesModal /> : null}
            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary" onClick={this.tambahItem}>
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

export default TambahLaboratorium;
