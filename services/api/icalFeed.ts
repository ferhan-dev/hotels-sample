import { http } from "./http";
import { IcalFeedValues } from "src/types";

export async function addIcalFeed(icalFeed: IcalFeedValues, propertyId: number) {
  const data = await http.post(`/api/v1/property/${propertyId}/ical_feed`, icalFeed);

  return data;
}

export async function updateIcalFeed(icalFeed: IcalFeedValues) {
  const data = await http.put(`/api/v1/ical_feed/${icalFeed.id}`, icalFeed);

  return data;
}

export async function deleteIcalFeed(id: number) {
  const data = await http.delete(`/api/v1/ical_feed/${id}`);

  return data;
}
