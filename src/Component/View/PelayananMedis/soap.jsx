import React from "react";

const SOAP = props => (
  <div className="container-fluid">
    <div className="row soaps">
      <div className="col-md-2">
        <div className="boxsoap">Ini Vital Sign</div>
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
          <button className="tombolsoap">Salin</button>
        </div>
      </div>
    </div>
  </div>
);

export default SOAP;
