import { http } from "./http";

export async function addGuestReception({ guestReception, propertyId }: any) {
  const data = await http.post(`/api/v1/property/${propertyId}/guest_reception`, guestReception);

  return data;
}

export async function updateGuestReception(guestReception: any) {
  const data = await http.put(`/api/v1/guest_reception/${guestReception.get("id")}`, guestReception);

  return data;
}

export async function deleteGuestReception(id: number) {
  const data = await http.delete(`/api/v1/guest_reception/${id}`);

  return data;
}
