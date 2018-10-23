import React, { Component } from "react";
import SOAP from "./Soap/soap";
import ResepObatTabulasi from "./ResepObat/ResepObatTabulasi";
import TindakanSoap from "./Tindakan/Tindakan";

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
          <ResepObatTabulasi />
        </section>

        <section id="content3">
          <TindakanSoap />
        </section>

        <section id="content4">
          <p>Ini Labora</p>
          <p>Ini Labora</p>
        </section>
      </div>
    );
  }
}

export default TabulasiPelayananMedis;
