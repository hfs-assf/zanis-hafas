// import React, { Component } from "react";
// import "../../../ASSETS/CSS/form.css";
// import listHistoriMedis from "../../../../Methods/RekamMedis/HistorisMedis/listHistoriMedis";

// class DetailRM extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: []
//     };
//   }

//   componentWillReceiveProps = nextProps => {
//     if (this.props.selected !== nextProps.selected)
//       console.log("nuna", nextProps.selected);
//     {
//       listHistoriMedis(nextProps.selected).then(data =>
//         console.log("historis", data)
//       );
//     }
//   };

//   listRm = () => {
//     return this.state.list(e => (
//       <tbody key={e.uid} className="bodyTable">
//         <td className="text-center">{e.subjektif}</td>
//       </tbody>
//     ));
//   };

//   render() {
//     return (
//       <div
//         className="modal fade right"
//         id="detail"
//         tabIndex="1"
//         role="dialog"
//         aria-labelledby="myModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-right" role="document">
//           <div
//             className="modal-content"
//             style={{
//               width: "500px"
//             }}
//           >
//             <div
//               className="modal-header info-color white-text text-center py-4"
//               style={{ borderBottom: "none" }}
//             ></div>
//             <div className="modal-body">
//               <div className="table1">
//                 <thead className="headTable">
//                   <tr>
//                     <th className="text-center">Subjektif</th>
//                     <th className="text-center">Objektif</th>
//                     <th className="text-center">Assesment</th>
//                     <th className="text-center">Objektif</th>
//                     <th className="text-center">Diagnosa</th>
//                     <th className="text-center">Catatan</th>
//                   </tr>
//                 </thead>
//                 {/* {this.listRm()} */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       // <div>
//       //   <div className="container-flex">
//       //     <div className="item-container">
//       //       <h3>nama</h3>
//       //       <h4>tanggal lahir</h4>
//       //       <h4>usia</h4>
//       //     </div>
//       //   </div>
//       //   <div className="boxpelayanan">
//       //     <table className="table">
//       //       <thead>
//       //         <tr>
//       //           <th>Subjektif</th>
//       //           <th>Objektif</th>
//       //           <th>Assesment</th>
//       //           <th>Objektif</th>
//       //           <th>Diagnosa</th>
//       //           <th>Catatan</th>
//       //         </tr>
//       //       </thead>
//       //       <tbody>

//       //       </tbody>
//       //     </table>
//       //   </div>
//     );
//   }
// }

// export default DetailRM;

import React, { Component } from "react";
import listPasien from "../../../../Methods/RekamMedis/Pasien/listPasien";
import { Link } from "react-router-dom";

class DetailRM extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false,
      pasien: [],
      modal: false
    };
  }

  onChange(e) {
    var filter = e.target.value;
    listPasien(filter).then(({ data }) => {
      this.setState({
        pasien: data,
        textFilter: filter
      });
    });
  }

  handleClick = nomor_rekam_medis => {
    console.log("check", nomor_rekam_medis);
    this.setState({ modal: true, selected: { nomor_rekam_medis } });
  };

  renderDaftarRM = (rm, index) => {
    const { textFilter } = this.state;
    if (textFilter !== "") {
      return (
        <div className="row1" key={index}>
          <div className="cell text-center">{rm.nomor_rekam_medis}</div>
          <div className="cell text-center">{rm.nama_pasien}</div>
          <div className="cell text-center">{rm.jenis_kelamin}</div>
          <div className="cell text-center">{rm.status}</div>
          <div className="cell text-center">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.handleClick(rm.nomor_rekam_medis)}
              data-toggle="modal"
              data-target="#detail"
              title="detailPasien"
            >
              Detail
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    console.log("apa ini props", this.props.rm);
    let header;
    const { textFilter, pasien } = this.state;

    if (pasien.length !== 0 && textFilter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Nomor Rekam Medis </div>
            <div className="cell">Nama</div>
            <div className="cell">Jenis Kelamin</div>
            <div className="cell">Status</div>
            <div className="cell">Aksi</div>
          </div>
          {pasien.map((rm, index) => {
            return this.renderDaftarRM(rm, index);
          })}
        </div>
      );
    } else if (pasien.length === 0 && textFilter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Pasien tidak ditemukan </div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Untuk <strong> melihat rekam medis pasien </strong> lakukan dengan
          nama pasien . Kemudian klik <strong>lihat detail </strong>
          pada data pasien yang diinginkan.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Rekam Medis</h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Rekam Medis"
                    value={textFilter}
                    onChange={e => this.onChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
        </div>
        <DetailRM selected={this.state.selected} />
      </div>
    );
  }
}

export default DetailRM;
