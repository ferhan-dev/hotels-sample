import React from "react";
import { palette } from "src/components/foundation/palette";

const BeachfrontIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M2 16C4.33409 16 4.33409 14 6.65913 14C8.98417 14 8.82956 15.5 11.1636 15.5C13.4977 15.5 13.6614 14 15.9955 14C18.3296 14 18.1659 15.5 20.5 15.5C22.8341 15.5 22.9977 14 25.3318 14C27.6659 14 27.6659 16 30 16"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2 19C4.33409 19 4.33409 17 6.65913 17C8.98417 17 8.99321 19 11.3273 19C13.6614 19 13.6614 17 15.9955 17C18.3296 17 18.3296 19 20.6637 19C22.9977 19 22.9977 17 25.3318 17C27.6659 17 27.6659 19 30 19"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2 22C4.33409 22 4.17496 20.5 6.5 20.5C8.82504 20.5 8.99321 22 11.3273 22C13.6614 22 13.5023 20.5 15.8363 20.5C18.1704 20.5 18.3296 22 20.6637 22C22.9977 22 22.8386 20.5 25.1727 20.5C27.5068 20.5 27.6659 22 30 22"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4V3"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L4 4"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H3"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9L4 10"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10V11"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9L10 10"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7H11"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5L10 4"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7305 4.12954C21.2284 3.73486 21.8451 3.51991 22.4805 3.51954C23.1658 3.51824 23.8273 3.77106 24.3371 4.22912C24.8469 4.68718 25.1687 5.31796 25.2405 5.99954C25.2964 5.50434 25.4839 5.03314 25.7835 4.63493C26.0831 4.23672 26.4839 3.92603 26.9443 3.73516C27.4046 3.54429 27.9077 3.4802 28.4012 3.54955C28.8947 3.61891 29.3606 3.81918 29.7505 4.12955M26.0705 5.99954H24.4305"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.61001C15.498 8.21533 16.1146 8.00038 16.75 8C17.4353 7.99871 18.0968 8.25153 18.6066 8.70959C19.1164 9.16765 19.4383 9.79843 19.51 10.48C19.5659 9.98481 19.7534 9.51361 20.053 9.1154C20.3526 8.71719 20.7534 8.4065 21.2138 8.21563C21.6741 8.02476 22.1772 7.96067 22.6707 8.03002C23.1642 8.09938 23.6301 8.29965 24.02 8.61002M20.34 10.48H18.7"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BeachfrontIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BeachfrontIcon;
