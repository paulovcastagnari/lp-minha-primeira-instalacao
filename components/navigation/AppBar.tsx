import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import ForwardRoundedIcon from "@material-ui/icons/ForwardRounded";

import { useHttpClient } from "../../hooks/httpHook";
import { useStoreContext } from "../../components/providers/StoreContextProvider";
import { PopupError } from "../../components/ui/PopupError";
import { Dropdown } from "../ui/Dropdown";
import { NotificationItem } from "../ui/NotificationItem";
import { useUserContext } from "../providers/UserContextProvider";
import { getPaginatedNotifications } from "../../pages/api/notificationsAPI";
import { NotificationData } from "../../data/types";

interface AppBarProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  noSidebar?: boolean;
}

export const AppBar = (props: AppBarProps): JSX.Element => {
  const { setShowMenu, showMenu, noSidebar = false } = props;
  const { sendRequest, error, clearError, isLoading } = useHttpClient();
  const userCtx = useUserContext();
  const storeCtx = useStoreContext();
  const [multiplier, setMultiplier] = useState<number>(0);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [loadedNotifications, setLoadedNotifications] =
    useState<NotificationData[]>(null);
  const [totalNotifications, setTotalNotifications] = useState<number>(0);
  const [showDropdown1, setShowDropdown1] = useState<boolean>(false);
  const [showDropdown2, setShowDropdown2] = useState<boolean>(false);
  const [pathName, setPathName] = useState<string>("/portal");

  useEffect(() => {
    if (userCtx.isLoggedIn) {
      getPaginatedNotifications({
        sendRequest,
        setLoadedNotifications,
        setTotalNotifications,
        multiplier,
        setShowLoadMore,
        userCtx,
      });
    }
  }, [setLoadedNotifications, sendRequest, multiplier, userCtx.isLoggedIn]);

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <Fragment>
      <PopupError
        error={error}
        active={!!error}
        closePopupHandler={clearError}
      />
      <div className="app-bar">
        {!noSidebar && (
          <button
            className={`sandwich u-margin-left-md-res ${
              showMenu ? "sandwich--active" : ""
            }`}
            onClick={() => {
              setShowMenu((prevValue) => {
                return !prevValue;
              });
            }}
          >
            <span className="sandwich__icon">&nbsp;</span>
          </button>
        )}
        <div
          className={`app-bar__logo-container ${
            noSidebar ? "app-bar__logo-container--no-sidebar" : ""
          }`}
        >
          <Link href="/portal" passHref>
            <img
              src="/logo-energia-lucrativa-600x200.png"
              alt="Logomarca Energia Lucrativa"
              className="app-bar__logo"
            />
          </Link>
        </div>
        <nav className="app-bar__nav">
          {userCtx.isLoggedIn && (
            <Dropdown
              type="std"
              active={showDropdown1}
              setActive={setShowDropdown1}
              button={
                <button
                  disabled={showMenu}
                  className="btn-icon"
                  onClick={() => {
                    setShowDropdown1(!showDropdown1);
                  }}
                >
                  <AccountCircleRoundedIcon />
                </button>
              }
            >
              {!pathName.includes("portal") && (
                <span className="dropdown__item dropdown__item-std">
                  <Link href="/portal" passHref>
                    Voltar ao portal
                  </Link>
                </span>
              )}
              {!pathName.includes("conta") && (
                <Link href="/conta" passHref>
                  <span className="dropdown__item dropdown__item-std">
                    Editar minha conta
                  </span>
                </Link>
              )}
              {!pathName.includes("atualizar-senha") && (
                <Link href="/atualizar-senha" passHref>
                  <span className="dropdown__item dropdown__item-std">
                    Atualizar senha
                  </span>
                </Link>
              )}
              <span
                className="dropdown__item dropdown__item-std"
                onClick={userCtx.logout}
              >
                Sair
              </span>
            </Dropdown>
          )}
          {userCtx.isLoggedIn && (
            <Dropdown
              type="not"
              active={showDropdown2}
              setActive={setShowDropdown2}
              showLoadMore={showLoadMore}
              setMultiplier={setMultiplier}
              isLoading={isLoading}
              button={
                <button
                  disabled={showMenu}
                  className="btn-icon"
                  onClick={() => {
                    setShowDropdown2(!showDropdown2);
                  }}
                >
                  {!isLoading ? (
                    <NotificationsActiveRoundedIcon />
                  ) : (
                    <CachedRoundedIcon />
                  )}
                  {!isLoading &&
                    totalNotifications > 0 &&
                    totalNotifications < 99 && (
                      <span className="btn-icon__notification">
                        {totalNotifications}
                      </span>
                    )}
                  {!isLoading && totalNotifications >= 99 && (
                    <span className="btn-icon__notification">99</span>
                  )}
                </button>
              }
            >
              <Fragment>
                {loadedNotifications?.length > 0 &&
                  loadedNotifications.map((not, i) => {
                    return (
                      <NotificationItem
                        title={not.title}
                        content={not.content}
                        date={not.registryDate}
                        key={`${not.title}-${i}`}
                      />
                    );
                  })}
                {loadedNotifications?.length === 0 && (
                  <NotificationItem
                    title={"Nenhuma notificação"}
                    content="Você não possui nenhuma notificação neste momento"
                    date=""
                  />
                )}
              </Fragment>
            </Dropdown>
          )}
          {userCtx.isLoggedIn && (
            <Link href="/carrinho" passHref>
              <button disabled={showMenu} className="btn-icon">
                <ShoppingCartRoundedIcon />
                {storeCtx.productsQtd > 0 && (
                  <span className="btn-icon__notification btn-icon__notification--cart">
                    {storeCtx.productsQtd}
                  </span>
                )}
              </button>
            </Link>
          )}
          {!userCtx.isLoggedIn && (
            <Link href="/" passHref>
              <button
                title="Voltar"
                disabled={showMenu}
                className="btn-icon btn-icon--180-rot"
              >
                <ForwardRoundedIcon />
              </button>
            </Link>
          )}
        </nav>
      </div>
    </Fragment>
  );
};
