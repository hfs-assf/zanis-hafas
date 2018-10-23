import React, { Component } from "react";

class ViewPendaftaran extends Component {
  render() {
    return (
      <div>
        <div className="watermark">
          <img
            className="img-fluid"
            src="https://assets.about.me/background/users/r/s/i/rsia_zainab_1440732420_26.jpg"
            alt="logo zainis"
          />
        </div>
        <div className="form-style">
          <form>
            <div className="row">
              <div className="col-md-6">
                <fieldset>
                  <legend>Data Diri</legend>
                  <label>
                    <span>
                      No KTP <span className="required">*</span>
                    </span>
                    <input type="text" className="form-control" name="no_ktp" />
                  </label>

                  <label>
                    <span>
                      Nama <span className="required">*</span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="nama_pasien"
                    />
                  </label>
                  <div className="row">
                    <div className="col-sm-6">
                      {" "}
                      <label>
                        <span>
                          Tempat Lahir <span className="required">*</span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="tempat_lahir"
                        />
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label>
                        <span>
                          Tanggal Lahir <span className="required">*</span>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          name="tanggal_lahir"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      {" "}
                      <label>
                        <span>Agama</span>
                        <select name="agama" className="form-control">
                          <option value="Islam">Islam</option>
                          <option value="Kristen">Kristen</option>
                          <option value="Budha">Budha</option>
                          <option value="Hindu">Hindu</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <label>
                        <span>Jenis Kelamin</span>
                        <select name="jenis_kelamin" className="form-control">
                          <option value="P">Perempuan</option>
                          <option value="L">Laki-laki</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-5">
                      <label>
                        <span>Status</span>
                        <select name="status" className="form-control">
                          <option value="Belum Menikah">Belum Menikah</option>
                          <option value="Sudah Menikah">Sudah Menikah</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <label>
                    <span>
                      Alamat <span className="required">*</span>
                    </span>
                    <textarea name="alamat" className="form-control" />
                  </label>
                  <div className="row">
                    <div className="col-sm-4">
                      <label>
                        <span>Kelurahan</span>
                        <select name="kelurahan" className="form-control">
                          <option value="Tenayan Raya">Tenayan Raya</option>
                          <option value="...">...</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label>
                        <span>Kecamatan</span>
                        <select name="kecamatan" className="form-control">
                          <option value="Sail">Sail</option>
                          <option value="Rumbai">Rumbai</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label>
                        <span>
                          Kode Pos <span className="required">*</span>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          name="kode_pos"
                        />
                      </label>
                    </div>
                  </div>

                  <label>
                    <span>
                      Telpon <span className="required">*</span>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      name="telpon"
                    />
                  </label>
                </fieldset>
                <br />
              </div>
              <div className="col-md-6">
                <fieldset>
                  <legend>Pendidikan</legend>
                  <div className="row">
                    <div className="col-sm">
                      <label>
                        <span>Pendidikan</span>
                        <input
                          type="text"
                          className="form-control"
                          name="pendidikan"
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label>
                        <span>Kantor</span>
                        <input
                          type="text"
                          className="form-control"
                          name="kantor"
                        />
                      </label>
                    </div>
                  </div>
                  <label>
                    <span>
                      <span>Nama Perusahaan </span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="nama_perusahaan"
                    />
                  </label>
                </fieldset>
                <br />

                <fieldset>
                  <legend>Penanggung Jawab</legend>
                  <div className="row">
                    <div className="col-sm">
                      <label>
                        <span>Nama</span>
                        <input
                          type="text"
                          className="form-control"
                          name="nama_penanggungjawab"
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label>
                        <span>Status</span>
                        <input
                          type="text"
                          className="form-control"
                          name="status_penanggungjawab"
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label>
                        <span>Telpon</span>
                        <input
                          type="number"
                          className="form-control"
                          name="telpon_penanggungjawab"
                        />
                      </label>
                    </div>
                  </div>

                  <label>
                    <span>
                      <span>Alamat </span>
                    </span>
                    <textarea
                      name="alamat_penanggungjawab"
                      className="form-control"
                    />
                  </label>
                  <br />
                </fieldset>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary">Simpan</button>
              <button className="btn btn-warning">Bersihkan</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewPendaftaran;
