export const timeFormat = parameter => {
  var date = new Date(parameter);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return strTime;
};

export const dateFormat = () => {
  let tanggal = new Date();
  let date = tanggal.getDate();
  let month = tanggal.getMonth();
  let year = tanggal.getFullYear();
  let tanggalSekarang = year + "-" + (month + 1) + "-" + date;
  return tanggalSekarang;
};

export const date_format = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let dateStr = date + "-" + (month + 1) + "-" + year;
  return dateStr;
};
