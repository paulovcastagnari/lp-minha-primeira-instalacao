import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface PopupConfirmProps {
  title: string;
  content: string;
  confirmTxt: string;
  closeTxt: string;
  active: boolean;
  closePopupHandler: () => void;
  confirmHandler: () => void;
  invertButtonColors?: boolean;
  oneButton?: boolean;
}

export const PopupConfirm = (props: PopupConfirmProps) => {
  const {
    title,
    content,
    active,
    closePopupHandler,
    confirmHandler,
    confirmTxt,
    closeTxt,
    invertButtonColors,
    oneButton,
  } = props;

  return (
    <div className={`popup ${active ? "popup--active" : ""}`}>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={() => {
          if (active) {
            closePopupHandler();
          }
        }}
      >
        <div className="popup__content">
          <span className="popup__close" onClick={closePopupHandler}>
            &times;
          </span>
          <h3 className="heading-tertiary u-margin-bottom-sm popup__invalid-title">
            {title}
          </h3>
          <p className="popup__confirm-text">{content}</p>
          <div className="popup__actions-container">
            <button
              className={`btn ${
                !invertButtonColors ? "btn--yellow" : "btn--grey"
              } btn--small popup__action`}
              onClick={confirmHandler}
            >
              {confirmTxt}
            </button>
            {!oneButton && (
              <button
                className={`btn ${
                  !invertButtonColors ? "btn--grey" : "btn--yellow"
                } btn--grey btn--small popup__action`}
                onClick={closePopupHandler}
              >
                {closeTxt}
              </button>
            )}
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
