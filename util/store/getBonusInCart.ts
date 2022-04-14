import { ProductData, UserProductsData } from "../../data/types";

export const getAllBonusDataInCart = (
  productsInCart: ProductData[] = [],
  productsData: ProductData[] = [],
  ownedProducts: UserProductsData = []
) => {
  if (productsData && productsInCart) {
    const bonusIds: string[] = [];
    let bonusData: ProductData[] = [];

    productsInCart.forEach((procutInCart) => {
      procutInCart.bonus.forEach((b) => {
        bonusIds.push(b.frontId);
      });
    });

    const filteredBonusIds = bonusIds.sort().filter((bid, pos, arr) => {
      return !pos || bid !== arr[pos - 1];
    });

    filteredBonusIds.forEach((bid) => {
      const bonus = productsData.find((product) => {
        return bid === product.frontId;
      });

      if (bonus) {
        bonusData.push(bonus);
      }
    });

    ownedProducts.forEach((ownedProduct) => {
      if (ownedProduct.status === "ACTIVE") {
        bonusData = bonusData.filter((b) => {
          return b.frontId !== ownedProduct.productId;
        });
      }
    });

    return bonusData;
  } else {
    return [];
  }
};

export const getBonusIdAndPriceDataInCart = (
  bonus: ProductData["bonus"] = [],
  productsInCart: string[] = []
) => {
  if (bonus && productsInCart) {
    const bonusInCart: ProductData["bonus"] = [];

    productsInCart.forEach((pid) => {
      const inCart = bonus.find((b) => {
        return b.frontId === pid;
      });

      if (inCart) {
        bonusInCart.push(inCart);
      }
    });

    return bonusInCart;
  } else {
    return [];
  }
};

export const getAllBonusDataFromIds = (
  bonus: ProductData["bonus"] = [],
  productsData: ProductData[] = []
) => {
  if (bonus && productsData) {
    const bonusData: ProductData[] = [];

    bonus.forEach((b) => {
      productsData.forEach((product) => {
        if (b.frontId === product.frontId) {
          bonusData.push(product);
        }
      });
    });

    return bonusData;
  } else {
    return [];
  }
};
