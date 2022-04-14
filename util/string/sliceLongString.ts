export const sliceLongString = (data: string, maxSize: number) => {
  if (data?.length > maxSize) {
    return data.substr(0, maxSize) + "...";
  } else {
    return data;
  }
};
