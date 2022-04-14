export const getShouldScrollButtonAppear = (
  widtn: number,
  numberOfItems: number
): boolean => {
  if (widtn > 1500 && numberOfItems > 5) {
    return true;
  } else if (widtn <= 1500 && widtn > 1200 && numberOfItems > 4) {
    return true;
  } else if (widtn <= 1200 && widtn > 700 && numberOfItems > 3) {
    return true;
  } else if (widtn <= 700 && widtn > 500 && numberOfItems > 2) {
    return true;
  } else if (widtn <= 500 && numberOfItems > 1) {
    return true;
  } else {
    return false;
  }
};

export const getScrollMultiplier = (widtn: number): number => {
  if (widtn > 1500) {
    return 5;
  } else if (widtn <= 1500 && widtn > 1200) {
    return 4;
  } else if (widtn <= 1200 && widtn > 700) {
    return 3;
  } else if (widtn <= 700 && widtn > 500) {
    return 2;
  } else if (widtn <= 500) {
    return 1;
  } else {
    return 1;
  }
};
