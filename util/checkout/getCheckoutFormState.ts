import { FormState } from "../../data/types";

export const getCheckoutFormInputsData = (formState: FormState) => {
  return {
    name: {
      value: formState.inputs.name?.value || "",
      isValid: formState.inputs.name?.isValid || false,
      label: formState.inputs.name?.label || "",
    },
    surname: {
      value: formState.inputs.surname?.value || "",
      isValid: formState.inputs.surname?.isValid || false,
      label: formState.inputs.surname?.label || "",
    },
    email: {
      value: formState.inputs.email?.value || "",
      isValid: formState.inputs.email?.isValid || false,
      label: formState.inputs.email?.label || "",
    },
    phone: {
      value: formState.inputs.phone?.value || "",
      isValid: formState.inputs.phone?.isValid || false,
      label: formState.inputs.phone?.label || "",
    },
    documentSwitch: {
      value: formState.inputs.documentSwitch?.value || false,
      isValid: true,
      label: formState.inputs.documentSwitch?.label || "",
    },
    document: {
      value: formState.inputs.document?.value || "",
      isValid: formState.inputs.document?.isValid || false,
      label: formState.inputs.document?.label || "",
    },
  };
};

export const getCheckoutFormIsValid = (formState: FormState) => {
  const isValid =
    formState.inputs.name?.isValid &&
    formState.inputs.surname?.isValid &&
    formState.inputs.email?.isValid &&
    formState.inputs.phone?.isValid &&
    formState.inputs.document?.isValid;

  return isValid;
};
