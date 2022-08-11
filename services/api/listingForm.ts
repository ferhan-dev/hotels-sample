import { UserFormValues } from "src/types/form";
import { http } from "./http";

export async function postProperties(body: any) {
  const { data } = await http.post("/api/v1/property", body);
  return data;
}

export async function updateProperties(body: UserFormValues, _id: any) {
  const { data } = await http.put(`/api/v1/property/${_id}`, body);
  return data as UserFormValues;
}

export async function getProperties() {
  const { data } = await http.post("/api/v1/properties");
  return data;
}
export async function getPropertiesById(property_id: any) {
  const { data } = await http.get(`/api/v1/property/${property_id}`);
  return data;
}
