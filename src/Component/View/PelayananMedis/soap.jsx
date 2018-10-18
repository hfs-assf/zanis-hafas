import React from "react";

const SOAP = props => (
  <div className="container-fluid">
    <div className="row soaps">
      <div className="col-md-2">
        <div className="boxsoap">Vital Sign</div>
        <div className="isisoap">
          <table>
            <tbody>
              <tr>
                <td>Sistole</td>
                <td>
                  <input type="number" refs="sistole" />
                </td>
              </tr>
              <tr>
                <td>Diastole</td>
                <td>
                  <input type="number" refs="disatole" />
                </td>
              </tr>
              <tr>
                <td>Suhu</td>
                <td>
                  <input type="number" refs="suhu" />
                </td>
              </tr>
              <tr>
                <td>Pulse</td>
                <td>
                  <input type="number" refs="pulse" />
                </td>
              </tr>
              <tr>
                <td>Respirasi</td>
                <td>
                  <input type="number" refs="respirasi" />
                </td>
              </tr>
              <tr>
                <td>Tinggi</td>
                <td>
                  <input type="number" refs="tinggi" />
                </td>
              </tr>
              <tr>
                <td>Berat</td>
                <td>
                  <input type="number" refs="berat" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-10">
        <div className="pencariansoap">
          <input
            type="text"
            refs="pencariansoap"
            placeholder="Cari Nama Template SOAP"
          />
          <button className="btn btn-cyan accent-3 btn-sm ">Salin</button>
        </div>
        <div className="row">
          <div className="col-md-5 rowsoap">
            <div className="legendtitle">Subjektif</div>
            <textarea
              placeholder="Isi Form Tindakan"
              name="textarea"
              class="textarea"
            />
          </div>
          <div className="col-md-5 rowsoap">
            <div className="legendtitle">Analisa</div>
            <textarea
              placeholder="Isi Form Tindakan"
              name="textarea"
              class="textarea"
            />
          </div>
          <div className="col-md-5 rowsoap">
            <div className="legendtitle">Objektif</div>
            <textarea
              placeholder="Isi Form Tindakan"
              name="textarea"
              class="textarea"
            />
          </div>
          <div className="col-md-5 rowsoap">
            <div className="legendtitle">Tindakan</div>
            <textarea
              placeholder="Isi Form Tindakan"
              name="textarea"
              class="textarea"
            />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="diagnosa">
          Diagnosa <input type="text" placeholder="isi diagnosa" />
        </div>
      </div>
      <div className="float-right">
        <button className="btn btn-info btn-md">Simpan</button>
        <button className="btn btn-orange accent-4 btn-md">Bersihkan</button>
      </div>
    </div>
  </div>
);

export default SOAP;
