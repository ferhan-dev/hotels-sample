import { useRouter } from "next/router";
import React from "react";

import { ListingSectionThreeVariant } from "src/types/listing";
import ListingInbetween from "../ListingInbetween";
import BasicFee from "./BasicFee";
import BasicPricing from "./BasicPricing";
import CalendarSection from "./CalendarSection";
import CancellationPolicies from "./CancellationPolicies";
import GuestReception from "./GuestReception";
import LocalLawsAndTaxes from "./LocalLawsAndTaxes";
import PhoneNumber from "./PhoneNumber";
import RentalParameters from "./RentalParameters";
import Rules from "./Rules";

const sectionComponentMap: Record<
  ListingSectionThreeVariant,
  React.ElementType
> = {
  rules: Rules,
  "rental-parameters": RentalParameters,
  "basic-pricing": BasicPricing,
  "basic-fee": BasicFee,
  calendar: CalendarSection,
  "cancellation-policies": CancellationPolicies,
  "laws-and-taxes": LocalLawsAndTaxes,
  "guest-reception": GuestReception,
  "phone-number": PhoneNumber,
  inbetween: ListingInbetween,
};

const ListingStepThreeBody = () => {
  const router = useRouter();
  const { section } = router.query as { section: ListingSectionThreeVariant };

  const Component = sectionComponentMap[section];
  return <Component />;
};

export default ListingStepThreeBody;
