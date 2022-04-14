export const getCardYearOptions = () => {
  let years: number[] = [];
  for (let i = 0; i < 21; i++) {
    years.push(new Date().getFullYear() + i);
  }
  const abvYears: string[] = years.map((year) => {
    return year.toString().substr(-2);
  });
  return abvYears;
};
