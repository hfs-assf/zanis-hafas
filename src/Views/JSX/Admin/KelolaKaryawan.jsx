import React, { Component } from "react";
import listUser from "../../../Methods/User/Akun/listUser";
import TambahKaryawan from "../../../Components/JSX/Admin/TambahKaryawan";

class KelolaKaryawan extends Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
    this.editModal = this.editModal.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    this.state = { filter: "", user: [], selected: {}, action: "" };
  }

  componentWillMount() {
    listUser().then(({ data }) => {
      this.setState({
        user: this.state.user.concat(data)
      });
    });
  }

  addModal() {
    this.setState({ selected: {}, action: "add" });
  }

  editModal({ uid, nik, nama, role, email, password, akses }) {
    this.setState({
      selected: {
        uid,
        nik,
        nama,
        role,
        email,
        password,
        akses
      },
      action: "edit"
    });
  }

  // deleteItem = uid => {
  //   hapusKaryawan(uid);
  // };

  rendereDaftarUser = ({ uid, nik, nama, role, email, password, akses }) => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1" key={uid}>
          {" "}
          <div className="cell text-center">{nik}</div>
          <div className="cell">{nama}</div>
          <div className="cell text-center">{role}</div>
          <div className="cell text-center">{email}</div>
          <div className="cell text-center">
            <button
              className="btn btn-success btn-sm"
              onClick={() =>
                this.editModal({ uid, nik, nama, email, password, akses })
              }
              data-toggle="modal"
              data-target="#tambahKaryawan"
            >
              Ubah
            </button>
            <button className="btn btn-warning btn-sm">Hapus</button>
          </div>
        </div>
      );
    }
  };

  render() {
    let header;
    const { filter, user } = this.state;
    const filteredUser = user.filter(user => {
      return user.nama.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });

    if (filteredUser.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">NIK</div>
            <div className="cell">Nama Karyawan</div>
            <div className="cell">Peran</div>
            <div className="cell">Email</div>
            <div className="cell">Aksi</div>
          </div>
          {filteredUser.map(user => {
            return this.rendereDaftarUser(user);
          })}
        </div>
      );
    } else if (filteredUser.length === 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Karyawan tidak ada</div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Untuk melihat data karyawan</strong> klik menu pencarian.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Daftar Karyawan{" "}
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahKaryawan"
                  onClick={() => this.addModal()}
                >
                  Tambah Karyawan
                </button>
              </h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Karyawan"
                    onChange={e => this.setState({ filter: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
          <TambahKaryawan
            selected={this.state.selected}
            action={this.state.action}
          />
        </div>
      </div>
    );
  }
}

export default KelolaKaryawan;
