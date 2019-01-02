import React, { Component } from "react";
import listLabora from "../../../Methods/Admin/getDataLabor";
import TambahDaftarUjiLabroratorium from "../../../Components/JSX/Admin/TambahItemLaboratorium";
import HapusItem from "../../../Methods/Admin/HapusItemLabor";
import Preloader from "../Preloader/Preloader";
class KelolaItemLaboratorium extends Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
    this.editModal = this.editModal.bind(this);
    this.state = {
      filter: "",
      itemLabor: [],
      action: "",
      selected: {},
      loading: <Preloader />
    };
  }

  componentDidMount() {
    listLabora().then(({ data }) => {
      this.setState({
        loading: "",
        itemLabor: this.state.itemLabor.concat(data)
      });
      console.table(this.state.itemLabor);
    });
  }

  addModal() {
    this.setState({ selected: {}, action: "add" });
  }

  editModal({ id, title, body }) {
    this.setState({
      selected: {
        id,
        title,
        body
      },
      action: "edit"
    });
  }

  deleteItemLabor = id => {
    HapusItem(id);
  };

  renderDafterItem = ({ id, title, body }) => {
    if (this.state.filter !== "") {
      return (
        <div className="row1" key={id}>
          <div className="cell">{title}</div>
          <div className="cell">{body}</div>
          <div className="cell text-center">
            <button
              className="btn btn-success btn-sm"
              onClick={() => this.editModal({ id, title, body })}
              data-toggle="modal"
              data-target="#tambahItem"
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
    const { filter, itemLabor } = this.state;
    const filterLabor = itemLabor.filter(e => {
      return e.title.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1;
    });
    console.table("Item yang terpilih = ", filterLabor);

    if (filterLabor.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Title</div>
            <div className="cell">body</div>
            <div className="cell">Aksi</div>
          </div>
          {filterLabor.map(e => {
            return this.renderDafterItem(e);
          })}
        </div>
      );
    } else {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Tidak ada data</div>
          </div>
        </div>
      );
    }

    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Daftar Peralatan Laboratorium{" "}
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahItem"
                  onClick={() => this.addModal()}
                >
                  Tambah Peralatan{" "}
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
                    placeholder="Cari Peralatan Laboratorium"
                    onChange={e => this.setState({ filter: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          {this.state.loading}
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
          <TambahDaftarUjiLabroratorium
            selected={this.state.selected}
            action={this.state.action}
          />
        </div>
      </div>
    );
  }
}

export default KelolaItemLaboratorium;
