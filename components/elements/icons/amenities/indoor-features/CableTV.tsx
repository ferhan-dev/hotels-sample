import React from "react";
import { palette } from "src/components/foundation/palette";

const CableTVIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1309 15.777V19.9616H2.38477V6.31543H21.7463"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4307 15.8078H22.7384C22.6085 15.8089 22.4796 15.7841 22.3593 15.7351C22.2389 15.6861 22.1294 15.6137 22.0372 15.5222C21.9449 15.4307 21.8717 15.3218 21.8218 15.2018C21.7718 15.0818 21.7461 14.9532 21.7461 14.8232V3.37707C21.7461 3.11389 21.8506 2.8615 22.0367 2.6754C22.2228 2.48931 22.4752 2.38477 22.7384 2.38477H25.4307C25.6939 2.38477 25.9463 2.48931 26.1324 2.6754C26.3185 2.8615 26.423 3.11389 26.423 3.37707V14.7925C26.4272 14.925 26.4045 15.057 26.3564 15.1805C26.3083 15.3041 26.2357 15.4166 26.1431 15.5114C26.0504 15.6063 25.9395 15.6814 25.8171 15.7323C25.6947 15.7833 25.5633 15.8089 25.4307 15.8078V15.8078Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7461 13.6001H26.4153"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8848 4.34619H23.4232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7383 4.34619H25.2767"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8848 5.66943H23.4232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7383 5.66943H25.2767"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8848 6.99219H23.4232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7383 6.99219H25.2767"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0841 11.4847C24.7341 11.4847 25.2611 10.9578 25.2611 10.3078C25.2611 9.65779 24.7341 9.13086 24.0841 9.13086C23.4342 9.13086 22.9072 9.65779 22.9072 10.3078C22.9072 10.9578 23.4342 11.4847 24.0841 11.4847Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8457 15.4999L15.5611 10.7769"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1152 12.6541L12.7229 11.0464"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0996 15.2155L15.715 13.6001"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.23881 19.9614L6.58496 21.6153"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2773 19.9614L19.9389 21.6153"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CableTVIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default CableTVIcon;
