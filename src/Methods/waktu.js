export const timeFormat = parameter => {
  var date = new Date(parameter);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return strTime;
};

export const dateFormat = value => {
  let tanggal = new Date();
  let date = tanggal.getDate();
  let month = tanggal.getMonth();
  let year = tanggal.getFullYear();
  let tanggalSekarang = year + "-" + (month + 1) + "-" + date;
  return tanggalSekarang;
};
