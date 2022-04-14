export const compareDates = (
  stringDate: string,
  comparisonDate: string,
  comparisonOp: "OLDER" | "OLDER-EQUAL" | "NEWER" | "NEWER-EQUAL"
) => {
  if (
    !!stringDate &&
    /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/.test(stringDate.substring(0, 10))
  ) {
    const dateArray = stringDate.substring(0, 10).split("/");
    const dateTime = new Date(
      +dateArray[2],
      +dateArray[1] - 1,
      +dateArray[0]
    ).getTime();
    const comparisonDateArray = comparisonDate.substring(0, 10).split("/");
    const comparisonTime = new Date(
      +comparisonDateArray[2],
      +comparisonDateArray[1] - 1,
      +comparisonDateArray[0]
    ).getTime();

    if (comparisonOp === "OLDER") {
      return dateTime < comparisonTime;
    } else if (comparisonOp === "OLDER-EQUAL") {
      return dateTime <= comparisonTime;
    } else if (comparisonOp === "NEWER") {
      return dateTime > comparisonTime;
    } else if (comparisonOp === "NEWER-EQUAL") {
      return dateTime >= comparisonTime;
    }
  } else {
    return false;
  }
};
