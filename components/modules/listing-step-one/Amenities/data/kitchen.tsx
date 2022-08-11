import CookingBasicsIcon from "src/components/elements/icons/amenities/kitchen/CookingBasics";
import DishesAndSilverwareIcon from "src/components/elements/icons/amenities/kitchen/DishesAndSilverware";
import DishwasherIcon from "src/components/elements/icons/amenities/kitchen/Dishwasher";
import MicrowaveIcon from "src/components/elements/icons/amenities/kitchen/Microwave";
import OvenIcon from "src/components/elements/icons/amenities/kitchen/Oven";
import PotsAndPansIcon from "src/components/elements/icons/amenities/kitchen/PotsAndPans";
import RefrigeratorIcon from "src/components/elements/icons/amenities/kitchen/Refrigerator";
import StoveIcon from "src/components/elements/icons/amenities/kitchen/Stove";

import { AmenitySection } from "src/types/amenities";

export const kitchen: AmenitySection = {
  title: "Kitchen",
  features: [
    {
      icon: <CookingBasicsIcon />,
      label: "Cooking basics",
    },
    {
      icon: <DishesAndSilverwareIcon />,
      label: "Dishes and silverware",
    },
    {
      icon: <DishwasherIcon />,
      label: "Dishwasher",
    },
    {
      icon: <MicrowaveIcon />,
      label: "Microwave",
    },
    {
      icon: <OvenIcon />,
      label: "Oven",
    },
    {
      icon: <PotsAndPansIcon />,
      label: "Pots and pans",
    },
    {
      icon: <RefrigeratorIcon />,
      label: "Refrigerator",
    },
    {
      icon: <StoveIcon />,
      label: "Stove",
    },
  ],
};
