import { http } from "./http";

export async function addPhoto(body: FormData, propertyId: number) {
  const data = await http.post(`/api/v1/property/${propertyId}/photos`, body);

  return data;
}

export async function deletePhoto(photoId: number) {
  const data = await http.delete(`/api/v1/photo/${photoId}`);

  return data;
}
