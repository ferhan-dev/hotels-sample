import { http } from "./http";
import { SEARCH_RESULTS_LIMIT } from "src/constants";

export async function getAllProperties(params: any) {
  const data = await http.post("api/v1/properties", { limit: SEARCH_RESULTS_LIMIT, ...params });

  return data;
}
