import { Avatar } from "@material-ui/core";

import AirConditioningIcon from "src/components/elements/icons/amenities/indoor-features/AirConditioning";
import BedLinensIcon from "src/components/elements/icons/amenities/indoor-features/BedLinens";
import CableTVIcon from "src/components/elements/icons/amenities/indoor-features/CableTV";
import ComputerWorkspaceIcon from "src/components/elements/icons/amenities/indoor-features/ComputerWorkspace";
import DryingMachineIcon from "src/components/elements/icons/amenities/indoor-features/DryingMachine";
import DVDIcon from "src/components/elements/icons/amenities/indoor-features/DVD";
import ExtraPillowAndBlanketIcon from "src/components/elements/icons/amenities/indoor-features/ExtraPillowAndBlanket";
import FirewoodIcon from "src/components/elements/icons/amenities/indoor-features/Firewood";
import HairDryerIcon from "src/components/elements/icons/amenities/indoor-features/HairDryer";
import HangersIcon from "src/components/elements/icons/amenities/indoor-features/Hangers";
import HeatedFloorsIcon from "src/components/elements/icons/amenities/indoor-features/HeatedFloors";
import HeatingIcon from "src/components/elements/icons/amenities/indoor-features/Heating";
import HotWaterIcon from "src/components/elements/icons/amenities/indoor-features/HotWater";
import IndoorFireplaceIcon from "src/components/elements/icons/amenities/indoor-features/IndoorFireplace";
import IronIcon from "src/components/elements/icons/amenities/indoor-features/Iron";
import KitchenIcon from "src/components/elements/icons/amenities/indoor-features/Kitchen";
import PotableWaterIcon from "src/components/elements/icons/amenities/indoor-features/PotableWater";
import ShampooIcon from "src/components/elements/icons/amenities/indoor-features/Shampoo";
import ToiletPaperIcon from "src/components/elements/icons/amenities/indoor-features/ToiletPaper";
import TowelsIcon from "src/components/elements/icons/amenities/indoor-features/Towels";
import WashingMachineIcon from "src/components/elements/icons/amenities/indoor-features/WashingMachine";

import { AmenitySection } from "src/types/amenities";

export const indoorFeatures: AmenitySection = {
  title: "Indoor features",
  features: [
    {
      icon: <AirConditioningIcon />,
      label: "Air conditioning",
    },
    {
      icon: <BedLinensIcon />,
      label: "Bed linens",
    },
    {
      icon: <CableTVIcon />,
      label: "Cable TV",
    },
    {
      icon: <ComputerWorkspaceIcon />,
      label: "Computer workspace",
    },
    {
      icon: <DryingMachineIcon />,
      label: "Drying machine",
    },
    {
      icon: <DVDIcon />,
      label: "DVD / Blue Ray",
    },
    {
      icon: <ExtraPillowAndBlanketIcon />,
      label: "Extra pillows and blankets",
    },
    {
      icon: <FirewoodIcon />,
      label: "Firewood included",
    },
    {
      icon: <HairDryerIcon />,
      label: "Hair dryer",
    },
    {
      icon: <HangersIcon />,
      label: "Hangers in closet",
    },
    {
      icon: <HeatedFloorsIcon />,
      label: "Heated floors",
    },
    {
      icon: <HeatingIcon />,
      label: "Heating",
    },
    {
      icon: <HotWaterIcon />,
      label: "Hot water",
    },
    {
      icon: <IndoorFireplaceIcon />,
      label: "Indoor fireplace",
    },
    {
      icon: <IronIcon />,
      label: "Iron",
    },
    {
      icon: <KitchenIcon />,
      label: "Kitchen",
    },
    {
      icon: <PotableWaterIcon />,
      label: "Potable water",
    },
    {
      icon: <ShampooIcon />,
      label: "Shampoo & soap",
    },
    {
      icon: <ToiletPaperIcon />,
      label: "Toilet paper",
    },
    {
      icon: <TowelsIcon />,
      label: "Towels",
    },
    {
      icon: (
        <Avatar
          src="/images/TV.png"
          style={{ width: "23px", height: "24px" }}
          variant="square"
        />
      ),
      label: "TV",
    },
    {
      icon: <WashingMachineIcon />,
      label: "Washing machine",
    },
    {
      icon: (
        <Avatar
          src="/images/Wifi.png"
          style={{ width: "22px", height: "16px" }}
          variant="square"
        />
      ),
      label: "Wifi",
    },
  ],
};
