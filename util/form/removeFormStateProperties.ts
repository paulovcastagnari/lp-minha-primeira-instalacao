import { FormState } from "../../data/types";

export const removeFormStateProperties = (
  formState: FormState,
  rootId: string,
  length: number
) => {
  for (let i = 0; i < length; i++) {
    if (formState.inputs?.[`${rootId}${i}`]) {
      delete formState.inputs[`${rootId}${i}`];
    }
  }
};

export const removeFormStateProperty = (
  formState: FormState,
  rootId: string
) => {
  delete formState.inputs?.[`${rootId}`];
};
