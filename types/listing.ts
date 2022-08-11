export interface ListingInbetweenStep {
  id: ListingStepVariant;
  subTitle: string;
  title: string;
  contents: ListingInbetweenStepContent[];
}
export interface accountItemsSteps {
  image: string;
  title: string;
  contents: string;
  flag: string;
}
export interface ListingInbetweenStepContent {
  label: string;
  section: ListingSectionVariant;
}

export type ListingStepParams = {
  step: ListingStepVariant;
  section: ListingSectionVariant;
  id?: string;
};
export interface ListingStepNavigate {
  next: ListingStepParams;
  back: ListingStepParams;
}

export type ListingStepIndexMap = Record<ListingStepVariant, number>;

export type ListingStepVariant = "one" | "two" | "three";

export type ListingSectionVariant =
  | ListingSectionOneVariant
  | ListingSectionTwoVariant
  | ListingSectionThreeVariant;

export type ListingSectionOneVariant =
  | "address"
  | "amenities"
  | "customer-expectations-and-security"
  | "guests"
  | "property-type"
  | "inbetween";

export type ListingSectionTwoVariant =
  | "profile-photo"
  | "property-photos"
  | "property-description"
  | "inbetween";

export type ListingSectionThreeVariant =
  | "rules"
  | "rental-parameters"
  | "basic-pricing"
  | "basic-fee"
  | "calendar"
  | "cancellation-policies"
  | "laws-and-taxes"
  | "guest-reception"
  | "phone-number"
  | "inbetween";

export type ListingNavigateSectionMap = Record<
  ListingSectionOneVariant,
  { next?: ListingSectionOneVariant; back?: ListingSectionOneVariant }
>;
