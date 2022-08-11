import { GetStaticPaths, GetStaticProps } from "next";
import HeadContent from "src/hoc/headContent";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

import AppPaper from "src/components/elements/Paper";
import Header from "src/components/modules/Header";
import ListingStepOneBody from "src/components/modules/listing-step-one";
import ListingStepThreeBody from "src/components/modules/listing-step-three";
import ListingStepTwoBody from "src/components/modules/listing-step-two";
import { AddListingContext } from "src/context";
import { listingResolver } from "src/services/validation";
import { FormValues } from "src/types";
import {
  ListingSectionVariant,
  ListingStepParams,
  ListingStepVariant,
} from "src/types/listing";
import { useSmallSize } from "src/hooks";

const stepComponentMap: Record<ListingStepVariant, React.ElementType> = {
  one: ListingStepOneBody,
  two: ListingStepTwoBody,
  three: ListingStepThreeBody,
};

const stepSectionsMap: Record<ListingStepVariant, ListingSectionVariant[]> = {
  one: [
    "address",
    "amenities",
    "customer-expectations-and-security",
    "guests",
    "property-type",
    "inbetween",
  ],
  two: [
    "profile-photo",
    "property-photos",
    "property-description",
    "inbetween",
  ],
  three: [
    "basic-fee",
    "basic-pricing",
    "calendar",
    "cancellation-policies",
    "guest-reception",
    "inbetween",
    "laws-and-taxes",
    "phone-number",
    "rules",
    "rental-parameters",
  ],
};

const AddListingPage = () => {
  const router = useRouter();
  const step = router.query.step as ListingStepVariant;
  const isSmallSize = useSmallSize();

  const form = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      id: 0,
      amenities: [],
      country: "",
      city: "",
      customer_expectations: [],
      full_address: "",
      number_of_rooms: 0,
      number_of_rooms_bath: 0,
      number_of_open_concept_rooms: 0,
      postal_code: "",
      securities: [],
      state: "",
      rooms: [],
      number_of_queen: 0,
      number_of_bunk: 0,
      number_of_sleeping: 0,
      number_of_sofa_bed: 0,
      number_of_couch: 0,
      number_of_king_size: 0,
      type: "",
    },
    resolver: listingResolver,
  });
  const Component = stepComponentMap[step];

  const meta = {
    title: `Add Listing`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/add-listing/*',
  };

  return (
    <>
      <HeadContent title={meta.title} description={meta.description} keywords={meta.keywords} route={meta.route} />
      <AppPaper style={{ paddingTop: isSmallSize ? "135px" : "100px" }}>
        <AddListingContext.Provider value={{ form }}>
          <Header appBarProps={{ position: "sticky" }} type="listing" />
          <Component />
        </AddListingContext.Provider>
      </AppPaper>
    </>
  );
};

export default AddListingPage;

export const getStaticPaths: GetStaticPaths<ListingStepParams> = async () => {
  const steps: ListingStepVariant[] = ["one", "two", "three"];
  const paths: { params: ListingStepParams }[] = [];

  steps.forEach((step) => {
    stepSectionsMap[step]?.forEach((section) => {
      paths.push({
        params: { step, section },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
