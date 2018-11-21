import React, { Component } from "react";
import obat from "../../../JSON/daftarObat.json";

class MinStockDetail extends Component {
  constructor() {
    super();
    this.state = {
      id_obat: ""
    };
  }
  daftarObatExp() {
    return obat.map((el, index) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={index}
      >
        <span>
          <input
            type="checkbox"
            name="id_obat"
            value="{el.id}"
            {...this.id_obat}
          />
          &nbsp;
          {el.nama}
        </span>
        <span className="badge badge-danger badge-pill">
          {el.persediaan} {el.satuan}
        </span>
      </li>
    ));
  }

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
              <button className="btn btn-info">Pesan</button>
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
export default MinStockDetail;
