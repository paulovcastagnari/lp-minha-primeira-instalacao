export const dateFormatFromISOString = (date: string) => {
  if (!!date && date.length >= 10) {
    let sdd = date.substring(8, 10);
    let smm = date.substring(5, 7);
    let syy = date.substring(0, 4);

    return `${sdd}/${smm}/${syy}`;
  }
  return "";
};
