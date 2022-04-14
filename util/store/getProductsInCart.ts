import { ProductData, UserProductsData } from "../../data/types";

export const getProductsInCart = (
  productsInCart: string[] = [],
  productsData: ProductData[] = [],
  ownedProducts: UserProductsData = []
) => {
  if (productsData && productsInCart) {
    let productsToShow: ProductData[] = [];

    productsInCart.forEach((pid) => {
      const inCart = productsData.find((pd) => {
        return pid === pd.frontId;
      });

      if (inCart) {
        productsToShow.push(inCart);
      }
    });

    ownedProducts.forEach((ownedProduct) => {
      if (ownedProduct.status === "ACTIVE") {
        productsToShow = productsToShow.filter((p) => {
          return p.frontId !== ownedProduct.productId;
        });
      }
    });

    return productsToShow;
  } else {
    return [];
  }
};
