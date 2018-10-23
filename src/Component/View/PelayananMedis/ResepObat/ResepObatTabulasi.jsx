import React from "react";
import CariObatform from "./CariObat";

const ResepObatTabulasi = props => (
  <div className="container-fluid">
    <div className="row soaps">
      <div className="col-md-12">
        <CariObatform />
      </div>
      <div className="col-md-12 rowsoap">
        <div className="legendtitle1">Resep Obat</div>
        <div className="table">
          <div className="row1 header">
            <div className="cell">Nama Obat</div>
            <div className="cell">Jumlah</div>
            <div className="cell">Satuan</div>
            <div className="cell">Harga</div>
            <div className="cell">Keterangan</div>
            <div className="cell">Aksi</div>
          </div>

          <div className="row1">
            <div className="cell" data-title="Nama Obat">
              Panadol
            </div>
            <div className="cell" data-title="Jumlah">
              <input type="number" refs="jumlahobat" required />
            </div>
            <div className="cell" data-title="Satuan">
              Tablet
            </div>
            <div className="cell" data-title="Harga">
              25000
            </div>
            <div className="cell" data-title="Keterangan">
              2 x sehari
            </div>
            <div className="cell" data-title="Aksi">
              <button className="btn btn-warning btn-sm">Hapus</button>
              <button className="btn btn-success btn-sm">Edit</button>
            </div>
          </div>
          <div className="row1">
            <div className="cell" data-title="Nama Obat">
              Pandaol
            </div>
            <div className="cell" data-title="JUmlah">
              <input type="number" refs="jumlahobat" required />
            </div>
            <div className="cell" data-title="Satuan">
              Pill
            </div>
            <div className="cell" data-title="Harga">
              25000
            </div>
            <div className="cell" data-title="Keterangan">
              2 x sehari sesudah makan
            </div>
            <div className="cell" data-title="Aksi">
              <button className="btn btn-warning btn-sm">Hapus</button>
              <button className="btn btn-success btn-sm">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResepObatTabulasi;
