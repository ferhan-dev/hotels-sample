import { useRouter } from "next/router";
import React from "react";

import { ListingSectionTwoVariant } from "src/types/listing";
import ListingInbetween from "../ListingInbetween";
import ProfilePhoto from "./profile-photo";
import PropertyDescription from "./property-description";
import PropertyPhotos from "./property-photos";

const sectionComponentMap: Record<ListingSectionTwoVariant, React.ElementType> =
  {
    "profile-photo": ProfilePhoto,
    "property-photos": PropertyPhotos,
    "property-description": PropertyDescription,
    inbetween: ListingInbetween,
  };

const ListingStepTwoBody = () => {
  const router = useRouter();
  const { section } = router.query as { section: ListingSectionTwoVariant };

  const Component = sectionComponentMap[section];
  return <Component />;
};

export default ListingStepTwoBody;
