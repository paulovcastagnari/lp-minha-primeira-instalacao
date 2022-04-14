import { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";

import {
  RATING_TITLE,
  RATING_DESCRIPTION_LECTURE,
  RATING_DESCRIPTION_COURSE,
} from "../../data/static";

interface InputRatingProps {
  id: string;
  inputHandler: (
    id: string,
    value: string,
    isValid: boolean,
    label: string
  ) => void;
  className: string;
  type: "LECTURE" | "COURSE";
  initialValue?: number;
  updateInitialValue?: boolean;
  disabled?: boolean;
}

export const InputRating = (props: InputRatingProps) => {
  const {
    id,
    className,
    type,
    inputHandler,
    initialValue,
    updateInitialValue,
    disabled,
  } = props;
  const [value, setValue] = useState<number | null>(initialValue || 5);

  useEffect(() => {
    inputHandler(id, value.toString(), true, "Avaliação");
  }, [id, value, inputHandler]);

  useEffect(() => {
    if (updateInitialValue) {
      setValue(initialValue);
    }
  }, [initialValue, updateInitialValue]);

  return (
    <div className="rating__container">
      <h3
        className={`rating__title heading-tertiary ${
          disabled ? "rating__title--disabled" : ""
        }`}
      >
        {RATING_TITLE[value - 1]}
      </h3>
      <Rating
        className={`${className} `}
        value={value}
        name={id}
        disabled={disabled}
        onChange={(event, newValue) => {
          if (!newValue && !disabled) {
            setValue(value);
          } else if (!disabled) {
            setValue(newValue);
          }
        }}
      />
      <p
        className={`rating__description ${
          disabled ? "rating__description--disabled" : ""
        }`}
      >
        {type === "LECTURE"
          ? RATING_DESCRIPTION_LECTURE[value - 1]
          : RATING_DESCRIPTION_COURSE[value - 1]}
      </p>
    </div>
  );
};
