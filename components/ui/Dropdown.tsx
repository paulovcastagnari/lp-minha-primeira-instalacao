import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { LoadMoreButton } from "./LoadMoreButton";

interface DropdownProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[] | string | null;
  button: JSX.Element;
  type:
    | "std"
    | "not"
    | "sel"
    | "sel-right"
    | "pop"
    | "pop-right"
    | "date-range"
    | "date-range-two-cat"
    | "value-range";
  smaller?: boolean;
  showLoadMore?: boolean;
  setMultiplier?: React.Dispatch<React.SetStateAction<number>>;
  isLoading?: boolean;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    children,
    active,
    setActive,
    button,
    type,
    smaller,
    showLoadMore,
    setMultiplier,
    isLoading,
  } = props;

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      onClickAway={() => {
        setActive(false);
      }}
    >
      <div className="dropdown">
        {button}
        <div
          className={`dropdown__content ${
            smaller ? "dropdown__content--smaller" : ""
          } dropdown__content-${type} ${
            active
              ? `dropdown__content--active dropdown__content-${type}--active`
              : ""
          }`}
        >
          {children}
          {showLoadMore && (
            <LoadMoreButton
              setMultiplier={setMultiplier}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
};
