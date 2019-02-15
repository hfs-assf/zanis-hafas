import React, { Component } from "react";
import SOAP from "./Soap/SoapPasien";
import ResepObat from "./ResepObat/ResepObat";
import Tindakan from "./Tindakan/TindakanPasien";
import Laboratorium from "./Laboratorium/LaboratoriumPasien";
class TabulasiPelayananMedis extends Component {
  render() {
    return (
      <div>
        <div className="flexpelayanan">
          <div className="boxpelayanan">
            <div className="main">
              <input id="tab1" type="radio" name="tabs" />
              <label htmlFor="tab1" className="empat">
                SOAP
              </label>
              <input id="tab2" type="radio" name="tabs" />
              <label htmlFor="tab2" className="empat">
                Resep Obat
              </label>
              <input id="tab3" type="radio" name="tabs" />
              <label htmlFor="tab3" className="empat">
                Tindakan
              </label>
              <input id="tab4" type="radio" name="tabs" />
              <label htmlFor="tab4" className="empat">
                Laboratorium
              </label>
              <section id="content1" className="empat">
                <SOAP
                  no_rm={this.props.no_rm}
                  antrian_pasien={this.props.antrian_pasien}
                />
              </section>

              <section id="content2" className="empat">
                <ResepObat
                  no_rm={this.props.no_rm}
                  antrian_pasien={this.props.antrian_pasien}
                />
              </section>

              <section id="content3" className="empat">
                <Tindakan
                  no_rm={this.props.no_rm}
                  antrian_pasien={this.props.antrian_pasien}
                />
              </section>

              <section id="content4" className="empat">
                <Laboratorium
                  no_rm={this.props.no_rm}
                  antrian_pasien={this.props.antrian_pasien}
                />
              </section>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-center">
          <button className="btn btn-primary">Selesai</button>
        </div>
      </div>
    );
  }
}

export default TabulasiPelayananMedis;
