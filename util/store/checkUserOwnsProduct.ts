import { UserProductsData } from "../../data/types";

export const checkUserOwnsProduct = (
  userProducts: UserProductsData,
  productId: string
) => {
  if (userProducts && userProducts.length > 0 && !!productId) {
    const hasProduct = !!userProducts.find((p) => {
      return (
        p.productId === productId &&
        (p.status === "ACTIVE" || p.status === "FREE")
      );
    });

    return hasProduct;
  } else {
    return false;
  }
};
