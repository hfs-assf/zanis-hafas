import React, { Component } from "react";
import "../../../ASSETS/CSS/TambahPelayananAntrian.css";
import tambahHistoriMedis from "../../../../Methods/RekamMedis/HistorisMedis/tambahHistoriMedis";

class SoapPasien extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      showMe: false,
      nomor_rekam_medis: "",
      nik_dokter: "121212",
      jenis_perawatan: "Rawat Jalan",
      penjamin: "Umum",
      sistole: "",
      diastole: "",
      suhu: "",
      pulse: "",
      respirasi: "",
      tinggi: "",
      berat: "",
      subjektif: "",
      objektif: "",
      analisa: "",
      tindakan: "",
      diagnosa: ""
    };
  }

  handleSave() {
    tambahHistoriMedis({
      nomor_rekam_medis: this.props.id,
      nik_dokter: this.state.nik_dokter,
      subjektif: this.state.subjektif,
      objektif: this.state.objektif,
      analisa: this.state.analisa,
      diagnosa: this.state.diagnosa,
      jenis_perawatan: this.state.jenis_perawatan,
      penjamin: this.state.penjamin,
      tindakan: this.state.tindakan
    });
  }

  showHide(e) {
    var hasil = e.target.value;
    if (hasil === "false") {
      this.setState({ showMe: true });
    } else {
      this.setState({ showMe: false });
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="boxsoap">Vital Sign</div>
            <div className="isisoap">
              <table>
                <tbody>
                  <tr>
                    <td>Sistole</td>
                    <td>
                      <input
                        type="number"
                        refs="sistole"
                        onChange={event =>
                          this.setState({
                            sistole: { sistole: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Diastole</td>
                    <td>
                      <input
                        type="number"
                        refs="disatole"
                        onChange={event =>
                          this.setState({
                            diastole: { diastole: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Suhu</td>
                    <td>
                      <input
                        type="number"
                        refs="suhu"
                        onChange={event =>
                          this.setState({
                            suhu: { suhu: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Pulse</td>
                    <td>
                      <input
                        type="number"
                        refs="pulse"
                        onChange={event =>
                          this.setState({
                            pulse: { pulse: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Respirasi</td>
                    <td>
                      <input
                        type="number"
                        refs="respirasi"
                        onChange={event =>
                          this.setState({
                            respirasi: { respirasi: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tinggi</td>
                    <td>
                      <input
                        type="number"
                        refs="tinggi"
                        onChange={event =>
                          this.setState({
                            tinggi: { tinggi: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Berat</td>
                    <td>
                      <input
                        type="number"
                        refs="berat"
                        onChange={event =>
                          this.setState({
                            berat: { berat: event.target.value }
                          })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row maxrow">
              <div className="col-md-10">
                <input
                  type="text"
                  refs="pencariansoap"
                  placeholder="Cari Nama Template SOAP"
                  className="form-control"
                />
              </div>
              <div className="col-md-2" style={{ marginTop: "-5px" }}>
                <button className="btn btn-cyan mt-0 mb-0 btn-sm ">
                  Salin
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 rowsoap">
                <div className="legendtitle">Subjektif</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={event =>
                    this.setState({
                      subjektif: { subjektif: event.target.value }
                    })
                  }
                />
              </div>
              <div className="col-md-6 rowsoap">
                <div className="legendtitle">Analisa</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={event =>
                    this.setState({
                      analisa: { analisa: event.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 rowsoap">
                <div className="legendtitle">Objektif</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={event =>
                    this.setState({
                      objektif: { objektif: event.target.value }
                    })
                  }
                />
              </div>
              <div className="col-md-6 rowsoap">
                <div className="legendtitle">Tindakan</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={event =>
                    this.setState({
                      tindakan: { tindakan: event.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 rowsoap">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="color-2"
                    name="template_soap"
                    value={this.state.showMe}
                    onClick={e => this.showHide(e)}
                  />
                  <label htmlFor="color-2" className="radio-inline">
                    <span />
                  </label>
                  Simpan Template SOAP
                </div>
              </div>

              <div className="col-md-8 rowsoap">
                {this.state.showMe ? (
                  <input
                    type="text"
                    name="nama_soap"
                    className="input-template"
                    placeholder="Nama Template"
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div className="row maxrow" style={{ margin: "10px" }}>
            <div className="col-md-2">Diagnosa</div>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                onChange={event =>
                  this.setState({
                    diagnosa: { diagnosa: event.target.value }
                  })
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                data-placement="bottom"
                title="Simpan Data Soap Pasien"
                onClick={this.handleSave}
              >
                Simpan
              </button>
              <button
                className="btn btn-warning"
                data-placement="bottom"
                title="Bersihkan Data"
              >
                Bersihkan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SoapPasien;
