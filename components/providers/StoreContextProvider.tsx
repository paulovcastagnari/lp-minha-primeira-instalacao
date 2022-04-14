import { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";
import { useStore } from "../../hooks/storeContextHook";

interface StoreContextProviderProps {
  children: JSX.Element;
}

export const StoreContextProvider = (props: StoreContextProviderProps) => {
  const { children } = props;

  const {
    productsQtd,
    amountInCart,
    productsInCart,
    upSellInCart,
    addProductHandler,
    removeProductHandler,
    addUpSellHandler,
    removeUpSellHandler,
    setTotalAmountHandler,
    setStoreDataHandler,
    setDiscountHandler,
    clearCartHandler,
  } = useStore();

  return (
    <StoreContext.Provider
      value={{
        productsQtd,
        amountInCart,
        productsInCart,
        upSellInCart,
        addProductHandler,
        removeProductHandler,
        addUpSellHandler,
        removeUpSellHandler,
        setTotalAmountHandler,
        setStoreDataHandler,
        setDiscountHandler,
        clearCartHandler,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
