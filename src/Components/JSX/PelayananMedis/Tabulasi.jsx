import React, { Component } from "react";
import SOAP from "./Soap/SoapPasien";
import ResepObat from "./ResepObat/ResepObat";
import Tindakan from "./Tindakan/TindakanPasien";
import Laboratorium from "./Laboratorium/LaboratoriumPasien";
import editStatusAntrian from "../../../Methods/Pendaftaran/Antrian/editStatusAntrian";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import FormPuyer from "./Puyer/FormPuyer";
import HistoryRM from "./HistoryRM";

class TabulasiPelayananMedis extends Component {
  constructor(props) {
    super();
    this.state = {
      notification: "0"
    };
  }

  handleStatus = () => {
    editStatusAntrian(this.props.antrian_pasien)
      .then(() => {
        this.setState(this.state);
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
  };

  render() {
    return (
      <div>
        <div className="flexpelayanan">
          <div className="boxpelayanan-medis">
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
                Riwayat RM
              </label>
              {/* <input id="tab5" type="radio" name="tabs" />
              <label htmlFor="tab5" className="empat">
                Riwayat RM
              </label> */}
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
                <HistoryRM
                  no_rm={this.props.no_rm}
                  antrian_pasien={this.props.antrian_pasien}
                />
              </section>
              <section id="content5" className="empat">
                <FormPuyer
                  no_rm={this.props.no_rm}
                  antrian_pasien={this.props.antrian_pasien}
                />
              </section>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => this.handleStatus()}
            data-toggle="modal"
            data-target="#konfirmasiTransaksi"
          >
            Selesai
          </button>
        </div>
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiTransaksi"
        />
      </div>
    );
  }
}

export default TabulasiPelayananMedis;
