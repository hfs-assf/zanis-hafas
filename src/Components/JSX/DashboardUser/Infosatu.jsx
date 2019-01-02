import React, { Component } from "react";
import "../../ASSETS/CSS/Dashboard.css";
import listPasien from "../../../Methods/Admin/getDataLabor";

class Infosatu extends Component {
  constructor(props) {
    super();
    this.state = {
      pasien: []
    };
  }

  componentDidMount() {
    listPasien().then(({ data }) => {
      this.setState({
        pasien: this.state.pasien.concat(data)
      });
      console.log(this.state.pasien);
    });
  }

  render() {
    return (
      <div className="card-group">
        <div className="card gradient">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h2 className="m-b-0">
                  <img
                    src="https://image.flaticon.com/icons/svg/754/754554.svg"
                    alt="gambar"
                    style={{ width: "1em", height: "1em" }}
                  />
                </h2>
                <h3 className="text-white">{this.state.pasien.length}</h3>
                <h4 className="card-subtitle text-white">
                  Jumlah Pasien Hari Ini
                </h4>
              </div>
              <div className="col-12">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "85%", height: "6px" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card gradient">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h2 className="m-b-0">
                  <img
                    src="https://image.flaticon.com/icons/svg/754/754554.svg"
                    alt="gambar"
                    style={{ width: "1em", height: "1em" }}
                  />
                </h2>
                <h3 className="text-white">{this.state.pasien.length}</h3>
                <h4 className="card-subtitle text-white">Pasien Terlayani</h4>
              </div>
              <div className="col-12">
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "85%", height: "6px" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Infosatu;
