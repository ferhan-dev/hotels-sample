import { http } from "./http";

export async function addRentalParameter({ rentalParameter, propertyId }: any) {
  const data = await http.post(`/api/v1/property/${propertyId}/rental_parameter`, {
    ...rentalParameter
  });

  return data;
}

export async function updateRentalParameter(rentalParameter: any) {
  const data = await http.put(`/api/v1/rental_parameter/${rentalParameter.id}`, {
    ...rentalParameter
  });

  return data;
}

export async function deleteRentalParameter(id: number) {
  const data = await http.delete(`/api/v1/rental_parameter/${id}`);

  return data;
}
