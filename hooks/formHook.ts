import { useCallback, useReducer, useState } from "react";

import { Inputs, FormState } from "../data/types";

interface FormAction {
  type: string;
  value?: string | boolean | File;
  isValid?: boolean;
  inputId?: string;
  label?: string;
  forceError?: boolean;
  reset?: boolean;
  reinitialize?: boolean;
  invalidInputsIds?: string[];
  inputs?: Inputs;
  formIsValid?: boolean;
}

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && (action.isValid as boolean);
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId as string]: {
            value: action.value,
            isValid: action.isValid,
            label: action.label,
            forceError: false,
          },
        },
        isValid: formIsValid,
        reset: false,
        reinitialize: false,
      };

    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
        reset: action.reset,
        reinitialize: action.reinitialize,
      };

    case "SET_INVALID_INPUTS":
      for (let i = 0; i < action.invalidInputsIds?.length; i++) {
        state.inputs[action.invalidInputsIds[i]].forceError = true;
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const useForm = (
  initialInputs: Inputs,
  intialFormValidity: boolean = false,
  initialReset: boolean = false,
  initialReinitialize: boolean = false
) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: intialFormValidity,
    reset: initialReset,
    reinitialize: initialReinitialize,
  });
  const [invalidInputs, setInvalidInputs] = useState<string[]>(null);
  const [reset, setReset] = useState<number>(0);

  const inputHandler = useCallback(
    (
      id: string,
      value: string | boolean | File,
      isValid: boolean,
      label: string
    ) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        label: label,
        inputId: id,
      });
    },
    []
  );

  const setFormData = useCallback(
    (
      inputData: Inputs,
      formValidity: boolean,
      resetFLag: boolean = false,
      reinitializeFlag: boolean = false
    ) => {
      dispatch({
        type: "SET_DATA",
        inputs: inputData,
        formIsValid: formValidity,
        reset: resetFLag,
        reinitialize: reinitializeFlag,
      });
    },
    []
  );

  const resetHandler = useCallback(() => {
    setReset((prevValue) => {
      return (prevValue += 1);
    });
  }, []);

  const reportInvalid = useCallback((inputs: Inputs) => {
    const inputIds: string[] = [];
    const invalidInputsIds: string[] = [];
    const invalidInputsLabels: string[] = [];
    for (let input in inputs) {
      inputIds.push(input);
    }
    for (let i = 0; i < inputIds.length; i++) {
      if (!inputs[inputIds[i]].isValid) {
        invalidInputsIds.push(inputIds[i]);
        invalidInputsLabels.push(inputs[inputIds[i]].label);
      }
    }

    dispatch({
      type: "SET_INVALID_INPUTS",
      invalidInputsIds: invalidInputsIds,
    });

    setInvalidInputs(invalidInputsLabels);

    document.getElementById(invalidInputsIds[0])?.scrollIntoView();
  }, []);

  const clearInvalid = useCallback(() => {
    setInvalidInputs(null);
  }, []);

  return {
    formState,
    inputHandler,
    setFormData,
    reportInvalid,
    clearInvalid,
    invalidInputs,
    resetHandler,
    reset,
  };
};
