import React, { Component } from "react";
import SOAP from "./soap";
import { Link, Route, Switch } from "react-router-dom";

class TabulasiPelayananMedis extends Component {
  render() {
    return (
      <div className="main">
        {/* <div className="row text-center">
          <div className="sec1 col-md-3"> */}
        {/* <Link to="/formpelayananmedis/soap"> */}
        <input id="tab1" type="radio" name="tabs" />
        <label htmlFor="tab1">SOAP</label>
        {/* </Link> */}
        {/* </div> */}

        {/* <div className="sec2 col-md-3"> */}
        {/* <Link to="/formpelayananmedis/soap"> */}
        <input id="tab2" type="radio" name="tabs" />
        <label htmlFor="tab2">Resep Obat</label>
        {/* </Link> */}
        {/* </div> */}
        {/* <div className="sec3 col-md-3"> */}
        {/* <Link to="/formpelayananmedis/soap"> */}
        <input id="tab3" type="radio" name="tabs" />
        <label htmlFor="tab3">Tindakan</label>
        {/* </Link> */}
        {/* </div> */}
        {/* <div className="sec4 col-md-3"> */}
        {/* <Link to="/formpelayananmedis/soap"> */}
        <input id="tab4" type="radio" name="tabs" />
        <label htmlFor="tab4">Laboratorium</label>
        {/* </Link> */}
        {/* </div> */}
        {/* </div> */}
        {/* <Switch>
          <Route path="/formpelayananmedis/soap" component={SOAP} />
        </Switch> */}
        <section id="content1">
          <SOAP />
        </section>

        <section id="content2">Resep Obat</section>

        <section id="content3">
          <p>Ini Tindakan</p>
          <p>Ini Tindakan</p>
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
