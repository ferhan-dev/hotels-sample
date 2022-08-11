import BachelorPartyIcon from "src/components/elements/icons/amenities/services/BachelorParty";
import BirthdayPartyIcon from "src/components/elements/icons/amenities/services/BirthdayParty";
import ConferenceRoomIcon from "src/components/elements/icons/amenities/services/ConferenceRoom";
import CorporateMeetingIcon from "src/components/elements/icons/amenities/services/CorporateMeeting";
import GymAccessIcon from "src/components/elements/icons/amenities/services/GymAccess";
import OneNightRentalIcon from "src/components/elements/icons/amenities/services/OneNightRental";
import OutdoorElectricalOutletIcon from "src/components/elements/icons/amenities/services/OutdoorElectricalOutlet";
import WeddingReceptionIcon from "src/components/elements/icons/amenities/services/WeddingReception";

import { AmenitySection } from "src/types/amenities";

export const services: AmenitySection = {
  title: "Services",
  features: [
    {
      icon: <BachelorPartyIcon />,
      label: "Bachelor(ette) party",
    },
    {
      icon: <BirthdayPartyIcon />,
      label: "Birthday party",
    },
    {
      icon: <ConferenceRoomIcon />,
      label: "Conference room",
    },
    {
      icon: <CorporateMeetingIcon />,
      label: "Corporate meeting",
    },
    {
      icon: <GymAccessIcon />,
      label: "Gym access",
    },
    {
      icon: <OneNightRentalIcon />,
      label: "One night rental",
    },
    {
      icon: <OutdoorElectricalOutletIcon />,
      label: "Outdoor electrical outlet",
    },
    {
      icon: <WeddingReceptionIcon />,
      label: "Wedding reception",
    },
  ],
};
