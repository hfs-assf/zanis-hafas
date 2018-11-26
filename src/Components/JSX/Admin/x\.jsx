import React, { Component } from "react";

class UbahProfilKlinik extends Component {
  render() {
    return (
      <div className="card-box">
        <div className="row">
          <div className="col-md-4">
            <div className="member-card">
              <div className="thumb-xl member-thumb m-b-10 center-block">
                <img
                  src="https://image.flaticon.com/icons/svg/149/149071.svg"
                  className="img-fluid"
                  alt="pasien"
                  style={{ width: "200px", height: "200px" }}
                />
                <h5 className="header-title indigo-text">Ubah Logo Klinik</h5>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}
export default UbahProfilKlinik;
