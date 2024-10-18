export function dateFormatter(date) {
  const temp = new Date(date);
  const formatDate = "";
  const hour = temp.getHours() % 12;
  const minutes = temp.getMinutes();
  const meridian = temp.getHours() > 12 ? "pm" : "am";
  const time = `${hour}:${minutes}${meridian}`;

  const dt =
    temp.getDate() + "/" + (temp.getMonth() + 1) + "/" + temp.getFullYear();

  return { time: time, dt: dt };
}
