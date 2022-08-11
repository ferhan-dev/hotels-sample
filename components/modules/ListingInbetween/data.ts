import { ListingInbetweenStep } from "src/types/listing";

export const stepItems: ListingInbetweenStep[] = [
  {
    id: "one",
    title: "Start with basics",
    subTitle: "Beds, bathrooms, amenities, etc.",
    contents: [
      {
        label: "Type of property",
        section: "property-type",
      },
      {
        label: "Address",
        section: "address",
      },
      {
        label: "Guests",
        section: "guests",
      },
      {
        label: "Customer expectations and security",
        section: "customer-expectations-and-security",
      },
      {
        label: "Amenities",
        section: "amenities",
      },
    ],
  },
  {
    id: "two",
    title: "Set the tone",
    subTitle: "Photos, short description and title",
    contents: [
      {
        label: "Host profile photo",
        section: "profile-photo",
      },
      {
        label: "Property photos",
        section: "property-photos",
      },
      {
        label: "Description of property",
        section: "property-description",
      },
    ],
  },
  {
    id: "three",
    title: "Prepare to welcome travelers",
    subTitle: "Reservation settings, calendar, prices",
    contents: [
      {
        label: "Rules",
        section: "rules",
      },
      {
        label: "Rental Parameters",
        section: "rental-parameters",
      },
      {
        label: "Pricing",
        section: "basic-pricing",
      },
      {
        label: "Basic fee",
        section: "basic-fee",
      },
      {
        label: "Calendar",
        section: "calendar",
      },
      {
        label: "Cancellation policies",
        section: "cancellation-policies",
      },
      {
        label: "Local laws and taxes",
        section: "laws-and-taxes",
      },
      {
        label: "Guest's reception",
        section: "guest-reception",
      },
      {
        label: "Add phone number",
        section: "phone-number",
      },
    ],
  },
];
