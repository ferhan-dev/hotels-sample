import React from "react";
import { palette } from "src/components/foundation/palette";

const KitchenIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.0925 6.98438H20.3848V8.43822H29.0925V6.98438Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.1463 4.19238H23.3309L20.3848 6.98469H29.0925L26.1463 4.19238Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0463 2.38477H23.3232V4.19246H26.0463V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.0925 12.9077H20.3848V21.6154H29.0925V12.9077Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.4152 16.1079H22.0537V19.9387H27.4152V16.1079Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3849 12.9077H11.0156V21.6154H20.3849V12.9077Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0156 17.2617H20.3849"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5381 15.123H16.8535"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5381 19.3921H16.8535"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0155 6.98438H2.38477V21.6151H11.0155V6.98438Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0155 2.38477H2.38477V6.98477H11.0155V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.78418 5.49979V3.86133"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.78418 14.1385V12.1616"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

KitchenIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default KitchenIcon;
