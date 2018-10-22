import React, { Component } from "react";
import DataTimeline from "../../../JSON/pasien.json";

class TimelineApotek extends Component {
  arrayTimeline = DataTimeline.map(item => item.id);
  constructor() {
    super();
    this.state = {
      showMe: false,
      id: "0"
    };
  }

  filterData(id) {
    return DataTimeline.filter(el => el.id === id);
  }

  showHide(value, id) {
    this.setState({
      showMe: value,
      id: id
    });
  }
  renderTimelineApotek() {
    return DataTimeline.map((item, index) => (
      <li
        key={index}
        className="animated bounceIn"
        onClick={() => this.showHide(true, { index })}
      >
        <span />
        <div className="number"> {item.id} </div>
        <div>
          <div className="title">{item.no_rm}</div>
          <div className="tefalsext-white">{item.nama}</div>
          <div className="type">
            {item.asuransi} - {item.tujuan}
          </div>
        </div>
        <span className="number">
          <span>{item.jam_masuk}</span>
          <span />
        </span>
      </li>
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <ul>{this.renderTimelineApotek()}</ul>
          </div>
        </div>

        {this.state.showMe ? (
          <div className="col-md-8">
            {/* <ResepObat /> */}
            <div className="container animated bounceInDown">
              <fieldset>
                <div className="header-resep">
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.showHide(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  Resep Obat
                  <div className="table-responsive">
                    <table className="table table-hover dataTable resep">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nama Obat</th>
                          <th>Jumlah</th>
                          <th>Keterangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Abbocath </td>
                          <td>5 tablet</td>
                          <td>Setelah makan 3x1 hari</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Asolute </td>
                          <td>7 kapsul</td>
                          <td>Setelah makan 3x1 hari</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="modal-footer justify-content-center">
                      <button className="btn btn-primary">Selesai</button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TimelineApotek;
