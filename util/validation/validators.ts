import { validateStringDate } from "./validateStringDate";

const VALIDATOR_TYPE_VALID = "VALID";
const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MINLENGTH_NUM = "MINLENGTH_NUM";
const VALIDATOR_TYPE_MAXLENGTH_NUM = "MAXLENGTH_NUM";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_EMAIL_OPTIONAL = "EMAIL_OPTIONAL";
const VALIDATOR_TYPE_PASSWORD = "PASSWORD";
const VALIDATOR_TYPE_INT = "INT";
const VALIDATOR_TYPE_FLOAT = "FLOAT";
const VALIDATOR_TYPE_NAME = "NAME";
const VALIDATOR_TYPE_GENERAL = "GENERAL";
const VALIDATOR_TYPE_MINIMAL = "MINIMAL";
const VALIDATOR_TYPE_DATE = "DATE";
const VALIDATOR_TYPE_PHONE_OPTIONAL = "PHONE_OPTIONAL";
const VALIDATOR_TYPE_CNPJ_OPTIONAL = "CNPJ_OPTIONAL";
const VALIDATOR_TYPE_MINLENGTH_OPTIONAL = "MINLENGTH_OPTIONAL";

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MINLENGTH_NUM = (val: number) => ({
  type: VALIDATOR_TYPE_MINLENGTH_NUM,
  val: val,
});
export const VALIDATOR_MAXLENGTH_NUM = (val: number) => ({
  type: VALIDATOR_TYPE_MAXLENGTH_NUM,
  val: val,
});
export const VALIDATOR_MIN = (val: number) => ({
  type: VALIDATOR_TYPE_MIN,
  val: val,
});
export const VALIDATOR_MAX = (val: number) => ({
  type: VALIDATOR_TYPE_MAX,
  val: val,
});
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_EMAIL_OPTIONAL = () => ({
  type: VALIDATOR_TYPE_EMAIL_OPTIONAL,
});
export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD });
export const VALIDATOR_INT = () => ({ type: VALIDATOR_TYPE_INT });
export const VALIDATOR_FLOAT = () => ({ type: VALIDATOR_TYPE_FLOAT });
export const VALIDATOR_NAME = () => ({ type: VALIDATOR_TYPE_NAME });
export const VALIDATOR_GENERAL = () => ({ type: VALIDATOR_TYPE_GENERAL });
export const VALIDATOR_MINIMAL = () => ({ type: VALIDATOR_TYPE_MINIMAL });
export const VALIDATOR_DATE = () => ({ type: VALIDATOR_TYPE_DATE });
export const VALIDATOR_VALID = () => ({ type: VALIDATOR_TYPE_VALID });
export const VALIDATOR_PHONE_OPTIONAL = () => ({
  type: VALIDATOR_TYPE_PHONE_OPTIONAL,
});
export const VALIDATOR_CNPJ_OPTIONAL = () => ({
  type: VALIDATOR_TYPE_CNPJ_OPTIONAL,
});
export const VALIDATOR_MINLENGTH_OPTIONAL = (val: number) => ({
  type: VALIDATOR_TYPE_MINLENGTH_OPTIONAL,
  val: val,
});

export const validate = (
  value: string,
  validators: { type: string; val?: number }[]
) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH_NUM) {
      isValid = isValid && value.replace(/\D/g, "").length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH_NUM) {
      isValid = isValid && value.replace(/\D/g, "").length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && Number(value.replace(",", ".")) >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && Number(value.replace(",", ".")) <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid =
        isValid && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_PASSWORD) {
      isValid =
        isValid &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z@$!%*?#&=+^~()_-\d]{8,}$/.test(
          value
        );
    }
    if (validator.type === VALIDATOR_TYPE_INT) {
      isValid = isValid && /^[0-9]*$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_FLOAT) {
      isValid = isValid && /^[0-9]*[,.]{0,1}[0-9]{1,2}$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_NAME) {
      isValid =
        isValid && /^[^<>|/\\?.,{}[\]_$%^&*()!@#:;'"`=+~\-!]*$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_GENERAL) {
      isValid = isValid && /^[^<>|/\\?{}[\]$%^&*()!@#:;`=+~!]*$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MINIMAL) {
      isValid = isValid && /^[^<>|\\?{}[\]$%^&*()!@#:;`=+~!]*$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_DATE) {
      isValid = isValid && validateStringDate(value);
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL_OPTIONAL) {
      isValid =
        value.length === 0
          ? true
          : isValid && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_VALID) {
      isValid = true;
    }
    if (validator.type === VALIDATOR_TYPE_PHONE_OPTIONAL) {
      isValid =
        value.length < 2
          ? true
          : (isValid &&
              /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{4,5}[-\s\.]?[0-9]{4,5}$/.test(
                value
              )) ||
            /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{5}[-\s\.]?[0-9]{3}$/.test(
              value
            );
    }
    if (validator.type === VALIDATOR_TYPE_CNPJ_OPTIONAL) {
      isValid =
        value.length === 0
          ? true
          : isValid &&
            /^[0-9]{2}[.]{1}[0-9]{3}[.]{1}[0-9]{3}[/]{1}[0-9]{4}[-][0-9]{2}$/.test(
              value
            );
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH_OPTIONAL) {
      isValid =
        value.length === 0
          ? true
          : isValid && value.trim().length >= validator.val;
    }
  }
  return isValid;
};
