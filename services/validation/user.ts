import { FieldError, Resolver } from "react-hook-form";
import { months } from "src/utils";
import validator from "validator";

import { FormValues, UserFormValues } from "../../types/form";
// @ts-ignore
const validate: Omit<
  Record<keyof UserFormValues, (value: string) => string | undefined>,
  "confirm_password"
> = {
  day: validateDay,
  year: validateYear,
  email: validateEmail,
  first_name: validateName("Firstname"),
  last_name: validateName("Lastname"),
  month: validateMonth,
  password: validatePassword,
  language: validateLanguage,
};

export const userResolver: Resolver<FormValues> = async (
  values: FormValues
) => {
  const errors: Record<string, FieldError> = {};
  const { confirm_password, password } = values;
  Object.keys(values).forEach((field) => {
    const key = field as keyof UserFormValues;
    const message =
      key === "confirm_password"
        ? validateConfirmPassword(confirm_password, password)
        : validate[key](values[key]);
    if (message) {
      errors[key] = {
        type: "",
        message,
      };
    }
  });

  return {
    errors,
    values: values.email
      ? { ...values, email: values.email.toLowerCase() }
      : values,
  };
};

function validateConfirmPassword(value: string, match: string) {
  if (value !== match) return "Password do not match";

  return undefined;
}

function validateDay(value: string) {
  if (!value) return "Day is required";

  const intValue = parseInt(value);
  if (intValue > 31 || intValue < 0) return "Day is not valid";

  return undefined;
}

function validateEmail(value: string) {
  if (!validator.isEmail(value)) return "Email is not valid";

  return undefined;
}

function validateName(field: string) {
  return (value: string) => {
    if (validator.isEmpty(value)) return `${field} is required`;

    if (!validator.matches(value, /^[a-z ,.'-]+$/i))
      return `${field} should contain letters or ,.'-`;

    if (!validator.isLength(value, { max: 50 }))
      return `${field} should be less than 50 characters`;

    return undefined;
  };
}

function validatePassword(value: string) {
  if (!validator.isLength(value, { min: 8 }))
    return "Password should be up to 8 characters";

  return undefined;
}

function validateLanguage(_: string) {
  return undefined;
}

function validateMonth(value: string) {
  if (!value) return "Month is required";

  if (!months.includes(value)) return "Month is not valid";

  return undefined;
}

function validateYear(value: string) {
  if (!value) return "Year is required";

  const intValue = parseInt(value);
  if (intValue > new Date().getFullYear() - 18 || intValue < 1970)
    return "Year is not valid";

  return undefined;
}
