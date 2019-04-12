// import axios from "axios";
// const apiURL = "http://192.168.100.250:8005";

// let obatList = nama_obat => {
//   var filter = "";
//   if (nama_obat !== "") {
//     filter = "?nama_obat=" + nama_obat;
//   }
//   return axios.get(apiURL + "/api/v1/obat" + filter);
// };

// export default obatList;

import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let obatList = uid =>
  axios.get(apiURL + "/api/v1/obat?limit=7&nama_obat=" + uid);

export default obatList;
