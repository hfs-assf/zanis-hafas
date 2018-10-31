import React, { Component } from "react";
import SOAP from "./Soap/SoapPasien";
import ResepObat from "./ResepObat/ResepObatPasien";
import Tindakan from "./Tindakan/TindakanPasien";
import Laboratorium from "./Laboratorium/LaboratoriumPasien";

class TabulasiPelayananMedis extends Component {
  render() {
    return (
      <div className="main">
        <input id="tab1" type="radio" name="tabs" />
        <label htmlFor="tab1">SOAP</label>
        <input id="tab2" type="radio" name="tabs" />
        <label htmlFor="tab2">Resep Obat</label>
        <input id="tab3" type="radio" name="tabs" />
        <label htmlFor="tab3">Tindakan</label>
        <input id="tab4" type="radio" name="tabs" />
        <label htmlFor="tab4">Laboratorium</label>
        <section id="content1">
          <SOAP />
        </section>

        <section id="content2">
          <ResepObat />
        </section>

        <section id="content3">
          <Tindakan />
        </section>

        <section id="content4">
          <Laboratorium />
        </section>
      </div>
    );
  }
}

export default TabulasiPelayananMedis;
