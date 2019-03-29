import axios from "axios";

const apiURL = "http://10.6.35.1:8003";

let editTindakan = ({ uid, nama_tindakan, biaya_tindakan, jenis }) => {
  return axios.put(apiURL + "/api/v1/tindakan/" + uid, {
    nama_tindakan,
    biaya_tindakan,
    jenis
  });
  // console.log(uid + "-" + nama_tindakan + "-" + biaya_tindakan);
};

export default editTindakan;
