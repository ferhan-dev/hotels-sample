import { http } from "./http";

export async function addBasicPricing({ basicPricing, propertyId }: any) {
  const data = await http.post(`/api/v1/property/${propertyId}/basic_pricing`, basicPricing);

  return data;
}

export async function updateBasicPricing(basicPricing: any) {
  const data = await http.put(`/api/v1/basic_pricing/${basicPricing.id}`, basicPricing);

  return data;
}

export async function deleteBasicPricing(id: number) {
  const data = await http.delete(`/api/v1/basic_pricing/${id}`);

  return data;
}
