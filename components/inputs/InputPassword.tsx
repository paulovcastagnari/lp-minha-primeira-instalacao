import { Fragment, useReducer, useEffect, useState } from "react";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

import { inputReducer } from "../../util/reducers/inputReducer";

interface InputPasswordProps {
  inputHandler: (
    id: string,
    value: string,
    isValid: boolean,
    label: string
  ) => void;
  validators: { type: string; val?: number }[];
  id?: string;
  initialValue?: string;
  initialValid?: boolean;
  disabled?: boolean;
  title?: string;
  label?: string;
}

export const InputPassword = (props: InputPasswordProps) => {
  const {
    inputHandler,
    validators,
    initialValue,
    initialValid,
    disabled,
    title,
    id = "password",
    label = "Senha",
  } = props;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });
  const { value, isValid, isTouched } = inputState;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    inputHandler(id, value, isValid, label);
  }, [value, isValid, inputHandler]);

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
      <input
        id={id}
        placeholder={label}
        type={!isVisible ? "password" : "text"}
        className={`input-regular ${
          isTouched && !isValid && "input-regular--invalid"
        } ${isValid && "input-regular--valid"}`}
        title={title || "Insira a sua senha"}
        disabled={disabled}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
      />
      <label htmlFor="password" className="input-regular__label">
        {label}
      </label>
      <span
        className={`input-regular__btn-icon ${
          isTouched && !isValid
            ? "input-regular__btn-icon--helpertext-active"
            : ""
        }`}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {!isVisible ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
      </span>
      <p
        className={`input-regular__helpertext ${
          isTouched && !isValid ? "input-regular__helpertext--active" : ""
        }`}
      >
        8 caracteres, letras maiúsculas, minúsculas e algarismos
      </p>
    </Fragment>
  );
};
