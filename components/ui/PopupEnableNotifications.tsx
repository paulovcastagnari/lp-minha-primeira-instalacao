import { useState, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { useUserContext } from "../providers/UserContextProvider";
import { useHttpClient } from "../../hooks/httpHook";
import { LoadingSpinner } from "./LoadingSpinner";
import { createSubscription } from "../../pages/api/subscriptionsAPI";

interface PopupEnableNotificationsProps {
  installPromptActive: boolean;
}

export const PopupEnableNotifications = (
  props: PopupEnableNotificationsProps
) => {
  const { installPromptActive } = props;
  const userCtx = useUserContext();
  const { isLoading, sendRequest } = useHttpClient();
  const [active, setActive] = useState<boolean>(false);
  const [isSupported, setIsSupported] = useState<boolean>(false);

  useEffect(() => {
    if (userCtx.isLoggedIn) {
      const lastPromptTimestamp:
        | { timestamp: number; shouldAsk: boolean }
        | undefined = JSON.parse(
        localStorage.getItem("lastNotificationPrompt")
      );
      const todayTimestamp = new Date().getTime();

      var timeout = setTimeout(() => {
        setActive(
          !!lastPromptTimestamp
            ? lastPromptTimestamp.shouldAsk &&
                lastPromptTimestamp.timestamp < todayTimestamp
            : true
        );
      }, 5000);

      setIsSupported("Notification" in window && "serviceWorker" in navigator);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [userCtx.isLoggedIn]);

  const createSubscriptionHandler = async () => {
    await createSubscription({ sendRequest, userCtx });
  };

  const confirmHandler = async () => {
    const result = await Notification.requestPermission();

    if (result === "granted") {
      await createSubscriptionHandler();
      localStorage.setItem(
        "lastNotificationPrompt",
        JSON.stringify({
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000,
          shouldAsk: false,
        })
      );
    }

    if (result === "denied") {
      localStorage.setItem(
        "lastNotificationPrompt",
        JSON.stringify({
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000,
          shouldAsk: false,
        })
      );
    }

    setActive(false);
  };

  const closeHandler = () => {
    localStorage.setItem(
      "lastNotificationPrompt",
      JSON.stringify({
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000,
        shouldAsk: true,
      })
    );

    setActive(false);
  };

  const delayHandler = () => {
    localStorage.setItem(
      "lastNotificationPrompt",
      JSON.stringify({
        timestamp: new Date().getTime() + 60 * 1000,
        shouldAsk: true,
      })
    );

    setActive(false);
  };

  return (
    <div
      className={`popup popup--important ${
        userCtx.isLoggedIn && active && !installPromptActive && isSupported
          ? "popup--active"
          : ""
      }`}
    >
      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={() => {
          if (active && isSupported) {
            if (!installPromptActive) {
              closeHandler();
            } else {
              delayHandler();
            }
          }
        }}
      >
        <div className="popup__content">
          {isLoading && <LoadingSpinner overlay spinner="GRID_SCALE" />}
          <span className="popup__close" onClick={closeHandler}>
            &times;
          </span>
          <h3 className="heading-tertiary u-margin-bottom-sm popup__invalid-title">
            Habilite as Notificações
          </h3>
          <div className="popup__prompt-img-container">
            <img
              src="/notification-energia-lucrativa.png"
              alt="Notificações Energia Lucrativa"
              className="popup__prompt-img"
            />
          </div>
          <p className="popup__prompt-text u-margin-top-sm">
            Receba novidades de conteúdos exclusivos, atualizações de produtos,
            novos vídeos, lives e muito mais. É só{" "}
            <span className="popup__prompt-text--bold">
              Habilitar as notificações!
            </span>
          </p>
          <div className="popup__actions-container">
            <button
              className={`btn btn--small btn--yellow popup__action`}
              onClick={confirmHandler}
            >
              Habilitar
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
