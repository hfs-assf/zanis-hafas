import React, { Component } from "react";
import ItemPemeriksaan from "../../../../JSON/itemPemeriksaanLab";

class HasilLaboratorium extends Component {
  daftarItemPemeriksaan() {
    return ItemPemeriksaan.map((el, index) => (
      <div className="row1" key={index}>
        <div className="cell" style={{ paddingLeft: 5 + 25 * el.level + "px" }}>
          {el.item}
        </div>
        <div className="cell">
          <input type="number" refs="{el.item}" />
        </div>
        <div className="cell">{el.nilai_normal}</div>
      </div>
    ));
  }
  render() {
    return (
      <div
        className="modal fade bottom"
        id="formLab"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-bottom" role="document">
          <div className="modal-content">
            <div className="modal-header primary-color white-text text-center">
              <h4 className="modal-title w-100" id="myModalLabel">
                Hasil Laboratorium
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">Item Pemeriksaan</div>
                    <div className="cell">Nilai Hasil</div>
                    <div className="cell">Nilai Normal</div>
                  </div>
                  {this.daftarItemPemeriksaan()}
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-primary">
                Simpan
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-dismiss="modal"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HasilLaboratorium;
