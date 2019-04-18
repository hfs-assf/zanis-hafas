export const dateFormat = parameter => {
  var date = new Date(parameter);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return strTime;
};
