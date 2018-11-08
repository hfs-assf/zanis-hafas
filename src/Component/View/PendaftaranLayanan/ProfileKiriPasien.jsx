import React from "react";
import SVGPencarianPasien from "../../svgfile/pencarianpasien";
import SVGRiwayatPasien from "../../svgfile/SVGhistorypasien";
import RiwayatPasien from "./RiwayatKunjungan";

const ProfileKiriPasien = props => (
  <div className="card-box">
    <div className="member-card">
      <div className="thumb-xl member-thumb m-b-10 center-block">
        <img
          src="https://image.flaticon.com/icons/svg/149/149071.svg"
          className="img-fluid"
          alt="pasien"
          style={{ width: "200px", height: "200px" }}
        />
        <h5 className="header-title">Kurnianto Syaputra</h5>
        <h5 className="header-title indigo-text">11900091093</h5>
        <hr className="hr1" />
      </div>
    </div>
    <div className="bottommenu">
      {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item warnatab col-sm-6">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            
            Biodata
          </a>
        </li>
        <li className="nav-item warnatab col-sm-6">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
           
            Riwayat Berobat
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane warnacontent fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          
        </div>
        <div
          className="tab-pane warnacontent fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
         
        </div>
      </div> */}
      <div className="tabs">
        <input type="radio" id="tab1" name="tab-control" checked />
        <input type="radio" id="tab2" name="tab-control" />
        <ul>
          <li title="Features">
            <label for="tab1" role="button">
              <span>Data Diri</span>
            </label>
          </li>
          <li title="Delivery Contents">
            <label for="tab2" role="button">
              <span>Riwayat</span>
            </label>
          </li>
        </ul>

        <div className="slider">
          <div className="indicator" />
        </div>
        <div className="content">
          <section>Data Diri</section>
          <section>Riawayat</section>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileKiriPasien;
