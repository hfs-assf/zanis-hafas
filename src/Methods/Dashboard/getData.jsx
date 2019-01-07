import axios from "axios";

const apiURL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=1sdHR1hbwOCt0EapI0f3NQk88PtuGahFSL2LUlTIhl6jcsWYpNuDJ2U2-3KoZFGgH8Bk-8efa2Gqk65wxPV99Uazj9t01YekOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuB6lHT6qnqYcmFWggwoSVQQXTsQ1HqKa1CgDXQROm1OeNR5ibYVAaRxAeOtzLmbRZcVjrce7Uveb8iU1s-L39A_vQK8SSXHAAREEMoiQ31HA2S2RLK1Djh8MGUS4MhBQRZ5dO17jneK-A4MAdorMS0Z&lib=M-tpZm-Fm1QX9Yr80nZn_p-WXe3zpGnIr";

let dataPasien = e => {
  return axios.get(apiURL);
};

export default dataPasien;
