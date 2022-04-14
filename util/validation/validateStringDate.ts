export const validateStringDate = (date: string) => {
  if (!!date && date.length === 8) {
    const thisYear = new Date().getFullYear();
    const dd = parseInt(date.substr(0, 2));
    const mm = parseInt(date.substr(2, 2));
    const yy = parseInt(date.substr(4, 4));

    const ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (yy > thisYear || yy < 1920) {
      return false;
    }

    if (mm > 12 || mm < 1) {
      return false;
    }

    if (mm === 1 || mm > 2) {
      if (dd > ListofDays[mm - 1]) {
        return false;
      }
    }

    if (mm === 2) {
      let lyear = false;
      if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
        lyear = true;
      }
      if (lyear === false && dd >= 29) {
        return false;
      }
      if (lyear === true && dd > 29) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
