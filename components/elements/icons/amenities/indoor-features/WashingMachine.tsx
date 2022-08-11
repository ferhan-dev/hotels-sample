import React from "react";
import { palette } from "src/components/foundation/palette";

const WashingMachineIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M17.9078 21.6152H4.26169C3.7639 21.6152 3.2865 21.4175 2.9345 21.0655C2.58251 20.7135 2.38477 20.2361 2.38477 19.7383V5.73828H19.7617V19.7383C19.7617 20.2321 19.5671 20.706 19.2201 21.0574C18.8731 21.4087 18.4016 21.6091 17.9078 21.6152V21.6152Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.26169 2.38477H17.9078C18.4056 2.38477 18.883 2.58251 19.235 2.9345C19.587 3.2865 19.7848 3.7639 19.7848 4.26169V5.73861H2.38477V4.26169C2.38477 4.01521 2.43332 3.77114 2.52764 3.54342C2.62196 3.3157 2.76022 3.10879 2.9345 2.9345C3.10879 2.76022 3.31571 2.62196 3.54342 2.52763C3.77114 2.43331 4.01521 2.38477 4.26169 2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.49968 5.5L9.49963 4H4.03809L4.03814 5.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.792 4.06152H13.0381"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4H17.2462"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.09961 11.8386C6.52242 10.7812 7.30035 9.90403 8.2997 9.35794C9.29905 8.81184 10.4574 8.63089 11.5757 8.84617C12.694 9.06146 13.7024 9.65955 14.4275 10.5376C15.1527 11.4157 15.5494 12.519 15.5494 13.6578C15.5494 14.7966 15.1527 15.8999 14.4275 16.778C13.7024 17.6561 12.694 18.2542 11.5757 18.4695C10.4574 18.6848 9.29905 18.5038 8.2997 17.9577C7.30035 17.4116 6.52242 16.5345 6.09961 15.4771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13C8 13 8 14.12 8.92 14.12C9.84 14.12 9.92 13 10.84 13C11.76 13 11.84 14.12 12.75 14.12C13.66 14.12 13.75 13 14.67 13C15.59 13 14.58 13.5 15.5 13.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.98505 15.4306C5.78879 15.4309 5.59981 15.3562 5.45681 15.2218C5.31381 15.0874 5.2276 14.9034 5.21582 14.7075V12.6152C5.2276 12.4193 5.31381 12.2353 5.45681 12.1008C5.59981 11.9664 5.78879 11.8917 5.98505 11.8921C6.17682 11.8921 6.36074 11.9683 6.49634 12.1039C6.63195 12.2395 6.70813 12.4234 6.70813 12.6152V14.7075C6.70813 14.8992 6.63195 15.0832 6.49634 15.2188C6.36074 15.3544 6.17682 15.4306 5.98505 15.4306V15.4306Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

WashingMachineIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default WashingMachineIcon;
