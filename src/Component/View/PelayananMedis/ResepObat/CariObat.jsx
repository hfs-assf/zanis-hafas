import React from "react";

const CariObatform = props => (
  <div className="row maxrow" style={{ margin: "0px" }}>
    <div className="col-md-10">
      <input
        type="text"
        refs="cariobat"
        placeholder="Cari Nama Obat"
        className="form-control"
      />
    </div>
    <div className="col-md-2">
      <button className="btn btn-cyan btn-sm mt-0 mb-0">Tambah</button>
    </div>
  </div>
);

export default CariObatform;
