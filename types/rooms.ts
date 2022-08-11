import { BasicRoomsFormValues } from "./form";

export interface AddRoomsBody extends Omit<BasicRoomsFormValues, "body"> {
  body: string;
}
