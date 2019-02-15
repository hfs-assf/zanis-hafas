import React, { Component } from "react";
import "../../../ASSETS/CSS/TambahPelayananAntrian.css";
import ModalKonfirmasiTindakan from "../../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";
import tambahHistoriMedis from "../../../../Methods/RekamMedis/HistorisMedis/tambahHistoriMedis";

class SoapPasien extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      notification: "0",
      showMe: false,
      nomor_rekam_medis: "",
      nik_dokter: "121212",
      jenis_perawatan: "Rawat Jalan",
      penjamin: "Umum", //belum dibuat bg er //belum dibuat bg er //belum dibuat bg er
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
      diagnosa: "",
      disabled: false
    };
  }

  handleSave() {
    var catatan = "Sistole ".concat(
      this.state.sistole,
      ", diastole ",
      this.state.diastole,
      ", suhu ",
      this.state.suhu,
      ", pulse ",
      this.state.pulse,
      ", respirasi ",
      this.state.respirasi,
      ", tinggi ",
      this.state.tinggi,
      ", berat ",
      this.state.berat
    );

    tambahHistoriMedis({
      nomor_rekam_medis: this.props.no_rm,
      nik_dokter: this.state.nik_dokter,
      subjektif: this.state.subjektif,
      objektif: this.state.objektif,
      analisa: this.state.analisa,
      diagnosa: this.state.diagnosa,
      jenis_perawatan: this.state.jenis_perawatan,
      penjamin: this.state.penjamin,
      tindakan: this.state.tindakan,
      catatan: catatan
    })
      .then(
        this.setState({
          disabled: true,
          notification: "1"
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
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
                            sistole: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                            diastole: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                            suhu: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                            pulse: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                            respirasi: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                            tinggi: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                            berat: event.target.value
                          })
                        }
                        disabled={this.state.disabled}
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
                  disabled={this.state.disabled}
                />
              </div>
              <div className="col-md-2" style={{ marginTop: "-5px" }}>
                <button
                  className="btn btn-cyan mt-0 mb-0 btn-sm "
                  disabled={this.state.disabled}
                >
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
                      subjektif: event.target.value
                    })
                  }
                  disabled={this.state.disabled}
                />
              </div>
              <div className="col-md-6 rowsoap">
                <div className="legendtitle">Analisa</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={event =>
                    this.setState({
                      analisa: event.target.value
                    })
                  }
                  disabled={this.state.disabled}
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
                      objektif: event.target.value
                    })
                  }
                  disabled={this.state.disabled}
                />
              </div>
              <div className="col-md-6 rowsoap">
                <div className="legendtitle">Tindakan</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={event =>
                    this.setState({
                      tindakan: event.target.value
                    })
                  }
                  disabled={this.state.disabled}
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
                    disabled={this.state.disabled}
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
                    disabled={this.state.disabled}
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
                    diagnosa: event.target.value
                  })
                }
                disabled={this.state.disabled}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#notification1"
                disabled={this.state.disabled}
              >
                Simpan
              </button>
              <button
                className="btn btn-warning"
                data-placement="bottom"
                disabled={this.state.disabled}
              >
                Bersihkan
              </button>
            </div>
          </div>
        </div>
        <ModalKonfirmasiTindakan
          passValue={this.handleSave}
          modal="notification1"
        />
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiSOAP"
        />
      </div>
    );
  }
}
export default SoapPasien;
