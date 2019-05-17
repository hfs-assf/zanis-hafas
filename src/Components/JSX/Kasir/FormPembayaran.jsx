import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import SVGBillInvoice from "../../ASSETS/SVG/SVGBillInvoice";
import DetailPasienKasir from "../DetailPasienKasir";
import FormTambahTransaksi from "./FormTambahTransksi";
class FormPembayaran extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row justify-content-center" style={{ margin: "0.5em" }}>
          <div className="col-md-8 boxriwayat">
            <DetailPasienKasir
              no_rm={this.props.kasir}
              antrian_pasien={this.props.antrian_pasien}
            />
          </div>
          {/* <div className="col-md-2 mr-0">
            <div className="row">
              <div className="boxsurat" data-toggle="modal" data-target="#addtransaction">
                <SVGBillInvoice />
                <h5 className="h5-responsive"> Transaksi </h5>
              </div>
            </div>
          </div>
          <div className="col-md-2 ml-0 mr-0">
            <div className="row">
              <div className="boxsurat">
                <SVGBillInvoice />
                <h5 className="h5-responsive"> Faktur</h5>
              </div>
            </div>
          </div>
        </div> */}
          <div className="col-md-4">
            <div className="row">
              <div className="boxsurat">
                <SVGBillInvoice />
                <h5 className="h5-responsive"> Transaksi</h5>
              </div>
              <div
                className="boxsurat"
                data-toggle="modal"
                data-target="#sickleaveletter"
              >
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
                    <th>Jumlah</th>
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
                        style={{ width: "150px" }}
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
        <FormTambahTransaksi id={this.props.pasien} />
      </div>
    );
  }
}

export default FormPembayaran;
