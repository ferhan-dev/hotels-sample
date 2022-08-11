import { http } from "./http";


export async function addRoomsData({ name, sleeping_types, propertyId }: any) {
  const data = await http.post(`/api/v1/property/${propertyId}/rooms`, {
    name,
    sleeping_types,
  });

  return data;
}

export async function updateRoomsData({ name, sleeping_types, id }: any) {
  const data = await http.put(`/api/v1/room/${id}`, {
    name,
    sleeping_types,
  });

  return data;
}

export async function deleteRoomsData(id: number) {
  const data = await http.delete(`/api/v1/room/${id}`);

  return data;
}
