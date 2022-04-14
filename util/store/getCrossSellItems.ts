import { ProductData, AccessStatusData } from "../../data/types";

export const getCrossSellItems = (
  productsInCart: ProductData[] = [],
  bonusInCart: ProductData[] = [],
  productsData: ProductData[] = [],
  userOwnedProducts: {
    status: AccessStatusData;
    productId: string;
    validity: string;
  }[] = []
) => {
  if (productsData && productsInCart && bonusInCart && userOwnedProducts) {
    let allCrossSellIds: string[] = [];
    const allProductsIdsInCart: string[] = [];
    const allBonusIdsInCart: string[] = [];

    productsInCart.forEach((productInCart) => {
      const csiIds = productInCart.crossSellItems.map((csi) => {
        return csi.frontId;
      });
      allCrossSellIds = [...allCrossSellIds, ...csiIds];
      allProductsIdsInCart.push(productInCart.frontId);
    });

    bonusInCart.forEach((bonusInCart) => {
      allBonusIdsInCart.push(bonusInCart.frontId);
    });

    const uniqueCrossSellIds = allCrossSellIds
      .sort()
      .filter((csid, pos, arr) => {
        return !pos || csid !== arr[pos - 1];
      });

    const ownedProductsIds = userOwnedProducts
      .filter((op) => {
        return op.status === "ACTIVE";
      })
      .map((op) => {
        return op.productId;
      });

    let filteredCrossSellIds = uniqueCrossSellIds.filter((crossSellId) => {
      return (
        !allProductsIdsInCart.includes(crossSellId) &&
        !allBonusIdsInCart.includes(crossSellId) &&
        !ownedProductsIds.includes(crossSellId)
      );
    });

    const crossSellItemsToShow = productsData.filter((product) => {
      return (
        filteredCrossSellIds.includes(product.frontId) && product.inAppPurchase
      );
    });

    return crossSellItemsToShow;
  } else {
    return [];
  }
};
