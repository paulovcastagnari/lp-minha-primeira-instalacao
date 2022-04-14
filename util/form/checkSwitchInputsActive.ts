import { FormState } from "../../data/types";

export const checkSwitchInputsActive = (
  formState: FormState,
  rootId: string,
  length: number
) => {
  let hasActiveInput = false;

  for (let i = 0; i < length; i++) {
    if (formState.inputs?.[`${rootId}${i}`]?.value) {
      hasActiveInput = true;
    }
  }

  return hasActiveInput;
};
