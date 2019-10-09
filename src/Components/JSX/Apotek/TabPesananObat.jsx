import React, { Component } from "react";
import PesananObat from "./PesananObat";
import PesananPuyer from "./PesananPuyer";

export class TabPesananObat extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="flexpelayanan">
          <div className="boxpelayanan-medis">
            <div className="main">
              <input id="tab1" type="radio" name="tabs" />
              <label htmlFor="tab1" className="dua">
                Obat
              </label>
              <input id="tab2" type="radio" name="tabs" />
              <label htmlFor="tab2" className="dua">
                Obat Puyer
              </label>
              <section id="content1" className="dua">
                <PesananObat uid={this.props.uid} no_rm={this.props.no_rm} />
              </section>

              <section id="content2" className="dua">
                <PesananPuyer uid={this.props.uid} no_rm={this.props.no_rm} />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabPesananObat;
