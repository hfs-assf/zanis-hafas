import React, { Component } from "react";
import { withContext } from "../../../Methods/HOC/withContext.js";
import menipis from "../../../Methods/Apotik/StokObat/minStokObat";

class MinStockDetail extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      id_obat: ""
    };
  }

  componentDidMount() {
    menipis(this.props.getValue).then(({ data }) => {
      this.setState({
        list: data
      });
    });
  }

  daftarObatExp = () => {
    return this.state.list.map((el, index) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={index}
      >
        <span>
          <input
            type="checkbox"
            name="id_obat"
            value="{el.id}"
            {...this.uid_obat}
          />
          &nbsp;
          {el.nama_obat}
        </span>
        <span className="badge badge-danger badge-pill">
          stok tinggal {el.stok}
        </span>
      </li>
    ));
  };

  render() {
    return (
      <div
        className="modal fade"
        id="minStockDetail"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="heading lead">Obat yang akan habis</p>

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
                <p>Harap segera melakukan pemesanan obat ke pemasok.</p>
              </div>
              <ul className="list-group z-depth-0">{this.daftarObatExp()}</ul>
              <div className="text-center">
                <p>
                  <br />
                  <input
                    type="checkbox"
                    name="suci"
                    value="oke"
                    onClick={() => this.checked()}
                  />
                  Pilih semua
                </p>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              {/* <button className="btn btn-info">Pesan</button> */}
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
export default withContext(MinStockDetail);
