import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Pendaftaran.css";
// import FormDetailObat from "../../../Components/JSX/Apotek/FormDetailObat";
// import TableDetailObat from "../../../Components/JSX/Apotek/TableDetailObat";
import TambahObatMasuk from "../../../Components/JSX/Apotek/FormTambahDetailObat";
import listStokObat from "../../../Methods/Apotik/StokObat/listStokObat";
import { conversi } from "../../../Methods/waktu";
import { withContext } from "../../../Methods/HOC/withContext";
import hapusStokObat from "../../../Methods/Apotik/StokObat/hapusStokObat";

class DetailObat extends Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
    this.editModal = this.editModal.bind(this);
    this.state = {
      filter: "",
      obat: [],
      selected: {},
      action: "",
      margin: 0
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    listStokObat(this.props.uid.id, this.props.getValue).then(({ data }) => {
      this.setState({
        obat: data
      });
    });
  };

  addModal() {
    this.setState({ selected: {}, action: "add" });
  }

  editModal(uid, waktu_masuk, stok, kadaluarsa, harga_modal, harga_jual) {
    console.log("ini harga jual nya", harga_jual);
    this.setState({
      selected: { uid, waktu_masuk, stok, kadaluarsa, harga_modal, harga_jual },
      action: "edit"
    });
  }

  fnRefresh = () => {
    this.getData();
  };

  hapusModal = (uid, id_lokasi) => {
    console.log("uidnya", uid);
    const arrays = this.state.obat;
    hapusStokObat(uid, id_lokasi).then(() => {
      this.setState({
        obat: arrays.filter(el => el.uid !== uid)
      });
    });
  };

  getListObat = () => {
    const { obat } = this.state;
    return obat.map(e => {
      return (
        <tr key={e.uid}>
          <td className="text-center">
            {new Date(e.waktu_masuk).toLocaleDateString("en-GB")}
          </td>
          <td className="text-center">{e.stok}</td>
          <td className="text-center">
            {new Date(e.kadaluarsa).toLocaleDateString("en-GB")}
          </td>
          <td className="text-center">Rp. {conversi(e.harga_modal)}</td>
          <td className="text-center">Rp .{conversi(e.harga_jual)}</td>
          <td className="text-center">
            <button
              className="btn btn-primary btn-sm "
              onClick={() =>
                this.editModal(
                  e.uid,
                  e.waktu_masuk,
                  e.stok,
                  e.kadaluarsa,
                  e.harga_modal,
                  e.harga_jual
                )
              }
              data-toggle="modal"
              data-target="#tambahObatMasuk"
            >
              Ubah
            </button>
            <button
              className="btn btn-red btn-sm"
              onClick={() => this.hapusModal(e.uid, this.props.getValue)}
            >
              hapus
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let header;
    const { obat } = this.state;
    const filteredObat = obat.length;

    if (filteredObat !== 0) {
      header = (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Waktu Masuk</th>
                <th className="text-center">Jumlah</th>
                <th className="text-center">Kadaluarsa</th>
                <th className="text-center">Harga Modal</th>
                <th className="text-center">Harga</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>{this.getListObat()}</tbody>
          </table>
        </div>
      );
    } else {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Obat tidak tersedia</div>
          </div>
        </div>
      );
    }
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Detail Obat</h2>
            </div>
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Untuk menyimpan data obat</strong> klik menu simpan.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div
            className="card col-md-12"
            style={{ borderTop: "2px solid #1976d2" }}
          >
            <div className="card-body">
              <div className="flex-container">
                <div className="box column1">
                  <h2 className="card-title text-left">
                    Persediaan
                    <button
                      className="btn btn-sm btn-primary"
                      data-toggle="modal"
                      data-target="#tambahObatMasuk"
                      onClick={() => this.addModal()}
                    >
                      Tambah Persediaan Obat
                    </button>
                  </h2>
                </div>
              </div>
              <hr className="hr2" />
              <div className="row">
                <div className="col-md-12 rowsoap">{header}</div>
              </div>
            </div>
          </div>
          <TambahObatMasuk
            fnRefresh={this.fnRefresh}
            uid={this.props.uid.id}
            selected={this.state.selected}
            action={this.state.action}
          />
        </div>
      </div>
    );
  }
}

export default withContext(DetailObat);
