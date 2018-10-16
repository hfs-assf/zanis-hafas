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
              <div className="col-md-5">
                <fieldset className="item1">
                  <legend>Data Diri</legend>
                  <label for="no_ktp">
                    <span>
                      No KTP <span className="required">*</span>
                    </span>
                    <input type="text" className="form-control" name="no_ktp" />
                  </label>

                  <label for="nama_pasien">
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
                      <label for="tempat_lahir">
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
                      <label for="tempat_lahir">
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

                  <div class="row">
                    <div class="col-sm-3">
                      {" "}
                      <label for="agama">
                        <span>Agama</span>
                        <select name="agama" className="form-control">
                          <option value="Islam">Islam</option>
                          <option value="Kristen">Kristen</option>
                          <option value="Budha">Budha</option>
                          <option value="Hindu">Hindu</option>
                        </select>
                      </label>
                    </div>
                    <div class="col-sm-4">
                      {" "}
                      <label for="jenis_kelamin">
                        <span>Jenis Kelamin</span>
                        <select name="jenis_kelamin" className="form-control">
                          <option value="P">Perempuan</option>
                          <option value="L">Laki-laki</option>
                        </select>
                      </label>
                    </div>
                    <div class="col-sm-5">
                      <label for="status">
                        <span>Status</span>
                        <select name="status" className="form-control">
                          <option value="Belum Menikah">Belum Menikah</option>
                          <option value="Sudah Menikah">Sudah Menikah</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <label for="alamat">
                    <span>
                      Alamat <span className="required">*</span>
                    </span>
                    <textarea name="alamat" className="form-control" />
                  </label>
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="kelurahan">
                        <span>Kelurahan</span>
                        <select name="kelurahan" className="form-control">
                          <option value="Tenayan Raya">Tenayan Raya</option>
                          <option value="...">...</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label for="kecamatan">
                        <span>Kecamatan</span>
                        <select name="kecamatan" className="form-control">
                          <option value="Sail">Sail</option>
                          <option value="Rumbai">Rumbai</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label for="kode_pos">
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

                  <label for="telpon">
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
              <div className="col-sm-5">
                <fieldset className="item2">
                  <legend>Pendidikan</legend>
                  <div className="row">
                    <div className="col-sm">
                      <label for="pendidikan">
                        <span>Pendidikan</span>
                        <input
                          type="text"
                          className="form-control"
                          name="pendidikan"
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label for="kantor">
                        <span>Kantor</span>
                        <input
                          type="text"
                          className="form-control"
                          name="kantor"
                        />
                      </label>
                    </div>
                  </div>

                  <label for="nama_perusahaan">
                    <span>
                      <span>Nama Perusahaan </span>
                    </span>
                    <textarea name="nama_perusahaan" className="form-control" />
                  </label>
                </fieldset>
                <br />

                <fieldset className="item3">
                  <legend>Penanggung Jawab</legend>
                  <div className="row">
                    <div className="col-sm">
                      <label for="nama_penanggungjawab">
                        <span>Nama</span>
                        <input
                          type="text"
                          className="form-control"
                          name="nama_penanggungjawab"
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label for="status_penanggungjawab">
                        <span>Status</span>
                        <input
                          type="text"
                          className="form-control"
                          name="status_penanggungjawab"
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label for="telpon_penanggungjawab">
                        <span>Telpon</span>
                        <input
                          type="number"
                          className="form-control"
                          name="telpon_penanggungjawab"
                        />
                      </label>
                    </div>
                  </div>

                  <label for="alamat_penanggungjawab">
                    <span>
                      <span>Alamat </span>
                    </span>
                    <textarea
                      name="alamat_penanggungjawab"
                      className="form-control"
                    />
                  </label>
                </fieldset>
                <button className="tombol btn-medium info mt-3">
                  Simpan Data
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewPendaftaran;
