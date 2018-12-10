import React, { Component } from "react";

class DashboarJenisPasien extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ backgroundColor: "#0097a7 ", color: "white" }}
      >
        <div className="card-body">
          <div className="d-flex no-block">
            <h4 className="card-title">Data Pasien Per Wilayah</h4>
            <div className="ml-auto">
              <select className="custom-select">
                <option selected="">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
              </select>
            </div>
          </div>
          <table className="table table-condensed">
            <tbody>
              <tr>
                <td style={{ width: "40px" }}>
                  <img
                    src="https://image.flaticon.com/icons/svg/190/190603.svg"
                    alt="logo1"
                    style={{ height: "35px" }}
                  />
                </td>
                <td>Perempuan</td>
                <td className="text-right">
                  <span className="label label-light-info">23%</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://image.flaticon.com/icons/svg/145/145867.svg"
                    alt="logo"
                  />
                </td>
                <td>Laki - Laki </td>
                <td className="text-right">
                  <span className="label label-light-success">15%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DashboarJenisPasien;
