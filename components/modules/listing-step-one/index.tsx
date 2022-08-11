import { useRouter } from "next/router";
import React from "react";

import { ListingSectionOneVariant } from "src/types/listing";
import Address from "./Address";
import Amenitites from "./Amenities";
import CustomerExpectationsAndSecurity from "./CustomerExpectationsAndSecurity";
import Guests from "./Guests";
import ListingInbetween from "../ListingInbetween";
import PropertyType from "./PropertyType";

const sectionComponentMap: Record<ListingSectionOneVariant, React.ElementType> =
{
  address: Address,
  amenities: Amenitites,
  "customer-expectations-and-security": CustomerExpectationsAndSecurity,
  guests: Guests,
  inbetween: ListingInbetween,
  "property-type": PropertyType,
};

const ListingStepOneBody = () => {
  const router = useRouter();
  const { section } = router.query as {
    section: ListingSectionOneVariant;
  };

  const Component = sectionComponentMap[section];
  return <Component />;
};

export default ListingStepOneBody;
