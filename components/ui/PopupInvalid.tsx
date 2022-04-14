import { useState, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface PopupInvalidProps {
  active: boolean;
  closeInvalidPopupHandler: () => void;
  invalidInputs: string[];
}

export const PopupInvalid = (props: PopupInvalidProps) => {
  const { active, closeInvalidPopupHandler, invalidInputs } = props;
  const [memory, setMemory] = useState<string[]>(invalidInputs);

  useEffect(() => {
    if (invalidInputs && invalidInputs.length > 0) {
      setMemory(invalidInputs);
    }
  }, [invalidInputs]);

  return (
    <div className={`popup ${active ? "popup--active" : ""}`}>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={() => {
          if (active) {
            closeInvalidPopupHandler();
          }
        }}
      >
        <div className="popup__content">
          <span className="popup__close" onClick={closeInvalidPopupHandler}>
            &times;
          </span>
          <h3 className="heading-tertiary u-margin-bottom-sm popup__invalid-title">
            Dados Inválidos
          </h3>
          {invalidInputs && (
            <ul className="popup__invalid-list">
              {invalidInputs.map((invalidInput, i) => {
                return (
                  <li
                    key={`popup__invalid-item-${i}`}
                    className="popup__invalid-item"
                  >
                    {invalidInput}
                  </li>
                );
              })}
            </ul>
          )}
          {(!invalidInputs || invalidInputs?.length === 0) && memory && (
            <ul className="popup__invalid-list">
              {memory.map((invalidInput, i) => {
                return (
                  <li
                    key={`popup__invalid-item-${i}`}
                    className="popup__invalid-item"
                  >
                    {invalidInput}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="popup__actions-container">
            <button
              className="btn btn--yellow btn--small popup__action"
              onClick={closeInvalidPopupHandler}
            >
              Fechar
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
