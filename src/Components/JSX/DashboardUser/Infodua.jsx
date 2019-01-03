import React, { Component } from "react";
import listPasien from "../../../Methods/Admin/getDataLabor";

class DashboarJenisPasien extends Component {
  constructor(props) {
    super();
    this.state = {
      pasien: [],
      selected: "1"
    };
  }

  componentDidMount() {
    listPasien().then(({ data }) => {
      this.setState({
        pasien: this.state.pasien.concat(data)
      });
    });
  }

  render() {
    return (
      <div className="card gradient">
        <div className="card-body">
          <div className="d-flex no-block">
            <h4 className="card-title text-white">Data Pasien Per Wilayah</h4>
            <div className="ml-auto">
              <select className="custom-select">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
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
                  <span className="label label-light-info">
                    {(this.state.pasien.length / 50) * 100}%
                  </span>
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
                  <span className="label label-light-success">
                    {this.state.pasien.length}
                  </span>
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
