import { FormState } from "../../data/types";

export const getFormItemsArray = <T>(
  formState: FormState,
  idRoot: string,
  length: number
) => {
  const dataArray: T[] = [];
  for (let i = 0; i < length; i++) {
    if (formState.inputs?.[`${idRoot}${i}`]?.value) {
      dataArray.push(formState.inputs[`${idRoot}${i}`].value as unknown as T);
    }
  }

  return dataArray;
};
