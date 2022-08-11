import { StepperFormValues } from "./form";

export interface AddListBody extends Omit<StepperFormValues, "body"> {
  body: object;
}
