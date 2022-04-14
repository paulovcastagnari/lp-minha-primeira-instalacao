export const convertArrayToObject = <T>(array: T[], key: string) => {
  const initialValue: {
    [key: string]: T;
  } = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};
