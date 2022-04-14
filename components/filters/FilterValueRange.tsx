import { useState } from "react";
import SettingsEthernetRoundedIcon from "@material-ui/icons/SettingsEthernetRounded";

import { Dropdown } from "../ui/Dropdown";
import { InputNumeric } from "../inputs/InputNumeric";
import { InputSelect } from "../inputs/InputSelect";
import { VALIDATOR_VALID } from "../../util/validation/validators";
import { FormState } from "../../data/types";

interface FilterValueRangeProps {
  valueRangeFields: {
    value: string;
    text: string;
  }[];
  inputHandler: (
    id: string,
    value: string | boolean | File,
    isValid: boolean,
    label: string
  ) => void;
  formState: FormState;
}

export const FilterValueRange = (props: FilterValueRangeProps) => {
  const { valueRangeFields, inputHandler, formState } = props;
  const [showDropdown4, setShowDropdown4] = useState<boolean>(false);
  const valueRangeFieldsTexts = valueRangeFields.map((field) => {
    return field.text;
  });

  return (
    <Dropdown
      type="value-range"
      active={showDropdown4}
      setActive={setShowDropdown4}
      button={
        <button
          title="Filtrar items por faixa de valor"
          className="btn btn--grey-light btn--icon-extra-small filter__control-btn"
          onClick={() => {
            setShowDropdown4(!showDropdown4);
          }}
        >
          <SettingsEthernetRoundedIcon />
        </button>
      }
    >
      <form className="form__inputs">
        <div className="form__group">
          <InputSelect
            id="valueField"
            width={100}
            label="Campo"
            options={valueRangeFieldsTexts}
            inputHandler={inputHandler}
            title="Insira o campo ao qual será aplicada a faixa de valor abaixo"
            initialValue={
              (formState?.inputs?.valueField?.value as string) ||
              valueRangeFieldsTexts[0]
            }
            resetInitialValue
          />
        </div>
        <div className="form__group-container">
          <div className="form__group">
            <InputNumeric
              id="minValue"
              type="INT"
              label="Mínimo"
              title="Insira o valor mínimo do campo selecionado acime"
              inputHandler={inputHandler}
              validators={[VALIDATOR_VALID()]}
              initialValue={
                (formState?.inputs?.minValue?.value as string) || "0"
              }
              initialValid={true}
              noMinWidth
              resetInitialValue
            />
          </div>
          <div className="form__group">
            <InputNumeric
              id="maxValue"
              type="INT"
              label="Máximo"
              title="Insira o valor máximo do campo selecionado acima"
              inputHandler={inputHandler}
              validators={[VALIDATOR_VALID()]}
              initialValue={
                (formState?.inputs?.maxValue?.value as string) || "10000"
              }
              initialValid={true}
              noMinWidth
              resetInitialValue
            />
          </div>
        </div>
      </form>
    </Dropdown>
  );
};
