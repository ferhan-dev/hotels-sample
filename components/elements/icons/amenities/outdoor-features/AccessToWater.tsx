import React from "react";
import { palette } from "src/components/foundation/palette";

const AccessToWaterIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M2 13C4.79732 13 4.79732 16 7.59911 16C10.4009 16 10.4009 13 13.1982 13C15.9955 13 16 16 18.7973 16C21.5946 16 21.5991 13 24.3964 13C27.1937 13 27.1982 16 30 16"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M2 16C4.79732 16 4.79732 20 7.59911 20C10.4009 20 10.4009 16 13.1982 16C15.9955 16 16 20 18.7973 20C21.5946 20 21.5991 16 24.3964 16C27.1937 16 27.1982 20 30 20"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path d="M18 10V16" stroke={stroke} strokeMiterlimit="10" />
      <path d="M18 4V7" stroke={stroke} strokeMiterlimit="10" />
      <path d="M5 10V15" stroke={stroke} strokeMiterlimit="10" />
      <path d="M5 4V6" stroke={stroke} strokeMiterlimit="10" />
      <path d="M2 10H21V7H2" stroke={stroke} strokeMiterlimit="10" />
    </svg>
  );
};

AccessToWaterIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default AccessToWaterIcon;
