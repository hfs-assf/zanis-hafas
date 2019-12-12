import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Pendaftaran.css";
// import FormDetailObat from "../../../Components/JSX/Apotek/FormDetailObat";
// import TableDetailObat from "../../../Components/JSX/Apotek/TableDetailObat";
import TambahObatMasuk from "../../../Components/JSX/Apotek/FormTambahDetailObat";
import listStokObat from "../../../Methods/Apotik/StokObat/listStokObat";
import { conversi } from "../../../Methods/waktu";
import { withContext } from "../../../Methods/HOC/withContext";

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
        obat: this.state.obat.concat(data)
      });
    });
  };

  addModal() {
    this.setState({ selected: {}, action: "add" });
  }

  editModal({ uid, waktu_masuk, stok, kadaluarsa, harga_modal, harga_jual }) {
    this.setState({
      selected: { uid, waktu_masuk, stok, kadaluarsa, harga_modal, harga_jual },
      action: "edit"
    });
  }

  fnRefresh = () => {
    this.getData();
  };

  renderDaftarObat = ({
    uid,
    waktu_masuk,
    stok,
    kadaluarsa,
    harga_modal,
    harga_jual
  }) => {
    return (
      <div className="row1" key={uid}>
        <div className="cell text-center">
          {new Date(waktu_masuk).toLocaleDateString("en-GB")}
        </div>
        <div className="cell text-center">{stok}</div>
        <div className="cell text-center">
          {new Date(kadaluarsa).toLocaleDateString("en-GB")}
        </div>
        <div className="cell text-center">Rp. {conversi(harga_modal)}</div>
        <div className="cell text-center">Rp.{conversi(harga_jual)}</div>
        <div className="cell text-center">
          <button
            className="btn btn-primary btn-sm "
            onClick={() =>
              this.editModal({
                uid,
                waktu_masuk,
                stok,
                kadaluarsa,
                harga_modal
              })
            }
            data-toggle="modal"
            data-target="#tambahObatMasuk"
          >
            Ubah
          </button>
        </div>
      </div>
    );
    // }
  };

  render() {
    let header;
    const { obat } = this.state;

    const filteredObat = obat.length;

    if (filteredObat !== 0) {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Waktu Masuk</div>
            <div className="cell">Jumlah</div>
            <div className="cell">Kadaluarsa</div>
            <div className="cell">Harga Modal</div>
            <div className="cell">Harga</div>
            <div className="cell">Aksi</div>
          </div>
          {obat.map(obat => {
            return this.renderDaftarObat(obat);
          })}
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
