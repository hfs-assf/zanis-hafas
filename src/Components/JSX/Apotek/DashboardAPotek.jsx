import React, { Component } from "react";
import SVGapotek from "../../ASSETS/SVG/svgapotek";
import "../../ASSETS/CSS/DashboardApotek.css";
import { obat } from "../../../Methods/Apotik/Obat/listObat";
import { Consumer } from "../../../Methods/User/Auth/Store";
import { withContext } from "../../../Methods/HOC/withContext";

class DashboardApotek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftarObat: []
    };
  }

  componentDidMount = () => {
    obat(this.props.getValue)
      .then(({ data }) => {
        this.setState({
          daftarObat: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  jmlObat = () => {
    const { daftarObat } = this.state;
    const filter = daftarObat.filter.length;
    return filter;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4 ">
          <div className="card card-inverse info-color">
            <div className="card-body" style={{ maxHeight: "140px" }}>
              <div className="d-flex">
                <div className="col-sm-3">
                  <SVGapotek />
                </div>
                <div className="col-sm-9">
                  <h4 className="text-white">Daftar Obat</h4>
                  <Consumer>
                    {({ state }) => {
                      return (
                        <h2 className="font-light text-white">
                          {this.jmlObat(state.dataLogin.id_lokasi)}
                        </h2>
                      );
                    }}
                  </Consumer>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info btn-sm waves-effect waves-light"
                type="button"
                data-toggle="modal"
                data-target="#addmedicine"
                data-placement="bottom"
                title="Tambah Obat"
              >
                Tambah Obat
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-inverse danger-color">
            <div className="card-body" style={{ maxHeight: "140px" }}>
              <div className="d-flex">
                <div className="col-sm-3">
                  <SVGapotek />
                </div>
                <div className="col-sm-9">
                  <h4 className="text-white">Obat yang akan expired</h4>
                  {/* <h6 className="text-white">Oktober 2018</h6>
                  <h2 className="font-light text-white">1400</h2> */}
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#expDetail"
                data-placement="bottom"
                title="Lihat Detail Obat Expired"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-inverse info-color">
            <div className="card-body" style={{ maxHeight: "140px" }}>
              <div className="d-flex">
                <div className="col-sm-3">
                  <SVGapotek />
                </div>
                <div className="col-sm-9">
                  <h4 className="text-white">Persediaan obat yang menipis</h4>
                  {/* <h2 className="font-light text-white">1400</h2> */}
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info btn-sm"
                data-toggle="modal"
                data-target="#minStockDetail"
                data-placement="bottom"
                title="Lihat Detail Persediaan Obat"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(DashboardApotek);
