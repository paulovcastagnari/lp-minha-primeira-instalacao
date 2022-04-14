import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { useUser } from "../../hooks/userContextHook";

interface UserContextProviderProps {
  children: JSX.Element;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const { children } = props;

  const {
    token,
    userId,
    personalData,
    accountData,
    productsData,
    login,
    logout,
    personalDataHandler,
    accountDataHandler,
    productsHandler,
  } = useUser();

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        userId,
        personalData,
        accountData,
        products: productsData,
        login,
        logout,
        personalDataHandler,
        accountDataHandler,
        productsHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
