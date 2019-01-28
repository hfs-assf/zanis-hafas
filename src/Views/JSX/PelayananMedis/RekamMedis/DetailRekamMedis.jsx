import React, { Component } from "react";
import ViewRekamMedisList from "../../../../Components/JSX/PelayananMedis/RekamMedis/ViewRekamMedislist";
import ProfileKiriPasien from "../../../../Components/JSX/Pendaftaran/DaftarPelayananMedis/ProfileKiriPasien";
class RekamMedisList extends Component {
  render() {
    console.log(this.props.pasien.id);
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Detail List Rekam Medis Pasien
              </h2>
            </div>

            <div className="box column2" />
          </div>
          <hr className="hr2" />{" "}
          <div className="row">
            <div className="col-md-4 hidden-sm hidden-xs">
              <ProfileKiriPasien pasien={this.props.pasien.id} />
            </div>
            <div className="col-md-7 card-box1">
              {/* <div className="kotak"> */}
              <ViewRekamMedisList />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RekamMedisList;
