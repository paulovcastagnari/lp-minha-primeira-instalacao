import { ProductData } from "../../data/types";

export const getProductFromId = (
  id: string,
  productsData: ProductData[] = []
) => {
  const product = productsData?.find((p) => {
    return id === p.frontId;
  });

  return product;
};
