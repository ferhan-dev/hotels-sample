import { FieldError, Path } from "react-hook-form";
import validator from "validator";

import { FormValues, ListingStepOneFormValues } from "../../../types/form";

const validate: Partial<
  Record<Path<ListingStepOneFormValues>, (value: any) => string | undefined>
> = {
  city: validateRequiredField("A city is required"),
  country: validateRequiredField("A country is required"),
  state: validateRequiredField("A province / state is required"),
  full_address: validateRequiredField("An address is required"),
  postal_code: validatePostalCode,
  number_of_rooms: validateRequiredField("A property cannot have 0 bedrooms"),
  number_of_rooms_bath: validateRequiredField(
    "A property cannot have 0 bathrooms"
  ),
  maximum_guests: validateRequiredField("A property cannot have 0 guests"),
};

export const listingStepOneResolver = async (values: FormValues) => {
  const errors: Record<string, FieldError> = {};
  Object.keys(values).forEach((field) => {
    const key = field as keyof ListingStepOneFormValues;

    if (key in validate) {
      const validateFunction = validate[key]!;
      const message = validateFunction(values[key]);
      if (message) {
        errors[key] = {
          type: "",
          message,
        };
      }
    }
  });

  return {
    errors,
    values,
  };
};

function validateRequiredField(message: string) {
  return (value: string | number) => {
    if (typeof value === "string" && validator.isEmpty(value)) return message;

    if (!value) return message;

    return undefined;
  };
}

function validatePostalCode(value: string) {
  if (value && (!validator.isLength(value, { min: 6, max: 6 }) || !validator.isInt(value)))
    return `The postal code must be 6 characters in the format: "A # A # A #"`;

  return undefined;
}
