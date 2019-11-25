import React, { Component } from "react";
import * as waktu from "../../../Methods/waktu";
import expiredObat from "../../../Methods/Apotik/StokObat/expiredObat";
import { withContext } from "../../../Methods/HOC/withContext";

class ExpiredDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisObat: [],
      filterTanggal: waktu.dateFormat()
    };
  }

  componentDidMount = () => {
    expiredObat(this.state.filterTanggal, this.props.getValue).then(
      ({ data }) => {
        this.setState({
          lisObat: data
        });
      }
    );
  };

  daftarObatExp() {
    return this.state.lisObat.map((el, index) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={index}
      >
        {el.nama_obat} : {el.stok}
        <span className="badge badge-danger badge-pill">
          {new Date(el.kadaluarsa).toLocaleDateString("en-GB")}
        </span>
      </li>
    ));
  }
  render() {
    return (
      <div
        className="modal fade"
        id="expDetail"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="heading lead">Obat yang akan expired</p>

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
              <div className="text-center">
                <p>Harap segera melakukan tindakan penghancuran obat.</p>
              </div>
              <ul className="list-group z-depth-0">{this.daftarObatExp()}</ul>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-info">Detail</button>
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
export default withContext(ExpiredDetail);
