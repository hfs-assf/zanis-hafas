import React, { Component } from "react";
import SOAP from "./Soap/SoapPasien";
import ResepObat from "./ResepObat/ResepObat";
import Tindakan from "./Tindakan/TindakanPasien";
import Laboratorium from "./Laboratorium/LaboratoriumPasien";

class TabulasiPelayananMedis extends Component {
  render() {
    return (
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
          <SOAP />
        </section>

        <section id="content2" className="empat">
          <ResepObat />
        </section>

        <section id="content3" className="empat">
          <Tindakan />
        </section>

        <section id="content4" className="empat">
          <Laboratorium />
        </section>
      </div>
    );
  }
}

export default TabulasiPelayananMedis;
