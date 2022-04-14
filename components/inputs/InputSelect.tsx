import { useState, useEffect, useRef } from "react";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface InputSelectProps {
  id: string;
  inputHandler: (
    id: string,
    value: string,
    isValid: boolean,
    label: string
  ) => void;
  width: number;
  label: string;
  title: string;
  options: string[];
  forceError?: boolean;
  initialValue?: string;
  resetInitialValue?: boolean;
  disabled?: boolean;
  valueWhenDisabled?: string;
  setCardFocus?: React.Dispatch<
    React.SetStateAction<"number" | "name" | "expiry" | "cvc">
  >;
  listOnTop?: boolean;
}

export const InputSelect = (props: InputSelectProps) => {
  const {
    id,
    width,
    label,
    options,
    title,
    inputHandler,
    forceError,
    initialValue,
    resetInitialValue,
    disabled,
    valueWhenDisabled,
    setCardFocus,
    listOnTop,
  } = props;
  const selectedElm = useRef<HTMLDivElement>(null);
  const optionsListElm = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [wasTouched, setWasTouched] = useState<boolean>(false);
  const [value, setValue] = useState<string>(initialValue || null);
  const [index, setIndex] = useState<number>(
    initialValue ? options.indexOf(initialValue) : null
  );

  useEffect(() => {
    selectedElm.current?.style.setProperty(
      "--width",
      width === 100 ? "100%" : `${width}rem`
    );
    optionsListElm.current?.style.setProperty(
      "--width",
      width === 100 ? "100%" : `${width}rem`
    );
  }, [id, width]);

  useEffect(() => {
    inputHandler(id, value, !!value, label);
    setIndex(options.indexOf(value));
  }, [id, value, label, inputHandler]);

  useEffect(() => {
    if (initialValue) {
      setValue(options[index]);
    }
  }, [options[0]]);

  useEffect(() => {
    if (initialValue && resetInitialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    if (disabled && valueWhenDisabled) {
      setValue(valueWhenDisabled);
    }
  }, [valueWhenDisabled, disabled]);

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpen(false);
      }}
    >
      <div
        id={id}
        className="input-select"
        onBlur={() => {
          setWasTouched(true);
        }}
        tabIndex={0}
      >
        <div
          ref={selectedElm}
          id={id + "-selected"}
          className={`input-select__selected ${
            open
              ? value
                ? "input-select__selected--open input-select__selected--valid"
                : "input-select__selected--open"
              : ""
          } ${!value ? "input-select__selected--empty" : ""} ${
            (wasTouched && !value) || (forceError && !value)
              ? "input-select__selected--invalid"
              : ""
          } ${disabled ? "input-select__selected--disabled" : ""}`}
          onClick={() => {
            if (!disabled) {
              setOpen(!open);
            }
          }}
          title={title}
        >
          {value || label} <ExpandMoreRoundedIcon />
        </div>
        <span
          className={`input-select__label ${
            !value ? "input-select__label--hidden" : ""
          }`}
        >
          {label}
        </span>
        <ul
          ref={optionsListElm}
          id={id + "-options-list"}
          className={`input-select__options-list ${
            listOnTop
              ? "input-select__options-list--list-on-top"
              : "input-select__options-list--list-on-bottom"
          } ${open ? "input-select__options-list--open" : ""}`}
        >
          {options.map((option, i) => {
            return (
              <li
                key={`input-select__option-item-${i}`}
                className="input-select__option-item"
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </ClickAwayListener>
  );
};
