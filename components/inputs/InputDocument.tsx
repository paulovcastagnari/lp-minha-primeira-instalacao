import { Fragment, useReducer, useEffect } from "react";
import NumberFormat from "react-number-format";

import { inputReducer } from "../../util/reducers/inputReducer";

interface InputDocumentProps {
  id: string;
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
  format: "###.###.###-##" | "##.###.###/####-##";
}

export const InputDocument = (props: InputDocumentProps) => {
  const {
    id,
    label,
    title,
    inputHandler,
    validators,
    initialValue,
    initialValid,
    disabled,
    noMinWidth,
    icon,
    format,
    forceError,
  } = props;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });
  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    inputHandler(id, value, isValid, label);
  }, [id, value, isValid, label, inputHandler]);

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
      <NumberFormat
        id={id}
        placeholder={label}
        className={`input-regular ${
          (isTouched && !isValid) || (forceError && !isValid)
            ? "input-regular--invalid"
            : ""
        } ${isValid ? "input-regular--valid" : ""} ${
          noMinWidth ? "input-regular--no-min-width" : ""
        } ${icon ? "input-regular--icon" : ""}`}
        title={title}
        disabled={disabled}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
        decimalScale={0}
        format={format}
        mask="_"
      />
      <label htmlFor={id} className="input-regular__label">
        {label}
      </label>
    </Fragment>
  );
};
