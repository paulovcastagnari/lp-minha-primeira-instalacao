import { Fragment, useReducer, useEffect } from "react";

import { inputReducer } from "../../util/reducers/inputReducer";

interface InputDefinedProps {
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
  definedValue: string;
  noMinWidth?: boolean;
  forceError?: boolean;
}

export const InputDefined = (props: InputDefinedProps) => {
  const {
    id,
    type,
    label,
    title,
    inputHandler,
    validators,
    definedValue,
    noMinWidth,
    forceError,
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: definedValue || "",
    isTouched: false,
    isValid: true,
  });
  const { isValid, isTouched } = inputState;

  useEffect(() => {
    inputHandler(id, definedValue, isValid, label);
  }, [id, definedValue, isValid, label, inputHandler]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      val: definedValue,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  return (
    <Fragment>
      <input
        id={id}
        placeholder={label}
        type={type}
        className={`input-regular input-regular--defined ${
          (isTouched && !isValid) || (forceError && !isValid)
            ? "input-regular--invalid"
            : ""
        } ${isValid ? "input-regular--valid" : ""} ${
          noMinWidth ? "input-regular--no-min-width" : ""
        }`}
        title={title}
        disabled
        onChange={changeHandler}
        onBlur={touchHandler}
        value={definedValue}
      />
      <label htmlFor={id} className="input-regular__label">
        {label}
      </label>
    </Fragment>
  );
};
