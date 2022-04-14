import { FormState } from "../../data/types";

export const checkLastAccessItemInputsValid = (
  formState: FormState,
  ids: String[]
) => {
  let isValid = true;

  ids.forEach((id) => {
    if (!formState?.inputs?.[`${id}`]?.isValid) {
      isValid = false;
    }
  });

  return isValid;
};
