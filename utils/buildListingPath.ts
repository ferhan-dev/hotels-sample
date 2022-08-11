import { TO_ADD_LISTING_PAGE } from "src/constants";
import { ListingSectionVariant, ListingStepVariant } from "src/types";

export function buildListingPath({
  section,
  step,
}: {
  step: ListingStepVariant;
  section: ListingSectionVariant;
}) {
  return `${TO_ADD_LISTING_PAGE}/${step}/${section}`;
}
