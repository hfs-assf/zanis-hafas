import React, { Component } from "react";
import { Link } from "react-router-dom";
import SVGpatient from "../../svgfile/patient";
import SVGdashboard from "../../svgfile/svgdashboard";
import "../../CSS/Sidebar.css";
import SVGApotek from "../../svgfile/svgapotek";
import SVGPelayananMedis from "../../svgfile/SVGpelayananmedis";
import SVGKasir from "../../svgfile/SVGkasir";
import SVGAdmin from "../../svgfile/SVGAdmin";
class Sidebar extends Component {
  render() {
    return (
      <aside className="left-sidebar sticky">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="nav-devider" />

              <li>
                {" "}
                <Link to="/login" className="has-arrow" aria-expanded="false">
                  <SVGdashboard />
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/pendaftaran"
                  className="has-arrow"
                  aria-expanded="false"
                >
                  <SVGpatient />
                  <span className="hide-menu">Pendaftaran Pasien</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/pelayanan-medis"
                  className="has-arrow"
                  aria-expanded="false"
                >
                  <SVGPelayananMedis />
                  <span className="hide-menu">Pelayanan Medis</span>
                </Link>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/pelayanan-medis">Daftar Antrian</Link>
                  </li>
                  <li>
                    <Link to="/rekam_medispasien">Rekam Medis Pasien</Link>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link to="/apotek" className="has-arrow" aria-expanded="false">
                  <SVGApotek size="20pt" />
                  <span className="hide-menu">Apotek</span>
                </Link>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/apotek">Daftar Antrian</Link>
                  </li>
                  <li>
                    <Link to="/kelola_apotek">Kelola Apotek</Link>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link to="/kasir" className="has-arrow" aria-expanded="false">
                  <SVGKasir size="20pt" />
                  <span className="hide-menu">Kasir</span>
                </Link>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/kasir">Daftar Antrian</Link>
                  </li>
                  <li>
                    <Link to="/kelola_biaya">Kelola Biaya</Link>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link to="/admin" className="has-arrow" aria-expanded="false">
                  <SVGAdmin />
                  <span className="hide-menu">Admin</span>
                </Link>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/karyawan">Daftar Karyawan</Link>
                  </li>
                  <li>
                    <Link to="/poliklinik">Daftar Poliklinik</Link>
                  </li>
                  <li>
                    <Link to="/biayatindakan">Daftar Tindakan</Link>
                  </li>
                  <li>
                    <Link to="/biayaujilab">Daftar Uji Lab</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
