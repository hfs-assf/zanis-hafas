import React, { Component } from "react";

class ResepObat extends Component {
  render() {
    return (
      <div className="container animated bounceInDown">
        <fieldset>
          <div className="header-resep">
            <button
              type="button"
              className="close"
              data-dismiss="header-resep"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            Resep Obat
            <div className="table-responsive">
              <table className="table table-hover dataTable resep">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Obat</th>
                    <th>Jumlah</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Abbocath </td>
                    <td>5 tablet</td>
                    <td>Setelah makan 3x1 hari</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Asolute </td>
                    <td>7 kapsul</td>
                    <td>Setelah makan 3x1 hari</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="btn btn-info btn-md">
              Selesai
            </button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ResepObat;
