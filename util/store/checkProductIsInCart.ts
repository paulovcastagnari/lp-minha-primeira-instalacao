export const checkProductIsInCart = (
  productId: string,
  productsInCart: string[]
) => {
  if (productsInCart && productsInCart.length > 0 && !!productId) {
    const isInCart = !!productsInCart.find((pid) => {
      return pid === productId;
    });

    return isInCart;
  } else {
    return false;
  }
};
