import React, { Component } from "react";
import "../../CSS/form.css";
import SVGBillInvoice from "../../svgfile/SVGBillInvoice";

class PendaftaranPelayananMedis extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row justify-content-center" style={{ margin: "0.5em" }}>
          <div className="col-md-10 boxriwayat">
            <table>
              <tbody>
                <tr>
                  <td>Nomor RM</td>
                  <td className="datatable">:&ensp;10390193019</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td className="datatable">:&ensp;Kurnianto Syaputra</td>
                </tr>
                <tr>
                  <td>Poli</td>
                  <td className="datatable">:&ensp;Poli Mata</td>
                </tr>
                <tr>
                  <td>Tanggal</td>
                  <td className="datatable">:&ensp;10 Oktober 1993</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="boxsurat">
                <SVGBillInvoice />
                <h5 className="h5-responsive"> Faktur</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flexpelayanan">
          <div className="boxpelayanan">
            <div className="main">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Transaksi</th>
                    <th>Julmah</th>
                    <th>Harga</th>
                    <th>Total Harga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Abbocath </td>
                    <td>5 tablet</td>
                    <td>Rp 1000</td>
                    <td>Rp 5000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Asolute </td>
                    <td>7 kapsul</td>
                    <td>Rp 3000</td>
                    <td>Rp 21.000</td>
                  </tr>
                  <tr>
                    <td colSpan="4">Total</td>
                    <td>Rp 26.000</td>
                  </tr>

                  <tr>
                    <td colSpan="4">Disc (%)</td>
                    <td>
                      <input
                        type="number"
                        name="diskon"
                        className="form-control"
                        width="100%"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="4">Total Pembayaran</td>
                    <td>Rp 26.000</td>
                  </tr>

                  <tr>
                    <td colSpan="4">Jenis Pembayaran</td>
                    <td>
                      <select name="jenis_pembayaran" className="form-control">
                        <option value="0"> asuransi / jaminan </option>
                        <option value="1"> tunai</option>
                        <option value="2"> kredit</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer justify-content-center">
                <button className="btn btn-primary">Selesai</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PendaftaranPelayananMedis;
