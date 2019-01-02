import React, { Component } from "react";
import hapusObat from "../../Methods/Apotik/Obat/hapusObat";
import hapusTindakan from "../../Methods/Poli/Tindakan/hapusTindakan";
// import detailTindakan from "../../../Methods/Poli/Tindakan/detailTindakan";

class Hapus extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      uid: "",
      field: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      uid: nextProps.selected.uid,
      field: nextProps.field
    });
  }

  deleteItem = uid => {
    if (this.state.field === "obat") {
      hapusObat(uid);
    } else if (this.state.field === "tindakan") {
      hapusTindakan(uid);
    }
  };

  render() {
    return (
      <div
        className="modal fade right"
        id="hapus"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Hapus
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
              Apakah yakin untuk menghapus {this.state.field} ini?
            </div>

            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-info"
                onClick={() => this.deleteItem(this.state.uid)}
              >
                Ya
              </button>
              <button
                className="btn btn-outline-info waves-effect"
                data-dismiss="modal"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hapus;
