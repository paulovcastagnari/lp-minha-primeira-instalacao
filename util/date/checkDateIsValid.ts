import { generateFormattedDate } from "./generateFormattedDate";

export const checkDateIsValid = (
  datetoBeChecked: string,
  daysInPastorFuture: number = 0,
  includeLastDay: boolean = true
) => {
  if (/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/.test(datetoBeChecked)) {
    const dateArray = datetoBeChecked.split("/");
    const referenceDate = generateFormattedDate(daysInPastorFuture);
    const referenceDateArray = referenceDate.split("/");
    const dateTime = new Date(
      +dateArray[2],
      +dateArray[1] - 1,
      +dateArray[0]
    ).getTime();
    const referenceDateTime = new Date(
      +referenceDateArray[2],
      +referenceDateArray[1] - 1,
      +referenceDateArray[0]
    ).getTime();

    if (includeLastDay) {
      return referenceDateTime <= dateTime;
    } else {
      return referenceDateTime < dateTime;
    }
  } else {
    return false;
  }
};
