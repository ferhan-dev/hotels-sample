import { AmenitySection } from "src/types/amenities";
import { accessibility } from "./accessibility";
import { coffee } from "./coffee";
import { familyFeatures } from "./family-features";
import { indoorFeatures } from "./indoor-features";
import { kitchen } from "./kitchen";
import { outdoorFeatures } from "./outdoor-features";
import { services } from "./services";
import { sports } from "./sports";

export const sections: AmenitySection[] = [
  outdoorFeatures,
  sports,
  indoorFeatures,
  kitchen,
  coffee,
  familyFeatures,
  accessibility,
  services,
].map((section, index, arr) => {
  const nextIndex = arr
    .slice(0, index)
    .reduce((prev, curr) => prev + curr.features.length, 0);
  return {
    ...section,
    nextIndex,
  };
}, [] as AmenitySection[]);
