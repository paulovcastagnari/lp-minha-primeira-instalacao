import { Fragment, useReducer, useEffect, useState, useRef } from "react";

import { inputReducer } from "../../util/reducers/inputReducer";
import { transformInputText } from "../../util/string/transformInputText";

interface InputTextAreaProps {
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
  expand?: boolean;
  initialValue?: string;
  initialValid?: boolean;
  disabled?: boolean;
  initialRows?: number;
  forceError?: boolean;
  noMinWidth?: boolean;
  noLabel?: boolean;
  updateInitialValue?: boolean;
  transform?: "UPPERCASE" | "LOWERCASE" | "NONE";
  filter?:
    | "CHAR_ONLY"
    | "CHAR_AND_NUM"
    | "CHAR_ONLY_NO_BLANK"
    | "CHAR_AND_NUM_NO_BLANK"
    | "CHAR_AND_UNDER_NO_BLANK"
    | "CONTENT"
    | "NONE";
  reset?: number;
}

export const InputTextArea = (props: InputTextAreaProps) => {
  const {
    id,
    label,
    title,
    inputHandler,
    validators,
    initialValue,
    initialValid,
    disabled,
    initialRows,
    expand = true,
    forceError,
    noMinWidth,
    noLabel,
    updateInitialValue,
    transform = "NONE",
    filter = "NONE",
    reset,
  } = props;
  const textAreaElm = useRef<HTMLTextAreaElement>(null);
  const labelElm = useRef<HTMLLabelElement>(null);
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [rows, setRows] = useState<number>(initialRows || 3);
  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    inputHandler(
      id,
      transformInputText(value, transform, filter),
      isValid,
      label
    );
    setScrollHeight(textAreaElm.current?.scrollHeight);
    labelElm.current?.style.setProperty("--rows", `${rows}`);
  }, [id, value, isValid, label, inputHandler, expand, rows]);

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
      setScrollHeight(0);
      setRows(initialRows || 3);
      labelElm.current?.style.setProperty("--rows", `${initialRows || 3}`);
    }
  }, [reset]);

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
    if (scrollHeight < event?.target.scrollHeight && expand) {
      setRows(rows + 1);
      setScrollHeight(event.target.scrollHeight);
      labelElm.current.style.setProperty("--rows", `${rows}`);
    }
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  return (
    <Fragment>
      <textarea
        ref={textAreaElm}
        rows={rows}
        id={id}
        placeholder={label}
        className={`input-regular ${
          expand
            ? "input-regular--text-area-expand"
            : "input-regular--text-area-not-expand"
        } ${
          (isTouched && !isValid) || (forceError && !isValid)
            ? "input-regular--invalid"
            : ""
        } ${noMinWidth ? "input-regular--no-min-width" : ""} ${
          isValid ? "input-regular--valid" : ""
        } ${
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
      <label
        ref={labelElm}
        htmlFor={id}
        id={"label-" + id}
        className={`input-regular__label ${
          noLabel ? "input-regular__label--hidden" : ""
        } input-regular__label--text-area`}
      >
        {label}
      </label>
    </Fragment>
  );
};
