import React from "react";
import { palette } from "src/components/foundation/palette";

const HockeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2461 11.9308L16.6999 20.1692C16.8268 20.4731 17.0404 20.7329 17.314 20.9162C17.5876 21.0996 17.9091 21.1982 18.2384 21.2H24.1153V18.3154H17.5769L14.0692 9.96924"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2465 8.00757L11.0773 2.84603C10.9803 2.69213 10.832 2.57756 10.6586 2.52267C10.4852 2.46779 10.2979 2.47613 10.13 2.54622C9.96219 2.61631 9.82462 2.74362 9.74173 2.90553C9.65885 3.06745 9.63602 3.25349 9.6773 3.43064L12.4158 9.9691"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.723 18.3154L18.8076 21.1154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.346 18.3154L20.4307 21.1154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.9768 18.3154L22.0537 21.1154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.92323 18.3154L15.4309 2.84617C15.5302 2.69786 15.678 2.58868 15.8489 2.53736C16.0199 2.48605 16.2034 2.49577 16.3679 2.56487C16.5325 2.63397 16.6679 2.75814 16.751 2.91612C16.834 3.07409 16.8596 3.25604 16.8232 3.43078L9.80016 20.1692C9.67327 20.4731 9.4597 20.7329 9.18611 20.9162C8.91252 21.0996 8.59101 21.1983 8.26169 21.2H2.38477V18.3154H8.92323Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.79199 18.3154L7.70738 21.1154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16113 18.3154L6.08421 21.1154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.53809 18.3154L4.45347 21.1154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2697 19.769V20.7998C15.2697 21.2537 14.3389 21.6152 13.1851 21.6152C12.0312 21.6152 11.0928 21.2537 11.0928 20.7998V19.769"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1774 20.5768C14.3287 20.5768 15.262 20.2152 15.262 19.7691C15.262 19.323 14.3287 18.9614 13.1774 18.9614C12.0261 18.9614 11.0928 19.323 11.0928 19.7691C11.0928 20.2152 12.0261 20.5768 13.1774 20.5768Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HockeyIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default HockeyIcon;
