export const dateFormatFromIDateObj = (
  date: Date,
  daysInPastorFuture: number = 0
) => {
  if (date) {
    date.setDate(date.getDate() + daysInPastorFuture);

    const dd = date.getDate();
    let ddStr = "";
    if (dd < 10) {
      ddStr = `0${dd}`;
    } else {
      ddStr = `${dd}`;
    }

    const mm = date.getMonth();
    let mmStr = "";
    if (mm + 1 < 10) {
      mmStr = `0${mm + 1}`;
    } else {
      mmStr = `${mm + 1}`;
    }

    return `${ddStr}/${mmStr}/${date.getFullYear()}`;
  }
  return "";
};
