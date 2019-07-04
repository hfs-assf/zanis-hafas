import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Pendaftaran.css";
import FormDetailObat from "../../../Components/JSX/Apotek/FormDetailObat";
// import TableDetailObat from "../../../Components/JSX/Apotek/TableDetailObat";
import TambahObatMasuk from "../../../Components/JSX/Apotek/FormTambahDetailObat";
import listStokObat from "../../../Methods/Apotik/StokObat/listStokObat";

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
    listStokObat(this.props.uid.id).then(({ data }) => {
      this.setState({
        obat: this.state.obat.concat(data)
      });
    });
  }

  // getMargin(harga_modal) {
  //   let costPrice = harga_modal;
  //   return costPrice + costPrice * this.state.margin;
  // }

  addModal() {
    this.setState({ selected: {}, action: "add" });
  }

  editModal({ uid, waktu_masuk, stok, kadaluarsa, harga_modal }) {
    this.setState({
      selected: { uid, waktu_masuk, stok, kadaluarsa, harga_modal },
      action: "edit"
    });
  }
  renderDaftarObat = ({
    uid,
    waktu_masuk,
    stok,
    kadaluarsa,
    harga_modal,
    harga
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
        <div className="cell text-left">Rp. {harga_modal}</div>
        <div className="cell text-left">{harga}</div>
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
          <div className="row">
            <FormDetailObat uid={this.props.uid.id} />
            <div
              className="card col-md-7"
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
              uid={this.props.uid.id}
              selected={this.state.selected}
              action={this.state.action}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailObat;
