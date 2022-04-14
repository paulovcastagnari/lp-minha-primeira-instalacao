export const getDaysFromDate = (stringDate: string) => {
  if (
    !!stringDate &&
    /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/.test(stringDate.substring(0, 10))
  ) {
    const oneDayMilisecs = 24 * 60 * 60 * 1000;
    const dateArray = stringDate.substring(0, 10).split("/");
    const dateTime = new Date(
      +dateArray[2],
      +dateArray[1] - 1,
      +dateArray[0]
    ).getTime();
    const todayDateTime = new Date().getTime();
    const diffDays = Math.ceil((dateTime - todayDateTime) / oneDayMilisecs);

    if (diffDays > 0) {
      return diffDays;
    } else {
      return 0;
    }
  }
};
