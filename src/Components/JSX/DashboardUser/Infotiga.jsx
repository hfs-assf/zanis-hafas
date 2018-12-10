import React, { Component } from "react";

class DashboarPasienP extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="d-flex no-block">
            <h4 className="card-title">Data Pasien Per Wilayah</h4>
            <div className="ml-auto">
              <select className="custom-select">
                <option value="1">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
              </select>
            </div>
          </div>
          <div className="table-responsive m-t-20">
            <table className="table nowrap stylish-table">
              <thead>
                <tr>
                  <th>Daerah</th>
                  <th>Jumlah Berkunjung</th>
                  <th>%</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="flag-icon flag-icon-us" />
                    <span className="country-name">Pekanbaru Kota</span>
                  </td>
                  <td>392</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger "
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "50%", height: "6px" }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>
                      </div>
                    </div>
                  </td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="flag-icon flag-icon-gb" />
                    <span className="country-name">Senapelan</span>
                  </td>
                  <td>120</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success "
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%", height: "6px" }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>
                      </div>
                    </div>
                  </td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>
                    <i className="flag-icon flag-icon-ca" />
                    <span className="country-name">Bukit Barisan</span>
                  </td>
                  <td>120</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "70%", height: "6px" }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>
                      </div>
                    </div>
                  </td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboarPasienP;
