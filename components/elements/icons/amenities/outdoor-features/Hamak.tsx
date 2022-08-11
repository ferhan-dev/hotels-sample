import React from "react";
import { palette } from "src/components/foundation/palette";

const HamakIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.7598 10.2232V2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5918 10.2227L25.7598 5.41504"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5598 16.0697C26.4238 19.3082 21.3598 21.5851 15.5358 21.5851C7.93583 21.5851 1.75983 17.7851 1.42383 13.0312H9.13583C10.0558 15.5543 12.4798 17.5389 15.5358 18.5082"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5999 13.0619C29.2639 17.8157 23.0879 21.6157 15.4879 21.6157C9.62387 21.6157 4.59987 19.3081 2.46387 16.1004C4.85219 18.1385 7.95118 19.237 11.1439 19.1773C16.1519 19.1773 20.5599 16.6927 21.8879 13.0234L29.5999 13.0619Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.23242 10.2232V2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.40039 10.2227L5.23239 5.41504"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.06442 10.2227L5.23242 5.41504"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.40039 11.5078H9.06439"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9277 10.2227L25.7677 5.41504"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9277 11.5078H29.5917"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HamakIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default HamakIcon;
