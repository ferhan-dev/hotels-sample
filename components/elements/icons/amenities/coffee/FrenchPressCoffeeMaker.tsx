import React from "react";
import { palette } from "src/components/foundation/palette";

const FrenchPressCoffeeMakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  stroke,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7386 21.6152H3.9463V10.9613L2.38477 8.36133H11.7386V21.6152Z"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.53125 12.4307H12.0851"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7383 10.5537C12.742 10.5537 13.7047 10.9525 14.4144 11.6622C15.1242 12.372 15.5229 13.3346 15.5229 14.3383C15.5229 15.3421 15.1242 16.3047 14.4144 17.0145C13.7047 17.7242 12.742 18.1229 11.7383 18.1229"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7383 16.9615C12.4258 16.9615 13.0852 16.6884 13.5713 16.2022C14.0575 15.7161 14.3306 15.0567 14.3306 14.3692C14.3306 13.6816 14.0575 13.0223 13.5713 12.5361C13.0852 12.05 12.4258 11.7769 11.7383 11.7769"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6459 8.32309C11.4541 7.45821 10.973 6.68461 10.2821 6.13012C9.59119 5.57564 8.7318 5.27344 7.8459 5.27344C6.96 5.27344 6.10061 5.57564 5.40969 6.13012C4.71878 6.68461 4.23769 7.45821 4.0459 8.32309H11.6459Z"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.83887 16.3922V8.43066"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.83887 5.2768V3.99219"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3077 16.6152H5.06152"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.83833 3.954C8.27166 3.954 8.62294 3.60271 8.62294 3.16938C8.62294 2.73605 8.27166 2.38477 7.83833 2.38477C7.405 2.38477 7.05371 2.73605 7.05371 3.16938C7.05371 3.60271 7.405 3.954 7.83833 3.954Z"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6464 21.5923H5.06947L5.01562 18.5615H10.6541L10.6464 21.5923Z"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FrenchPressCoffeeMakerIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default FrenchPressCoffeeMakerIcon;
