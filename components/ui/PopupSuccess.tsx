import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface PopupSuccessProps {
  message: string;
  active: boolean;
  closePopupHandler: (push?: string) => void;
  push?: string;
  changeViewHandler?: () => void;
}

export const PopupSuccess = (props: PopupSuccessProps) => {
  const {
    message,
    active,
    closePopupHandler,
    push = null,
    changeViewHandler,
  } = props;

  return (
    <div className={`popup popup--important ${active ? "popup--active" : ""}`}>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={() => {
          if (active) {
            closePopupHandler(push);
            if (changeViewHandler) {
              changeViewHandler();
            }
          }
        }}
      >
        <div className="popup__content">
          <span
            className="popup__close"
            onClick={() => {
              closePopupHandler(push);
              if (changeViewHandler) {
                changeViewHandler();
              }
            }}
          >
            &times;
          </span>
          <h3 className="heading-tertiary u-margin-bottom-sm popup__invalid-title">
            SUCESSO
          </h3>
          <p className="popup__success-text">{message}</p>
          <div className="popup__actions-container">
            <button
              className="btn btn--yellow btn--small popup__action"
              onClick={() => {
                closePopupHandler(push);
                if (changeViewHandler) {
                  changeViewHandler();
                }
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
