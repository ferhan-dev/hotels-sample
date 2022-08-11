import React from "react";
import { palette } from "src/components/foundation/palette";

const OutdoorElectricalOutletIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M13.6386 2.38477H2.38477V21.6155H13.6386V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.13885 10.3231H6.88501C6.35865 10.3231 5.85386 10.1141 5.48167 9.74186C5.10948 9.36968 4.90039 8.86488 4.90039 8.33852V6.80006C4.90039 6.27371 5.10948 5.76892 5.48167 5.39673C5.85386 5.02454 6.35865 4.81544 6.88501 4.81544H9.13885C9.40012 4.81443 9.65902 4.86502 9.9007 4.9643C10.1424 5.06358 10.3621 5.20961 10.5472 5.394C10.7323 5.57839 10.8791 5.79751 10.9794 6.0388C11.0796 6.28009 11.1312 6.53879 11.1312 6.80006V8.33852C11.1291 8.86558 10.9183 9.37036 10.5449 9.74233C10.1715 10.1143 9.66592 10.3231 9.13885 10.3231V10.3231Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.80762 6.10791V7.39253"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.20801 6.10791V7.39253"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.54567 9H7.46875"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.13887 19.0541H6.88502C6.35867 19.0541 5.85387 18.845 5.48168 18.4728C5.1095 18.1006 4.90041 17.5958 4.90041 17.0695V15.531C4.89939 15.2701 4.95003 15.0116 5.0494 14.7703C5.14878 14.5291 5.29493 14.3099 5.47942 14.1254C5.66391 13.9409 5.88309 13.7948 6.12434 13.6954C6.36558 13.596 6.62411 13.5454 6.88502 13.5464H9.13887C9.40014 13.5454 9.65904 13.596 9.90071 13.6953C10.1424 13.7945 10.3621 13.9406 10.5472 14.125C10.7323 14.3093 10.8792 14.5285 10.9794 14.7698C11.0796 15.011 11.1312 15.2697 11.1312 15.531V17.0695C11.1291 17.5965 10.9183 18.1013 10.5449 18.4733C10.1715 18.8452 9.66593 19.0541 9.13887 19.0541V19.0541Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.80762 14.8384V16.123"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.20801 14.8384V16.123"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.53884 17.731H7.46191"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

OutdoorElectricalOutletIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default OutdoorElectricalOutletIcon;
