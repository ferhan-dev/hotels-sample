import BabyBathIcon from "src/components/elements/icons/amenities/family-features/BabyBath";
import BabyCribIcon from "src/components/elements/icons/amenities/family-features/BabyCrib";
import BathtubIcon from "src/components/elements/icons/amenities/family-features/Bathtub";
import BoardGamesIcon from "src/components/elements/icons/amenities/family-features/BoardGames";
import FoosballTableIcon from "src/components/elements/icons/amenities/family-features/FoosballTable";
import GameConsoleIcon from "src/components/elements/icons/amenities/family-features/GameConsole";
import HighChairIcon from "src/components/elements/icons/amenities/family-features/HighChair";
import PingPongIcon from "src/components/elements/icons/amenities/family-features/PingPong";
import PoolTableIcon from "src/components/elements/icons/amenities/family-features/PoolTable";

import { AmenitySection } from "src/types/amenities";

export const familyFeatures: AmenitySection = {
  title: "Family features",
  features: [
    {
      icon: <BabyBathIcon />,
      label: "Baby bath",
    },
    {
      icon: <BabyCribIcon />,
      label: "Baby crib",
    },
    {
      icon: <BathtubIcon />,
      label: "Bathtub",
    },
    {
      icon: <BoardGamesIcon />,
      label: "Board games",
    },
    {
      icon: <FoosballTableIcon />,
      label: "Foosball table",
    },
    {
      icon: <GameConsoleIcon />,
      label: "Game console",
    },
    {
      icon: <HighChairIcon />,
      label: "High chair",
    },
    {
      icon: <PingPongIcon />,
      label: "Ping pong table",
    },
    {
      icon: <PoolTableIcon />,
      label: "Pool table",
    },
  ],
};
