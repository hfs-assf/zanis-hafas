import React, { Component } from "react";
import listCOA from "../../../JSON/ListCOA.json";

class ListCOA extends Component {
  renderListCOA() {
    return listCOA.map((item, index) => (
      <div className="row1" key={index}>
        <div className="cell">{item.saldo_normal}</div>
        <div className="cell text-center">{item.identasi}</div>
        <div className="cell text-center">{item.saldo_normal1}</div>
      </div>
    ));
  }
  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "-20px" }}>
        <button
          type="button"
          class="btn btn-warning"
          data-toggle="modal"
          data-target="#basicExampleModal"
        >
          List COA
        </button>

        <div
          class="modal fade"
          id="basicExampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  LIST Chart Of Account (COA)
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12 rowsoap">
                    <div className="table">
                      <div className="row1 header">
                        <div className="cell">Saldo Normal</div>
                        <div className="cell">Identasi</div>
                        <div className="cell">Saldo Normal</div>
                      </div>
                      {this.renderListCOA()}
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCOA;
