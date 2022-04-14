import { useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { useUserContext } from "../providers/UserContextProvider";
import { BeforeInstallPrompt } from "../../pages/_app";

interface PopupInstallPromptProps {
  install: BeforeInstallPrompt;
  shouldPrompt: boolean;
  setShouldPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupInstallPrompt = (props: PopupInstallPromptProps) => {
  const { install, shouldPrompt, setShouldPrompt } = props;
  const userCtx = useUserContext();
  const active = !!install;

  useEffect(() => {
    if (userCtx.isLoggedIn) {
      const lastPromptTimestamp: { timestamp: number } | undefined = JSON.parse(
        localStorage.getItem("lastInstallPrompt")
      );
      const todayTimestamp = new Date().getTime();

      var timeout = setTimeout(() => {
        setShouldPrompt(
          !!lastPromptTimestamp
            ? lastPromptTimestamp.timestamp < todayTimestamp
            : true
        );
      }, 5000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [userCtx.isLoggedIn]);

  const confirmHandler = () => {
    install.prompt();
    localStorage.setItem(
      "lastInstallPrompt",
      JSON.stringify({
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000,
      })
    );
    setShouldPrompt(false);
  };

  const closeHandler = () => {
    localStorage.setItem(
      "lastInstallPrompt",
      JSON.stringify({
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000,
      })
    );
    setShouldPrompt(false);
  };

  return (
    <div
      className={`popup popup--important ${
        userCtx.isLoggedIn && active && shouldPrompt ? "popup--active" : ""
      }`}
    >
      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={() => {
          if (active && shouldPrompt) {
            closeHandler();
          }
        }}
      >
        <div className="popup__content">
          <span className="popup__close" onClick={closeHandler}>
            &times;
          </span>
          <h3 className="heading-tertiary u-margin-bottom-sm popup__invalid-title">
            Instale Nosso App
          </h3>
          <div className="popup__prompt-img-container">
            <img
              src="/app-energia-lucrativa.png"
              alt="App Energia Lucrativa"
              className="popup__prompt-img"
            />
          </div>
          <p className="popup__prompt-text u-margin-top-sm">
            Fique por dentro de todas as novidades do setor de Energia Solar
            Fotovoltaica instalando o{" "}
            <span className="popup__prompt-text--bold">
              App Energia Lucrativa
            </span>
          </p>
          <div className="popup__actions-container">
            <button
              className={`btn btn--small btn--yellow popup__action`}
              onClick={confirmHandler}
            >
              Instalar
            </button>
            <button
              className={`btn btn--grey btn--small popup__action`}
              onClick={closeHandler}
            >
              Depois
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
