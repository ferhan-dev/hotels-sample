import React from "react";
import { palette } from "src/components/foundation/palette";

const ElevatorIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.02344 13.054V2.38477H19.8311V13.054"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.48438 13.054V4.00781H18.3767V13.054"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9307 4.00781V13.054"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.27691 4.99219L8.56152 5.70757"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5309 5.36133L8.76172 7.13056"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 14.5308H23.4771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 21.6152H23.4771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.79199 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.07715 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.36133 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6465 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9307 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2158 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4922 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7773 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0615 14.5308V21.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ElevatorIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default ElevatorIcon;
