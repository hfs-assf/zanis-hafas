import React, { Component } from "react";
import "../../CSS/Apotek.css";
import "../../CSS/form.css";
import obat from "../../../JSON/daftarObat.json";

class TableApotek extends Component {
  daftarObat() {
    return obat.map((el, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{el.nama}</td>
        <td>{el.kategori}</td>
        <td>{el.harga_beli}</td>
        <td>{el.harga_jual}</td>
        <td>
          {el.persediaan} {el.satuan}
        </td>
        <td>{el.masa_berlaku}</td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="flexpelayanan" style={{ margin: "15px 0px 10px 0px" }}>
        <div className="boxpelayanan">
          <div className="main">
            {/* <div className="maxrow row" style={{ margin: "15px 0px 10px 0px" }}>
          <div className="col-md-10">
            <input
              type="text"
              refs="pencariansoap"
              placeholder="Cari Nama Template SOAP"
              className="form-control"
            />
          </div>
        </div> */}
            <div className="mainsearch">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari Pasien"
                />
              </div>
            </div>
            <table
              id="dtVerticalScrollExample"
              className="table table-hover table-bordered table-sm mt-5"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="th-sm">
                    #<i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th className="th-sm">
                    Nama Obat
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th className="th-sm">
                    Kategori
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th className="th-sm">
                    Harga Beli
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th className="th-sm">
                    Harga Jual
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th className="th-sm">
                    Stok Gudang
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th className="th-sm">
                    Tanggal Expired
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">{this.daftarObat()}</tbody>
              <tfoot>
                <tr>
                  <th>#</th>
                  <th>Nama Obat</th>
                  <th>Kategori</th>
                  <th>Harga Beli</th>
                  <th>Harga Jual</th>
                  <th>Stok Gudang</th>
                  <th>Tanggal Expired</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TableApotek;
