import React, { Component } from "react";
import "../../CSS/Pendaftaran.css";
import ViewPendaftaran from "../../View/Pendaftaran/Pendaftaran";

class Pendaftaran extends Component {
  render() {
    return (
      <div
        class="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div class="card-body">
          <h2 class="card-title text-right">Pendaftaran Pasien</h2>
          <hr className="hr2" />
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Untuk melihat data pasien</strong> atau{" "}
            <strong>menambahkan pasien kedalam antrian</strong>, Klik nama
            pasien pada tabel.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ViewPendaftaran />
          <button class="tombol btn-medium info">Tambah Pasien Baru</button>
        </div>
      </div>
    );
  }
}

export default Pendaftaran;
