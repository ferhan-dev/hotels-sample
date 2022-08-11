import { http } from "./http";

export async function addBasicFee({ basicFee, propertyId }: any) {
  const data = await http.post(`/api/v1/property/${propertyId}/basic_fee`, basicFee);

  return data;
}

export async function updateBasicFee(basicFee: any) {
  const data = await http.put(`/api/v1/basic_fee/${basicFee.id}`, basicFee);

  return data;
}

export async function deleteBasicFee(id: number) {
  const data = await http.delete(`/api/v1/basic_fee/${id}`);

  return data;
}
