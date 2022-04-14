import { validate } from "../validation/validators";
import { InputAction, InputState } from "../../data/types";

export const inputReducer = (
  state: InputState,
  action: InputAction
): InputState => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    case "UNTOUCH":
      return {
        ...state,
        isTouched: false,
      };
    default:
      return state;
  }
};
