import { Fragment, useReducer, useEffect } from "react";

import { inputReducer } from "../../util/reducers/inputReducer";
import { transformInputText } from "../../util/string/transformInputText";

interface InputRegularProps {
  id: string;
  type: "text" | "email" | "number";
  inputHandler: (
    id: string,
    value: string,
    isValid: boolean,
    label: string
  ) => void;
  label: string;
  title: string;
  validators: { type: string; val?: number }[];
  initialValue?: string;
  initialValid?: boolean;
  disabled?: boolean;
  noMinWidth?: boolean;
  forceError?: boolean;
  icon?: JSX.Element;
  transform?: "UPPERCASE" | "LOWERCASE" | "NONE";
  filter?:
    | "CHAR_ONLY"
    | "CHAR_AND_NUM"
    | "CHAR_NUM_AND_UNDER"
    | "CHAR_ONLY_NO_BLANK"
    | "CHAR_AND_NUM_NO_BLANK"
    | "CHAR_AND_UNDER_NO_BLANK"
    | "CONTENT"
    | "NONE";
  setCardFocus?: React.Dispatch<
    React.SetStateAction<"number" | "name" | "expiry" | "cvc">
  >;
  reset?: number;
  updateInitialValue?: boolean;
}

export const InputRegular = (props: InputRegularProps) => {
  const {
    id,
    type,
    label,
    title,
    inputHandler,
    validators,
    initialValue,
    initialValid,
    disabled,
    noMinWidth,
    icon,
    transform = "NONE",
    filter = "NONE",
    forceError,
    setCardFocus,
    reset,
    updateInitialValue,
  } = props;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });
  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    inputHandler(
      id,
      transformInputText(value, transform, filter),
      isValid,
      label
    );
  }, [id, value, isValid, label, inputHandler, transform, filter]);

  useEffect(() => {
    if (updateInitialValue) {
      dispatch({
        type: "CHANGE",
        val: initialValue || "",
        validators: validators,
      });
    }
  }, [initialValue, updateInitialValue]);

  useEffect(() => {
    if (reset > 0) {
      inputHandler(id, "", false, label);
      dispatch({
        type: "CHANGE",
        val: "",
        validators: validators,
      });
      dispatch({ type: "UNTOUCH" });
    }
  }, [reset]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  return (
    <Fragment>
      {icon && <span className="input-regular__icon">{icon}</span>}
      <input
        id={id}
        placeholder={label}
        type={type}
        className={`input-regular ${
          (isTouched && !isValid) || (forceError && !isValid)
            ? "input-regular--invalid"
            : ""
        } ${isValid ? "input-regular--valid" : ""} ${
          noMinWidth ? "input-regular--no-min-width" : ""
        } ${icon ? "input-regular--icon" : ""} ${
          transform === "UPPERCASE"
            ? "input-regular--uppercase"
            : transform === "LOWERCASE"
            ? "input-regular--lowercase"
            : ""
        }`}
        title={title}
        disabled={disabled}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={transformInputText(value, "NONE", filter)}
      />
      <label htmlFor={id} className="input-regular__label">
        {label}
      </label>
    </Fragment>
  );
};
