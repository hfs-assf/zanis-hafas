import React, { Component } from "react";
import { Link } from "react-router-dom";
import SVGpatient from "../../../Components/ASSETS/SVG/Patient";
import SVGdashboard from "../../../Components/ASSETS/SVG/svgdashboard";
import "../../../Components/ASSETS/CSS/Sidebar.css";
import SVGApotek from "../../../Components/ASSETS/SVG/svgapotek";
import SVGPelayananMedis from "../../../Components/ASSETS/SVG/SVGpelayananmedis";
import SVGKasir from "../../../Components/ASSETS/SVG/SVGkasir";
import SVGAdmin from "../../../Components/ASSETS/SVG/SVGAdmin";
import SVGAkunting from "../../../Components/ASSETS/SVG/Akunting";
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
                    <Link to="/rekam_medis">Rekam Medis</Link>
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
                    <Link to="/profil-klinik">Profil Klinik</Link>
                  </li>

                  <li>
                    <Link to="/karyawan">Daftar Karyawan</Link>
                  </li>
                  <li>
                    <Link to="/poliklinik">Daftar Poliklinik</Link>
                  </li>
                  <li>
                    <Link to="/tindakan">Daftar Tindakan</Link>
                  </li>
                  <li>
                    <Link to="/peralatan-laboratorium">
                      Daftar Peralatan Laboratorium
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link
                  to="/akunting"
                  className="has-arrow"
                  aria-expanded="false"
                >
                  <SVGAkunting />
                  <span className="hide-menu">Jurnal Akunting</span>
                </Link>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <Link to="/neraca-lajur">Neraca Lajur</Link>
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
