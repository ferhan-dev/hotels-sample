import ElevatorIcon from "src/components/elements/icons/amenities/accessibility/Elevator";
import PrivateEntranceIcon from "src/components/elements/icons/amenities/accessibility/PrivateEntrance";
import SingleLevelHomeIcon from "src/components/elements/icons/amenities/accessibility/SingleLevelHome";
import WheelchairIcon from "src/components/elements/icons/amenities/accessibility/Wheelchair";

import { AmenitySection } from "src/types/amenities";

export const accessibility: AmenitySection = {
  title: "Accessibility",
  features: [
    {
      icon: <ElevatorIcon />,
      label: "Elevator in the building",
    },
    {
      icon: <WheelchairIcon />,
      label: "Wheelchair accessible",
    },
    {
      icon: <SingleLevelHomeIcon />,
      label: "Single level home",
    },
    {
      icon: <PrivateEntranceIcon />,
      label: "Private entrance",
    },
  ],
};
