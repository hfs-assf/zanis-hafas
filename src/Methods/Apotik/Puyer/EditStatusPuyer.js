import axios from "axios";
import { api } from "../../api";

let EditStatusPuyer = (id, status) => {
  return axios.put(`${api.apotik}/status-racik/${id}`, {
    status
  });
};

export default EditStatusPuyer;
