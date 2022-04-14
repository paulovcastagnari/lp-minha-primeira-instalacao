export const checkUnlockIsInCart = (
  unlocks: { frontId: string; type: string }[],
  productsInCart: string[]
) => {
  if (productsInCart && productsInCart.length > 0) {
    let isInCart: boolean = false;

    productsInCart.forEach((pid) => {
      const inCart = unlocks.find((u) => {
        return u.frontId === pid;
      });

      if (inCart) {
        isInCart = true;
      }
    });

    return isInCart;
  } else {
    return false;
  }
};
