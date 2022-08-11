import CoffeeIcon from "src/components/elements/icons/amenities/coffee/Coffee";
import EspressoMachineIcon from "src/components/elements/icons/amenities/coffee/EspressoMachine";
import FilterCoffeeMakerIcon from "src/components/elements/icons/amenities/coffee/FilterCoffeeMaker";
import FrenchPressCoffeeMakerIcon from "src/components/elements/icons/amenities/coffee/FrenchPressCoffeeMaker";
import ItalianCoffeeMakerIcon from "src/components/elements/icons/amenities/coffee/ItalianCoffeeMaker";
import PodCoffeeMakerIcon from "src/components/elements/icons/amenities/coffee/PodCoffeeMaker";
import { AmenitySection } from "src/types/amenities";

export const coffee: AmenitySection = {
  title: "Coffee",
  features: [
    {
      icon: <CoffeeIcon />,
      label: "Coffee/tea included",
    },
    {
      icon: <EspressoMachineIcon />,
      label: "Espresso machine",
    },
    {
      icon: <FilterCoffeeMakerIcon />,
      label: "Filter coffee maker",
    },
    {
      icon: <ItalianCoffeeMakerIcon />,
      label: "Italian coffee maker",
    },
    {
      icon: <FrenchPressCoffeeMakerIcon />,
      label: "French Press coffee maker",
    },
    {
      icon: <PodCoffeeMakerIcon />,
      label: "Pod coffee maker",
    },
  ],
};
