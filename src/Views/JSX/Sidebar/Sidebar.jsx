import React, { Component } from "react";
import { Consumer } from "../../../Methods/User/Auth/Store";
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
  lastNumber = num => {
    return num
      .toString()
      .split("")
      .pop();
  };

  render() {
    return (
      <Consumer>
        {({ state, action }) => (
          <React.Fragment>
            {console.log("Ada ga ya", state.dataLogin.nik)}
            {state.auth ? (
              <aside className="left-sidebar sticky">
                <div className="scroll-sidebar">
                  <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                      <li className="nav-devider" />
                      <li>
                        <Link
                          to="/dashboard"
                          className="has-arrow"
                          aria-expanded="false"
                        >
                          <SVGdashboard />
                          <span className="hide-menu">Dashboard</span>
                        </Link>
                      </li>
                      {this.lastNumber(state.dataLogin.nik) === "9" ? (
                        <li>
                          <Link
                            to="/pendaftaran"
                            className="has-arrow"
                            aria-expanded="false"
                          >
                            <SVGpatient />
                            <span className="hide-menu">
                              Pendaftaran Pasien
                            </span>
                          </Link>
                        </li>
                      ) : this.lastNumber(state.dataLogin.nik) === "1" ? (
                        <li>
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
                              <Link to="/rekam-medis">Rekam Medis</Link>
                            </li>
                            <li>
                              <Link to="/kode-icd">Kode ICD</Link>
                            </li>
                          </ul>
                        </li>
                      ) : this.lastNumber(state.dataLogin.nik) === "2" ? (
                        <li>
                          <Link
                            to="/apotek"
                            className="has-arrow"
                            aria-expanded="false"
                          >
                            <SVGApotek size="20pt" />
                            <span className="hide-menu">Apotek</span>
                          </Link>
                          <ul aria-expanded="false" className="collapse">
                            <li>
                              <Link to="/apotek">Daftar Antrian</Link>
                            </li>
                            <li>
                              <Link to="/kelola-obat">Kelola Obat</Link>
                            </li>

                            <li>
                              <Link to="/transaksi-obat">Transaksi Obat</Link>
                            </li>
                          </ul>
                        </li>
                      ) : this.lastNumber(state.dataLogin.nik) === "3" ? (
                        <li>
                          <Link
                            to="/kasir"
                            className="has-arrow"
                            aria-expanded="false"
                          >
                            <SVGKasir size="20pt" />
                            <span className="hide-menu">Kasir</span>
                          </Link>
                          <ul aria-expanded="false" className="collapse">
                            <li>
                              <Link to="/kasir">Daftar Antrian</Link>
                            </li>
                            <li>
                              <Link to="/kelola-biaya">Kelola Biaya</Link>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        this.lastNumber(
                          state.dataLogin.nik === "4" ? (
                            <li>
                              <Link
                                to="/admin"
                                className="has-arrow"
                                aria-expanded="false"
                              >
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
                                  <Link to="/poliklinik">
                                    Daftar Poliklinik
                                  </Link>
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
                          ) : (
                            <li>
                              <Link
                                to="/jurnal-umum"
                                className="has-arrow"
                                aria-expanded="false"
                              >
                                <SVGAkunting />
                                <span className="hide-menu">Jurnal Umum</span>
                              </Link>
                              <ul aria-expanded="false" className="collapse">
                                <li>
                                  <Link to="/neraca-lajur">Neraca Lajur</Link>
                                </li>
                              </ul>
                            </li>
                          )
                        )
                      )}
                    </ul>
                  </nav>
                </div>
              </aside>
            ) : null}
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default Sidebar;
