import React from "react";
import "../../CSS/TambahPelayananAntrian.css";

const TambahAntrianPelayanan = props => (
  <form>
    <div class="form-group row">
      <label for="inputjenispasien" class="col-sm-2 col-form-label">
        Jenis Pasien
      </label>
      <div class="col-sm-5 mt-2">
        <div class="custom-radios">
          <div>
            <input
              type="radio"
              id="color-1"
              name="janispasien"
              value="color-1"
            />
            <label for="color-1">
              <span />
            </label>
            Umum
          </div>

          <div className="ml-4">
            <input
              type="radio"
              id="color-2"
              name="janispasien"
              value="color-2"
            />
            <label for="color-2">
              <span />
            </label>
            Asuransi / Jaminan
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword3" class="col-sm-2 col-form-label">
        Layanan Medis
      </label>
      <div class="col-sm-10">isi disini</div>
    </div>
  </form>
);

export default TambahAntrianPelayanan;
