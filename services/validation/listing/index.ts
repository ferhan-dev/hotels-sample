import { Resolver } from "react-hook-form";

import { FormValues } from "../../../types/form";
import { listingStepOneResolver } from "./step-one";

export const listingResolver: Resolver<FormValues> = async (
  values: FormValues
) => {
  const stepOne = await listingStepOneResolver(values);

  return {
    errors: { ...stepOne.errors },
    values,
  };
};
