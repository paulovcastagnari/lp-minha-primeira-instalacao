import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface PopupErrorProps {
  error: string;
  active: boolean;
  closePopupHandler: (push?: string) => void;
  push?: string;
  reload?: boolean;
}

export const PopupError = (props: PopupErrorProps) => {
  const {
    error,
    active,
    closePopupHandler,
    push = null,
    reload = false,
  } = props;
  const router = useRouter();
  const [memory, setMemory] = useState<string>(error);

  useEffect(() => {
    if (!!error) {
      setMemory(
        !error?.includes("JSON") && !error?.includes("fetch")
          ? error
          : "Ocorreu um erro indeterminado."
      );
    }
  }, [error]);

  const closeHandler = () => {
    if (active) {
      closePopupHandler(push);

      if (reload) {
        router.reload();
      }
    }
  };

  return (
    <div className={`popup popup--important ${active ? "popup--active" : ""}`}>
      <ClickAwayListener mouseEvent="onMouseDown" onClickAway={closeHandler}>
        <div className="popup__content">
          <span className="popup__close" onClick={closeHandler}>
            &times;
          </span>
          <h3 className="heading-tertiary u-margin-bottom-sm popup__invalid-title">
            ERRO
          </h3>
          <p className="popup__error-text">
            {!error?.includes("JSON") && !error?.includes("fetch")
              ? error || memory
              : "Ocorreu um erro indeterminado. Tente Novamente."}
          </p>
          <div className="popup__actions-container">
            <button
              className="btn btn--yellow btn--small popup__action"
              onClick={closeHandler}
            >
              Fechar
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
