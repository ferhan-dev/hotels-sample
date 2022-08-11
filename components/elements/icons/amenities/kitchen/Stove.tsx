import React from "react";
import { palette } from "src/components/foundation/palette";

const StoveIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6848 2.38477H2.38477V19.2771H20.6848V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6848 19.2769H2.38477V21.6153H20.6848V19.2769Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5072 20.4463H18.3457"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9768 20.4463H15.8076"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4389 20.4463H13.2773"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5387 16.9461C8.93216 16.9461 10.0618 15.8164 10.0618 14.423C10.0618 13.0295 8.93216 11.8999 7.5387 11.8999C6.14524 11.8999 5.01562 13.0295 5.01562 14.423C5.01562 15.8164 6.14524 16.9461 7.5387 16.9461Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.23033 13.1229L5.28418 12.1768"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.23033 15.731L5.28418 16.6771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83887 15.731L9.78502 16.6771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83887 13.1229L9.78502 12.1768"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5543 16.9461C16.9478 16.9461 18.0774 15.8164 18.0774 14.423C18.0774 13.0295 16.9478 11.8999 15.5543 11.8999C14.1609 11.8999 13.0312 13.0295 13.0312 14.423C13.0312 15.8164 14.1609 16.9461 15.5543 16.9461Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2537 13.1229L13.2998 12.1768"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2537 15.731L13.2998 16.6771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8535 15.731L17.7997 16.6771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8535 13.1229L17.7997 12.1768"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5387 9.57692C8.93216 9.57692 10.0618 8.4473 10.0618 7.05384C10.0618 5.66038 8.93216 4.53076 7.5387 4.53076C6.14524 4.53076 5.01562 5.66038 5.01562 7.05384C5.01562 8.4473 6.14524 9.57692 7.5387 9.57692Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.23033 5.75377L5.28418 4.80762"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.23033 8.354L5.28418 9.30785"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83887 8.354L9.78502 9.30785"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83887 5.75377L9.78502 4.80762"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5543 9.57692C16.9478 9.57692 18.0774 8.4473 18.0774 7.05384C18.0774 5.66038 16.9478 4.53076 15.5543 4.53076C14.1609 4.53076 13.0312 5.66038 13.0312 7.05384C13.0312 8.4473 14.1609 9.57692 15.5543 9.57692Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2537 5.75377L13.2998 4.80762"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2537 8.354L13.2998 9.30785"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8535 8.354L17.7997 9.30785"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8535 5.75377L17.7997 4.80762"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

StoveIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default StoveIcon;
