import React from "react";
import { palette } from "src/components/foundation/palette";

const IronIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7617 20.0229V21.6153"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09235 5.99219H15.1616C16.1335 5.99194 17.0948 6.19364 17.9847 6.5845L19.9385 7.43065C21.3519 8.05066 22.6144 8.96908 23.6395 10.1229C24.6645 11.2768 25.4278 12.6387 25.877 14.1153H5.81543V8.26912C5.8234 7.66772 6.06584 7.09318 6.49113 6.66789C6.91642 6.2426 7.49095 6.00015 8.09235 5.99219V5.99219Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.4462 15.4383H5.81543V14.1152H25.877L26.4462 15.4383Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6612 11.1845H8.79967C8.63007 11.2067 8.45763 11.19 8.29549 11.1355C8.13335 11.081 7.9858 10.9902 7.8641 10.87C7.74241 10.7497 7.64978 10.6033 7.59328 10.4419C7.53679 10.2804 7.51793 10.1082 7.53814 9.93831C7.53814 9.49216 7.53814 9.046 7.53814 8.59985C7.53133 8.44756 7.5567 8.29555 7.61259 8.15373C7.66848 8.01191 7.75364 7.88346 7.86251 7.77677C7.97139 7.67007 8.10153 7.58752 8.24445 7.5345C8.38737 7.48149 8.53986 7.4592 8.69198 7.46908C10.0228 7.46908 11.3458 7.46908 12.6766 7.46908C13.3538 7.52507 14.0032 7.76347 14.5559 8.15896C15.1085 8.55445 15.5436 9.09226 15.8151 9.71523C15.8799 9.88512 15.9011 10.0686 15.8765 10.2488C15.8519 10.429 15.7824 10.6001 15.6744 10.7464C15.5664 10.8927 15.4234 11.0095 15.2584 11.086C15.0934 11.1626 14.9119 11.1964 14.7304 11.1845H11.6612Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09246 5.99245V4.33861C8.09246 3.82175 7.88767 3.32594 7.52291 2.95975C7.15816 2.59355 6.66316 2.3868 6.1463 2.38477H2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.7617 17.0308V18.6154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4688 16.9307L24.9534 18.446"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3848 19.7847L25.8771 21.3001"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8771 16.9307L20.3848 18.446"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9534 19.7847L19.4688 21.3001"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.354 9.96143H11.6386C11.4726 9.96141 11.3133 10.0268 11.1953 10.1434C11.0772 10.2601 11.0098 10.4185 11.0078 10.5845V11.1383H13.9847V10.5845C13.9827 10.4185 13.9154 10.2601 13.7973 10.1434C13.6792 10.0268 13.5199 9.96141 13.354 9.96143Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IronIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default IronIcon;
