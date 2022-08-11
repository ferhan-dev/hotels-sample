import React from "react";
import { palette } from "src/components/foundation/palette";

const ViewIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2.92529H26.4314" stroke={stroke} strokeMiterlimit="10" />
      <path
        d="M24.3841 2.92529H4.05469V21.6076H24.3841V2.92529Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M8.98787 3.11377V3.44318C8.9857 6.41992 8.28169 9.35422 6.93297 12.0079H4.09375"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M6.93359 12.0078L7.76497 21.6078"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M19.4512 3.11377V3.44318C19.4533 6.41992 20.1574 9.35422 21.5061 12.0079H24.3453"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M21.4983 12.0078L20.6748 21.6078"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M21.4899 13.9688L18.6115 11.9453L15.5684 14.3453"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M18.0858 16.1568L10.925 11.1294L7.11328 14.1255"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M14.2435 10.1959C15.1141 10.1959 15.8199 9.4901 15.8199 8.61944C15.8199 7.74878 15.1141 7.04297 14.2435 7.04297C13.3728 7.04297 12.667 7.74878 12.667 8.61944C12.667 9.4901 13.3728 10.1959 14.2435 10.1959Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path d="M1.91016 3.85098V2" stroke={stroke} strokeMiterlimit="10" />
      <path d="M26.5215 3.85098V2" stroke={stroke} strokeMiterlimit="10" />
    </svg>
  );
};

ViewIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default ViewIcon;
