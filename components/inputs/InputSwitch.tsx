import { useState, useEffect } from "react";

interface InputSwitchProps {
  id: string;
  disabled?: boolean;
  twoValues?: boolean;
  label1: string;
  label2?: string;
  inputHandler: (
    id: string,
    value: boolean,
    isValid: boolean,
    label: string
  ) => void;
  initialValue?: boolean;
  title: string;
  checkWhenDisabled?: boolean;
}

export const InputSwitch = (props: InputSwitchProps) => {
  const {
    id,
    twoValues,
    label1,
    label2,
    inputHandler,
    initialValue,
    disabled,
    title,
    checkWhenDisabled,
  } = props;
  const [checked, setChecked] = useState(initialValue || false);

  useEffect(() => {
    inputHandler(
      id,
      checked as boolean,
      true,
      twoValues ? (checked ? label2 : label1) : label1
    );
  }, [checked, id, twoValues, label2, label1]);

  useEffect(() => {
    if (checkWhenDisabled && disabled) {
      setChecked(true);
    }
  }, [checkWhenDisabled, disabled]);

  return (
    <div
      className="form__group"
      title={title}
      onClick={() => {
        if (!disabled) {
          setChecked(!checked);
        }
      }}
    >
      <div
        className={`input-switch ${disabled ? "input-switch--disabled" : ""}`}
      >
        <div
          className={`input-switch__slider ${
            checked ? "input-switch__slider--checked" : ""
          } ${twoValues ? "input-switch__slider--two-values" : ""}`}
        ></div>
        <span className="input-switch__label">
          {twoValues ? (checked ? label2 : label1) : label1}
        </span>
      </div>
    </div>
  );
};
