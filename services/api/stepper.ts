import { AddListBody } from "src/types/stepper";
import { http } from "./http";

export async function addListStepper(body: AddListBody) {
  const { data } = await http.post("/api/v1/properties", body);
  return data;
}
