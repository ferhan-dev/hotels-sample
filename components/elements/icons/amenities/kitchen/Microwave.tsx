import React from "react";
import { palette } from "src/components/foundation/palette";

const MicrowaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.9002 2.38477H2.38477V20.1925H27.9002V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1538 4.83838H4.74609V17.7307H21.1538V4.83838Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0463 7.61553C24.6538 7.61553 25.1463 7.12304 25.1463 6.51553C25.1463 5.90801 24.6538 5.41553 24.0463 5.41553C23.4388 5.41553 22.9463 5.90801 22.9463 6.51553C22.9463 7.12304 23.4388 7.61553 24.0463 7.61553Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0463 11.3846C24.6538 11.3846 25.1463 10.8921 25.1463 10.2846C25.1463 9.67706 24.6538 9.18457 24.0463 9.18457C23.4388 9.18457 22.9463 9.67706 22.9463 10.2846C22.9463 10.8921 23.4388 11.3846 24.0463 11.3846Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0771 16.8232H25.3079"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4766 8.57715L9.91504 14.1387"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.623 7.50781L9.43066 10.7001"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2001 11.4307L14.0078 14.623"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.16146 20.1924H3.80762V21.6155H6.16146V20.1924Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.8695 20.1924H23.5156V21.6155H25.8695V20.1924Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MicrowaveIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default MicrowaveIcon;
