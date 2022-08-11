import React from "react";

import DiscoverProperties from "./DiscoverProperties";
import DiscoverRegions from "./DiscoverRegions";
import FreeBooking from "./FreeBooking";
import HomeHero from "./HomeHero";
import Properties from "./Properties";
import ShowWithUs from "./ShowWithUs";

const HomeBody = () => {
  return (
    <>
      <HomeHero />
      <Properties />
      <FreeBooking />
      <DiscoverProperties />
      <DiscoverRegions />
      <ShowWithUs />
    </>
  );
};

export default HomeBody;
