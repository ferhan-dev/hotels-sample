import React from "react";
import { palette } from "src/components/foundation/palette";

const DVDIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.68477 14.4694H2.38477V11.2002H18.7386V14.4694H14.7232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.954 2.38477H3.16938L2.38477 11.2002H18.7386L17.954 2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6996 12.1076C9.83778 12.1405 9.00516 12.4286 8.30732 12.9353C7.60948 13.4421 7.07785 14.1447 6.77987 14.954C6.48188 15.7633 6.43096 16.6429 6.63357 17.4811C6.83618 18.3194 7.28318 19.0787 7.91788 19.6626C8.55259 20.2464 9.3464 20.6287 10.1987 20.7608C11.0509 20.8929 11.9232 20.7689 12.7049 20.4046C13.4866 20.0402 14.1424 19.452 14.5893 18.7143C15.0362 17.9767 15.254 17.123 15.215 16.2615C15.14 15.1216 14.6293 14.0543 13.7886 13.2809C12.9478 12.5075 11.8417 12.0874 10.6996 12.1076V12.1076ZM10.6996 17.7922C10.3953 17.7922 10.0979 17.702 9.84485 17.533C9.59185 17.3639 9.39466 17.1236 9.27822 16.8425C9.16177 16.5614 9.13131 16.2521 9.19067 15.9536C9.25003 15.6552 9.39656 15.3811 9.61172 15.1659C9.82687 14.9508 10.101 14.8042 10.3994 14.7449C10.6979 14.6855 11.0072 14.716 11.2883 14.8324C11.5694 14.9489 11.8097 15.1461 11.9788 15.3991C12.1478 15.6521 12.238 15.9495 12.238 16.2538C12.238 16.6605 12.077 17.0506 11.7902 17.3389C11.5033 17.6272 11.114 17.7902 10.7073 17.7922H10.6996Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.89979 12.6309H16.2152L16.7613 21.6155H4.36133L4.89979 12.6309Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M14.7612 12.6309H6.35352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DVDIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default DVDIcon;
