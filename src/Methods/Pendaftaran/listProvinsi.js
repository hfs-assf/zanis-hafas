import axios from "axios";

const apiURL = "http://dev.farizdotid.com/api/daerahindonesia/provinsi";

let listProvinsi = () => {
  return axios.get(apiURL);
};

export default listProvinsi;

// import axios from "axios";

// const apiURL = "http://dev.farizdotid.com/api/daerahindonesia/provinsi";

// let listProvinsi = () => {
//   return axios.get(apiURL);
// };

// export default listProvinsi;
